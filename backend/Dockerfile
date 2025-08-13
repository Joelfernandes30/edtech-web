# Use official Python image
FROM python:3.11-slim

# Set working directory
WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

# Copy requirements first (better caching)
COPY requirements.txt .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt gunicorn

# Copy app code
COPY . .

# Expose backend port
EXPOSE 5000

# Run with Gunicorn in production mode
# "app:app" means app.py file and app = Flask(__name__) instance
CMD ["gunicorn", "--bind", "0.0.0.0:5000", "--workers", "4", "app:app"]
