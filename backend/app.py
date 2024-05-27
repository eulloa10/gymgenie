import os

import google.generativeai as genai
from flask import Flask, Response, jsonify, request, stream_with_context
from flask_cors import CORS
from dotenv import load_dotenv

load_dotenv()

genai.configure(api_key = os.environ.get('GEMINI_API_KEY'))

app = Flask(__name__)
CORS(app)

# Set up the model
generation_config = {
    "temperature": 0.9,
    "top_p": 1,
    "top_k": 1,
    "max_output_tokens": 400,
}

@app.route("/")
def index():
    return jsonify({
        "status": {
            "code": 200,
            "message": "Success fetching the API"
        },
        "data": None,
    }), 200

@app.route("/generate_text_stream", methods=["GET", "POST"])
def generate_text_stream():
    if request.method == "POST":
        input_data = request.get_json()
        prompt = input_data["prompt"]
        model = genai.GenerativeModel(model_name="gemini-pro",
                                      generation_config=generation_config,
        )

        def generate_stream():
            response = model.generate_content(prompt, stream=True)
            for chunk in response:
                print(chunk.text)
                yield chunk.text + "\n"

        return Response(stream_with_context(generate_stream()), mimetype="text/plain")
    else:
        return jsonify({
            "status": {
                "code": 405,
                "message": "Method not allowed"
            },
            "data": None
        }), 405
