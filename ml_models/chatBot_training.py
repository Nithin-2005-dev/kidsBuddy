from transformers import AutoModelForCausalLM, AutoTokenizer
import torch
import pandas as pd
from torch.utils.data import DataLoader, TensorDataset
from transformers import AdamW
# Load pre-trained DialoGPT model and tokenizer
model_name = "microsoft/DialoGPT-medium"
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForCausalLM.from_pretrained(model_name)
splits = {'train': 'data/train-00000-of-00001.parquet', 'valid': 'data/valid-00000-of-00001.parquet', 'test': 'data/test-00000-of-00001.parquet'}
df = pd.read_parquet("hf://datasets/Estwld/empathetic_dialogues_llm/")
def preprocess_conversations(data):
    conversations = []
    for idx, row in data.iterrows():
        # Add both input and response with EOS token for each turn
        conversation = row['input_text'] + tokenizer.eos_token + row['response_text'] + tokenizer.eos_token
        conversations.append(conversation)
    return conversations

# Create tokenized input for each conversation
conversations = preprocess_conversations(df)
tokenized_conversations = tokenizer(conversations, return_tensors="pt", padding=True, truncation=True)
input_ids = tokenized_conversations['input_ids']
attention_mask = tokenized_conversations['attention_mask']
dataset = TensorDataset(input_ids, attention_mask)
dataloader = DataLoader(dataset, batch_size=2, shuffle=True)

# Set up optimizer and hyperparameters
optimizer = AdamW(model.parameters(), lr=5e-5)
epochs = 3

# Move model to GPU if available
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
model.to(device)

# Training loop
model.train()
for epoch in range(epochs):
    print(f"Epoch {epoch + 1}/{epochs}")
    for batch in dataloader:
        # Move batch to the same device as the model
        input_ids, attention_mask = batch[0].to(device), batch[1].to(device)

        # Forward pass
        outputs = model(input_ids, attention_mask=attention_mask, labels=input_ids)
        loss = outputs.loss

        # Backward pass
        optimizer.zero_grad()
        loss.backward()
        optimizer.step()

        print(f"Loss: {loss.item()}")

model.save_pretrained("fine_tuned_dialoGPT")
tokenizer.save_pretrained("fine_tuned_dialoGPT")
print("Model saved!")
# Load the fine-tuned model and tokenizer
tokenizer = AutoTokenizer.from_pretrained("fine_tuned_dialoGPT")
model = AutoModelForCausalLM.from_pretrained("fine_tuned_dialoGPT")
chat_history_ids = None

print("ChatBud: Hi there! How can I help you today?")

while True:
    user_input = input("You: ")
    
    # Encode user input and append to chat history
    new_user_input_ids = tokenizer.encode(user_input + tokenizer.eos_token, return_tensors='pt').to(device)
    bot_input_ids = torch.cat([chat_history_ids, new_user_input_ids], dim=-1) if chat_history_ids is not None else new_user_input_ids

    # Generate response
    chat_history_ids = model.generate(bot_input_ids, max_length=1000, pad_token_id=tokenizer.eos_token_id)
    response = tokenizer.decode(chat_history_ids[:, bot_input_ids.shape[-1]:][0], skip_special_tokens=True)
    print(f"ChatBud: {response}")
    
    if user_input.lower() in ["exit", "quit", "bye"]:
        print("ChatBud: Goodbye!")
        break
