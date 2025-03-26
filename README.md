# Documentation: AI-Powered Email Classification & Key Extraction

This project is an AI-powered email classification and key information extraction tool built using Python and Streamlit. It allows users to upload email files (.eml), PDFs, and DOCX documents, and automatically classifies the email intent using the Hugging Face API. Additionally, it extracts user-defined key details from the email content and detects duplicate files based on text similarity.

## Table of Contents

1. Prerequisites
2. Installation
3. Configuration
4. Running the Application
5. Features
6. Usage
7. Troubleshooting
8. License
9. Acknowledgments

## Prerequisites

Before running the application, ensure you have the following installed on your local machine:

- Python 3.8 or higher
- pip (Python package installer)
- Git (optional, for cloning the repository)

## Installation

### Clone the Repository (optional)

If you have Git installed, you can clone the repository to your local machine:

```sh
git clone https://github.com/your-repository/your-project.git
cd your-project
```

### Install Dependencies

Install the required Python packages:

```sh
pip install streamlit pdfplumber python-docx requests transformers pandas beautifulsoup4 scikit-learn
```

## Configuration

### Hugging Face API Token

The application uses the Hugging Face API for email intent classification. You need to obtain an API token from Hugging Face.

1. **Create a Hugging Face account**:
   - Go to the [Hugging Face website](https://huggingface.co/).
   - Sign up for a new account or log in if you already have one.

2. **Generate an API token**:
   - Once logged in, click on your profile picture in the top right corner and select "Settings" from the dropdown menu.
   - In the settings page, navigate to the "Access Tokens" section.
   - Click on the "New token" button to create a new API token.
   - Give your token a name and select the appropriate scope (e.g., `read` for read-only access).
   - Click on the "Generate" button to create the token.

3. **Replace the placeholder token in the code**:
   - Open the `EmailClassifier.py` file located in app.
   - Replace the placeholder `HUGGINGFACE_API_TOKEN` with your actual Hugging Face API token:

```python
HUGGINGFACE_API_TOKEN = "your_actual_huggingface_api_token_here"
```

### Model Configuration

The application uses the `mistralai/Mistral-7B-Instruct-v0.1` model for classification. If you want to use a different model, update the `HUGGINGFACE_API_URL` in the `EmailClassifier.py` file:

```python
HUGGINGFACE_API_URL = "https://api-inference.huggingface.co/models/your-model-name-here"
```

## Running the Application

### Start the Streamlit Application

After setting up the environment and configuring the API token, you can start the application by running:

```sh
streamlit run code/src/app/StreamlitUI.py
```

### Access the Application

Once the application is running, open your web browser and navigate to the URL provided in the terminal (usually `http://localhost:8501`).

You will see the Gen AI Orchestrator for Email and Document Triage/Routing.

## Features

### Email Intent Classification

The application uses the Hugging Face API to classify the intent of the email content. It returns the intent (e.g., "Request", "Information", "Query") along with a confidence score.

### Key Information Extraction

Users can define custom fields (e.g., "Folio Number", "Amount") to extract from the email content. The application uses regex patterns to extract the specified information.

### Duplicate Detection

The application detects duplicate files by comparing the text content using cosine similarity. Files with a similarity score above 85% are flagged as duplicates.

### Support for Multiple File Formats

The application supports .eml (email), .pdf, and .docx file formats. It extracts text from both the email body and attachments.

## Usage

### Upload Files

Click on the "Upload Multiple Files" button to upload .eml, .pdf, or .docx files. You can upload multiple files at once.

### Define Key Fields

In the "Enter Key Details to Extract" section, type the fields you want to extract (e.g., "Folio Number", "Amount") and press Enter. The fields will be added to the list of fields to extract.

### Process Files

After uploading the files and selecting the fields, the application will automatically process the files. It will classify the email intent, extract the specified key details, and check for duplicates.

### View Results

The processed results, including the email intent, confidence score, and extracted key details, will be displayed in a tabular format. Duplicate files will be flagged in the results.

## Troubleshooting

### API Request Failures

If the Hugging Face API request fails, check your API token and ensure it is correctly configured. Ensure that the model URL is correct and that the model is available on Hugging Face.

### File Upload Issues

Ensure that the uploaded files are in the correct format (.eml, .pdf, or .docx). If the application fails to extract text, check the file content and ensure it is not corrupted.

### Duplicate Detection

If the application incorrectly flags files as duplicates, adjust the similarity threshold in the `detect_duplicates` function.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

## Acknowledgments

- Hugging Face for providing the API and pre-trained models.
- Streamlit for the easy-to-use web framework.
- pdfplumber and python-docx for text extraction from PDF and DOCX files.
