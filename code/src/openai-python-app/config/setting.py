import os

# Set API keys

def get_google_api_key():
    api_key = "AIzaSyDaO0N62ym1AOjQYc6PKuK3s1_JN8W2tNg"
    os.environ["GOOGLE_API_KEY"] = api_key
    print("get key"+ os.environ.get("GOOGLE_API_KEY"))
    return os.environ.get("GOOGLE_API_KEY")
