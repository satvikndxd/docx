# AI-Powered Document Generator

This Flask-based web application leverages Google's Generative AI (Gemini) to create detailed Word documents on any given topic. It offers a user-friendly interface for generating comprehensive, well-structured documents with minimal input.

## Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Key Functions](#key-functions)
- [Customization](#customization)
- [Error Handling](#error-handling)
- [API Integration](#api-integration)
- [Performance Optimization](#performance-optimization)
- [Security Considerations](#security-considerations)
- [Testing](#testing)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [Contact](#contact)
- [License](#license)
- [Acknowledgements](#acknowledgements)
- [Future Improvements](#future-improvements)

## Features

- Generate comprehensive Word documents on any topic
- Customizable document structure with options for default or user-defined outlines
- Adjustable document length based on user preference
- Parallel processing for faster content generation using ThreadPoolExecutor
- Formatted output with proper headings, bullet points, and styling using python-docx
- Responsive web interface for easy interaction

## Requirements

- Python 3.7+
- Flask
- google-generativeai
- python-docx
- concurrent.futures (part of Python's standard library)

## Installation

1. Clone this repository:
   ```
   git clone https://github.com/yourusername/ai-document-generator.git
   cd ai-document-generator
   ```

2. Install the required packages:
   ```
   pip install -r requirements.txt
   ```

3. Set up your Google Generative AI API key:
   - Open `app.py`
   - Locate the `configure_gemini_api()` function
   - Replace the placeholder API key with your actual Gemini API key

## Usage

1. Run the Flask application:
   ```
   python app.py
   ```

2. Open a web browser and navigate to `http://localhost:5000`

3. Fill in the form with the following details:
   - Topic: The main subject of your document
   - Structure: Choose between default or custom structure
   - Custom Structure (optional): If custom structure is selected, provide your own outline
   - Number of Pages: Approximate desired length of the document

4. Click "Generate Document" to create and download your AI-generated Word document.

## Project Structure

- `app.py`: Main Flask application file containing all the logic for document generation
  - `configure_gemini_api()`: Sets up the Gemini API configuration
  - `generate_text()`: Generates text using the Gemini AI model
  - `create_content()`: Creates the document content structure
  - `create_word_document()`: Formats and saves the generated content as a Word document
  - `apply_formatting()`: Applies specific formatting to paragraphs in the document
- `templates/index.html`: HTML template for the web interface
- `generated.docx`: Output file (generated when a document is created)
- `requirements.txt`: List of Python package dependencies
- `README.md`: Project documentation (this file)
- `LICENSE`: MIT License file

## Key Functions

### `generate_text(prompt, max_tokens=None)`
Generates text using the Gemini AI model based on the given prompt and token limit.

### `create_content(topic, structure=None, max_tokens=None)`
Creates the content structure for the document, including generating an outline if not provided.

### `create_word_document(content, filename='generated.docx')`
Formats the generated content into a properly structured Word document with appropriate styling.

### `apply_formatting(paragraph, text)`
Applies specific formatting to paragraphs in the document, including bullet points and font styles.

## Customization

You can customize the document appearance by modifying the `create_word_document()` function in `app.py`. This includes changing fonts, sizes, colors, and other formatting options.

### Styling Options
- Font: Currently set to Arial
- Font Size: 24pt for headings, 18pt for body text
- Colors: Black for all text (can be customized using RGBColor)
- Alignment: Left-aligned for all text
- Margins: 1 inch on all sides

To modify these settings, adjust the corresponding values in the `create_word_document()` function.

## Error Handling

The application includes basic error handling for API responses and file saving operations. For production use, consider implementing more robust error handling and user feedback mechanisms.

### Current Error Handling
- API response validation in `generate_text()`
- Exception catching for document saving in `create_word_document()`

### Suggested Improvements
- Implement custom exception classes for different error types
- Add logging for better debugging and monitoring
- Provide user-friendly error messages in the web interface

## API Integration

The project uses Google's Generative AI (Gemini) for content generation. The API is configured in the `configure_gemini_api()` function.

### API Usage
- Model: 'gemini-pro'
- Configuration: Customizable max_output_tokens

To modify API settings or switch to a different model, update the `generate_text()` function.

## Performance Optimization

The application uses ThreadPoolExecutor for parallel processing of content generation, improving overall performance.

### Current Optimizations
- Parallel content generation for different sections
- Adjustable token limit based on desired document length

### Potential Further Optimizations
- Implement caching for frequently requested topics
- Optimize API calls to reduce token usage
- Consider asynchronous processing for very large documents

## Security Considerations

- API Key Protection: Currently, the API key is hardcoded in the `app.py` file. For production use, consider using environment variables or a secure key management system.
- Input Validation: Implement thorough input validation to prevent potential security vulnerabilities.
- HTTPS: When deploying, ensure the application is served over HTTPS to protect user data in transit.

## Testing

Currently, the project does not include automated tests. Consider adding the following types of tests:

- Unit tests for individual functions (e.g., `generate_text()`, `create_content()`)
- Integration tests for the complete document generation process
- UI tests for the web interface

Use a testing framework like pytest to implement and run these tests.

## Deployment

For deploying this application to a production environment:

1. Choose a hosting platform (e.g., Heroku, AWS, Google Cloud)
2. Set up environment variables for sensitive information (API keys)
3. Configure a production-ready web server (e.g., Gunicorn)
4. Set up proper logging and monitoring
5. Ensure all security measures are in place (HTTPS, input validation, etc.)

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
5. Push to the branch (`git push origin feature/AmazingFeature`)
6. Open a Pull Request

Please ensure your code adheres to the project's coding standards and includes appropriate tests.

## Contact

For any queries, suggestions, or collaborations, please contact:

Anand Satvik - anandsatvik373@gmail.com

Project Link: [https://github.com/yourusername/ai-document-generator](https://github.com/yourusername/ai-document-generator)

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgements

- [Google Generative AI](https://ai.google.dev/)
- [Flask](https://flask.palletsprojects.com/)
- [python-docx](https://python-docx.readthedocs.io/)

## Future Improvements

- Implement user authentication for personalized experiences
- Add support for different document formats (e.g., PDF, Markdown)
- Integrate with cloud storage services for document management
- Implement a caching mechanism to improve performance for repeated queries
- Add a progress bar for document generation
- Implement a feedback system for users to rate generated documents
- Create an API endpoint for programmatic document generation
- Develop a mobile-friendly version of the web interface
- Implement multi-language support for document generation
