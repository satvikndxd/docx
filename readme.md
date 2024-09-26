<p align="center">
  <img src="https://img.icons8.com/color/96/000000/document--v1.png" width="20%" alt="AI-Document-Generator-logo">
</p>
<p align="center">
    <h1 align="center">AI-POWERED DOCUMENT GENERATOR</h1>
</p>
<p align="center">
    <em><code>❯ Generate comprehensive Word documents on any topic using AI</code></em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/satvikndxd/docx?style=flat&logo=opensourceinitiative&logoColor=white&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/satvikndxd/docx?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/satvikndxd/docx?style=flat&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/satvikndxd/docx?style=flat&color=0080ff" alt="repo-language-count">
</p>
<p align="center">
		<em>Built with the tools and technologies:</em>
</p>
<p align="center">
	<img src="https://img.shields.io/badge/Python-3776AB.svg?style=flat&logo=Python&logoColor=white" alt="Python">
	<img src="https://img.shields.io/badge/Flask-000000.svg?style=flat&logo=Flask&logoColor=white" alt="Flask">
	<img src="https://img.shields.io/badge/Google_Cloud-4285F4?style=flat&logo=google-cloud&logoColor=white" alt="Google Cloud">
</p>

<br>

##### Table of Contents
- [Overview](#-overview)
- [Features](#-features)
- [Repository Structure](#-repository-structure)
- [Modules](#-modules)
- [Getting Started](#-getting-started)
    - [Prerequisites](#-prerequisites)
    - [Installation](#-installation)
    - [Usage](#-usage)
    - [Tests](#-tests)
- [Project Roadmap](#-project-roadmap)
- [Contributing](#-contributing)
- [License](#-license)
- [Acknowledgments](#-acknowledgments)

---

## Overview

This Flask-based web application leverages Google's Generative AI (Gemini) to create detailed Word documents on any given topic. It offers a user-friendly interface for generating comprehensive, well-structured documents with minimal input.

---

## Features

- Generate comprehensive Word documents on any topic
- Customizable document structure with options for default or user-defined outlines
- Adjustable document length based on user preference
- Parallel processing for faster content generation using ThreadPoolExecutor
- Formatted output with proper headings, bullet points, and styling using python-docx
- Responsive web interface for easy interaction

---

## Repository Structure

```sh
└── docx/
    ├── app.py
    ├── templates/
    │   └── index.html
    ├── .DS_Store
    ├── index.html
    ├── readme.md
    └── requirements.txt
```

---

## Modules

<details closed><summary>.</summary>

| File | Summary |
| --- | --- |
| [app.py](https://github.com/satvikndxd/docx/blob/main/app.py) | Main Flask application file containing all the logic for document generation |
| [requirements.txt](https://github.com/satvikndxd/docx/blob/main/requirements.txt) | List of Python package dependencies |
| [readme.md](https://github.com/satvikndxd/docx/blob/main/readme.md) | Project documentation (this file) |
| [index.html](https://github.com/satvikndxd/docx/blob/main/index.html) | Main HTML file for the web interface |

</details>

<details closed><summary>templates</summary>

| File | Summary |
| --- | --- |
| [index.html](https://github.com/satvikndxd/docx/blob/main/templates/index.html) | HTML template for the web interface |

</details>

---

## Getting Started

### Prerequisites

- Python 3.7+
- Google Generative AI API key

### Installation

1. Clone the docx repository:
```sh
❯ git clone https://github.com/satvikndxd/docx
```

2. Navigate to the project directory:
```sh
❯ cd docx
```

3. Install the required dependencies:
```sh
❯ pip install -r requirements.txt
```

4. Set up your Google Generative AI API key in `app.py`

### Usage

To run the project, execute the following command:

```sh
❯ python app.py
```

Then open a web browser and navigate to `http://localhost:5000`

### Tests

Currently, there are no automated tests for this project. Consider adding tests in future updates.

---

## Project Roadmap

- [X] **`Task 1`**: <strike>Implement basic document generation.</strike>
- [X] **`Task 2`**: <strike>Add customizable document structure.</strike>
- [ ] **`Task 3`**: Implement user authentication.
- [ ] **`Task 4`**: Add support for multiple document formats.

---

## Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Report Issues](https://github.com/satvikndxd/docx/issues)**: Submit bugs found or log feature requests for the `docx` project.
- **[Submit Pull Requests](https://github.com/satvikndxd/docx/pulls)**: Review open PRs, and submit your own PRs.
- **[Join the Discussions](https://github.com/satvikndxd/docx/discussions)**: Share your insights, provide feedback, or ask questions.

<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your GitHub account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
   git clone https://github.com/yourusername/docx
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to GitHub**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.
8. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch. Congratulations on your contribution!
</details>

---

## License

This project is open source and available under the [MIT License](https://github.com/satvikndxd/docx/blob/main/LICENSE).

---

## Acknowledgments

- [Google Generative AI](https://ai.google.dev/) for providing the AI model
- [Flask](https://flask.palletsprojects.com/) for the web framework
- [python-docx](https://python-docx.readthedocs.io/) for Word document generation

---

## Future Improvements

- Implement user authentication for personalized experiences
- Add support for different document formats (e.g., PDF, Markdown)
- Integrate with cloud storage services for document management
- Implement a caching mechanism to improve performance for repeated queries
- Develop a RESTful API for programmatic document generation
- Create a mobile application for on-the-go document creation
- Implement multi-language support for global users
- Add collaborative editing features for team projects
- Integrate with popular productivity tools (e.g., Google Docs, Microsoft Office)
- Implement advanced formatting options and templates

## Contact

For any questions, suggestions, or collaborations, please feel free to reach out:

- **Project Maintainer:** Satvik Anand
- **Email:** anandsatvik373@gmail.com
- **GitHub:** [@satvikndxd](https://github.com/satvikndxd)
- **LinkedIn:** [Your LinkedIn Profile](https://www.linkedin.com/in/satvik-anand-19019a283/)


We appreciate your feedback and contributions to make this project better!

---
