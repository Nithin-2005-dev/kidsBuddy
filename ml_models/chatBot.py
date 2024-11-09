from transformers import AutoModelForCausalLM, AutoTokenizer
import torch

tokenizer = AutoTokenizer.from_pretrained("microsoft/DialoGPT-medium")
model = AutoModelForCausalLM.from_pretrained("microsoft/DialoGPT-medium")

chat_history_ids = None

def generate_response(user_input, chat_history_ids=None, max_length=1000):
    new_user_input_ids = tokenizer.encode(user_input + tokenizer.eos_token, return_tensors='pt')
    if chat_history_ids is None:
        bot_input_ids = new_user_input_ids
    else:
        bot_input_ids = torch.cat([chat_history_ids, new_user_input_ids], dim=-1)

    chat_history_ids = model.generate(bot_input_ids, max_length=max_length, pad_token_id=tokenizer.eos_token_id)
    response_text = tokenizer.decode(chat_history_ids[:, bot_input_ids.shape[-1]:][0], skip_special_tokens=True)
    
    return response_text, chat_history_ids


print("ChatBud: Hi there! I’m here to help you practice social skills. What's on your mind?")

while True:
    user_input = input("You: ")
    
    if user_input.lower() in ["exit", "quit", "bye"]:
        print("ChatBud: Goodbye! Talk to you soon.")
        break

    response_text, chat_history_ids = generate_response(user_input, chat_history_ids)
    print(f"ChatBud: {response_text}")
