from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
from datetime import datetime
import os
from dotenv import load_dotenv


app = Flask(__name__)

load_dotenv()

CORS(app,origins=["https://techmiyaedtech.com", "http://localhost:8080","http://localhost:5000"])  # Allow frontend to communicate with backend

# MongoDB connection
mongo_uri = os.getenv("MONGO_URL")
client = MongoClient(mongo_uri, serverSelectionTimeoutMS=5000)
db = client["TechMiyaDB"]  # Database name
collection = db["registrations"]  # Collection name

@app.route("/register", methods=["POST"])
def register():
    try:
        data = request.get_json()

        if not data:
            return jsonify({"error": "No data provided"}), 400

        # Add timestamp
        data["created_at"] = datetime.utcnow()

        # Insert into MongoDB
        result = collection.insert_one(data)

        return jsonify({
            "message": "Registration saved successfully",
            "id": str(result.inserted_id)
        }), 201

    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run(debug=True, port=5000)
