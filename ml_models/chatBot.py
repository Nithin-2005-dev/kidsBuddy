import json
from datasets import Dataset, load_dataset
from transformers import AutoTokenizer, AutoModelForCausalLM, Trainer, TrainingArguments
# Load the dataset
with open("social_skills_dataset.json", "r") as f:
    data = json.load(f)

# Prepare the data for Hugging Face format
conversations = []
for item in data:
    for turn in item["conversations"]:
        conversations.append({
            "input_text": turn["text"], 
            "role": turn["role"]
        })

# Convert to Hugging Face Dataset format
dataset = Dataset.from_dict({"text": [conv["input_text"] for conv in conversations]})
# Load pre-trained tokenizer
tokenizer = AutoTokenizer.from_pretrained("microsoft/DialoGPT-small")

# Tokenize the data
def tokenize_function(examples):
    return tokenizer(examples["text"], padding="max_length", truncation=True, max_length=128)

tokenized_dataset = dataset.map(tokenize_function, batched=True)
# Load pre-trained model
model = AutoModelForCausalLM.from_pretrained("microsoft/DialoGPT-small")

# Set training arguments
training_args = TrainingArguments(
    output_dir="./chatbud_model",
    evaluation_strategy="epoch",
    learning_rate=2e-5,
    weight_decay=0.01,
    num_train_epochs=3,
    per_device_train_batch_size=2,
    per_device_eval_batch_size=2,
    save_steps=500,
    save_total_limit=2,
)
trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=tokenized_dataset,
)

# Start training
trainer.train()
# Save the model and tokenizer
model.save_pretrained("./chatbud_model")
tokenizer.save_pretrained("./chatbud_model")