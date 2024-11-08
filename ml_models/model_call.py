import torch
from transformers import AutoTokenizer, AutoModelForCausalLM, Trainer, TrainingArguments
# Load fine-tuned model and tokenizer
model = AutoModelForCausalLM.from_pretrained("./chatbud_model")
tokenizer = AutoTokenizer.from_pretrained("./chatbud_model")

# Start conversation with ChatBud
print("ChatBud: Hi! I’m here to help you practice social skills. What's on your mind?")

chat_history_ids = None

while True:
    user_input = input("You: ")
    
    # Encode the new user input and add the tokens to the chat history
    new_input_ids = tokenizer.encode(user_input + tokenizer.eos_token, return_tensors="pt")

    # Append the new user input to the chat history
    bot_input_ids = torch.cat([chat_history_ids, new_input_ids], dim=-1) if chat_history_ids is not None else new_input_ids

    # Generate response
    chat_history_ids = model.generate(bot_input_ids, max_length=1000, pad_token_id=tokenizer.eos_token_id)

    # Decode response
    bot_response = tokenizer.decode(chat_history_ids[:, bot_input_ids.shape[-1]:][0], skip_special_tokens=True)
    print(f"ChatBud: {bot_response}")

    # End chat if user wants to quit
    if user_input.lower() in ["exit", "quit", "bye"]:
        print("ChatBud: Goodbye! Talk to you soon.")
        break