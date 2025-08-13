from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
from datetime import datetime
import os

app = Flask(__name__)
CORS(app, origins=[
    "https://techmiyaedtech.com",
    "http://localhost:8080",
    "http://localhost:5000",
    "http://34.60.27.209:8080",
    "http://34.60.27.209:5000"
])

# MongoDB connection
mongo_uri = "mongodb+srv://techmiyaedtech:gW6aIInda5rYU6T3@cluster0.ofgnlod.mongodb.net/"
client = MongoClient(mongo_uri)
db = client["TechMiyaDB"]
collection = db["registrations"]

@app.route("/")
def home():
    return "hi"

@app.route("/register", methods=["POST"])
def register():
    try:
        data = request.get_json()
        if not data:
            return jsonify({"error": "No data provided"}), 400
        data["created_at"] = datetime.utcnow()
        result = collection.insert_one(data)
        return jsonify({
            "message": "Registration saved successfully",
            "id": str(result.inserted_id)
        }), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=int(os.environ.get("PORT", 8080)))
