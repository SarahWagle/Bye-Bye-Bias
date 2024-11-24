from flask import Flask, request, jsonify
import asyncio
from ollama import AsyncClient
from flask_cors import CORS  

app = Flask(name)

# Apply CORS to allow requests from different origins (React frontend)
CORS(app)

# Define the chat function to detect bias
async def chat(input_text):
    prompt ='Please make suggestions to make the email more inclusive' 
    message = {'role': 'user', 'content': prompt + input_text} 
    
    options = {
        'num_thread': 8,
        'temperature': 0.06,
        'top_k': 10,
        'top_p': 0.3,
        'num_predict': 50,
        'mirostat': 0,
    }
    
    # Send message to the Ollama model
    response = await AsyncClient().chat(model='tinyllama', options=options, messages=[message])
    return response['message']['content']

# Define a route to receive input from frontend
@app.route('/detect-bias', methods=['POST'])
async def detect_bias():
    input_text = request.json.get('input_text')  # Get input text from request
    response = await chat(input_text)  # Call chat function to detect bias
    return jsonify({'rephrased_text': response})  # Send the response as JSON

# Run the Flask app
if name == 'main':
    app.run(debug=True, port=3000) 