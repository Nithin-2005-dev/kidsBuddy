from datasets import load_dataset
from transformers import AutoTokenizer, AutoModelForCausalLM, Trainer, TrainingArguments, DataCollatorForLanguageModeling

dataset = load_dataset("empathetic_dialogues")
train_data = dataset['train']

tokenizer = AutoTokenizer.from_pretrained("microsoft/DialoGPT-medium")

def preprocess_conversations(example):
    input_text = example['context'] + tokenizer.eos_token + example['response'] + tokenizer.eos_token
    return tokenizer(input_text, truncation=True)

tokenized_data = train_data.map(preprocess_conversations, remove_columns=train_data.column_names)
data_collator = DataCollatorForLanguageModeling(tokenizer=tokenizer, mlm=False)

model = AutoModelForCausalLM.from_pretrained("microsoft/DialoGPT-medium")

training_args = TrainingArguments(
    output_dir="./output",
    overwrite_output_dir=True,
    num_train_epochs=3,
    per_device_train_batch_size=2,
    save_steps=500,
    save_total_limit=2,
    prediction_loss_only=True,
)

trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=tokenized_data,
    data_collator=data_collator,
)

# Train and save the model
trainer.train()
model.save_pretrained("./chat_model")
tokenizer.save_pretrained("./chat_model")
