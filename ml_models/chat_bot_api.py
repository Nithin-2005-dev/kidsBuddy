from flask import Flask, request, jsonify
from transformers import AutoModelForCausalLM, AutoTokenizer
import torch
from flask_cors import CORS
# Initialize the Flask app
app = Flask(__name__)
CORS(app)
# Load the tokenizer and model
tokenizer = AutoTokenizer.from_pretrained("microsoft/DialoGPT-medium")
model = AutoModelForCausalLM.from_pretrained("microsoft/DialoGPT-medium")

# Set up device
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
model.to(device)

# Keep track of chat history for each session
chat_history = {}

def generate_response(user_input, chat_history_ids=None, max_length=1000):
    new_user_input_ids = tokenizer.encode(user_input + tokenizer.eos_token, return_tensors='pt').to(device)
    if chat_history_ids is None:
        bot_input_ids = new_user_input_ids
    else:
        bot_input_ids = torch.cat([chat_history_ids, new_user_input_ids], dim=-1)

    chat_history_ids = model.generate(bot_input_ids, max_length=max_length, pad_token_id=tokenizer.eos_token_id)
    response_text = tokenizer.decode(chat_history_ids[:, bot_input_ids.shape[-1]:][0], skip_special_tokens=True)
    
    return response_text, chat_history_ids

# Define the /generate endpoint
@app.route('/generate', methods=['GET'])
def generate():
    user_input = request.args.get("input")
    session_id = request.args.get("session_id", "default")  # optional session ID for multi-user

    if not user_input:
        return jsonify({"error": "No input provided"}), 400

    # Retrieve or initialize chat history
    chat_history_ids = chat_history.get(session_id, None)

    # Generate response
    response_text, chat_history_ids = generate_response(user_input, chat_history_ids)

    # Store chat history
    chat_history[session_id] = chat_history_ids

    return jsonify({"response": response_text})

# Run the app
if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000)
