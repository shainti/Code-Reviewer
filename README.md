# 🤖 AI Code Review Bot

An AI-powered GitHub bot that automatically reviews Pull Requests using Groq LLaMA and posts review feedback directly on GitHub.

## ✨ Features

* 🔍 Automatic Pull Request reviews
* 🤖 AI-powered code analysis with Groq LLaMA
* 💬 Posts review comments on GitHub PRs
* ⚡ Webhook-based real-time processing
* 🔗 GitHub API integration
* ☁️ Easy deployment on Render
* 🔒 Secure environment variable management
* 🚀 Works with any GitHub repository

## 🛠 Tech Stack

* Node.js
* Express.js
* Groq SDK
* GitHub REST API
* GitHub Webhooks
* Axios
* Render

## 🚀 Workflow

1. Open a Pull Request
2. GitHub triggers a webhook
3. Bot fetches PR changes
4. Groq AI reviews the code
5. Review feedback is posted automatically

## 💻 Local Setup

```bash
# Clone repository
git clone https://github.com/shainti/ai-code-reviewer.git

# Navigate to project
cd ai-code-reviewer

# Install dependencies
npm install

# Create .env file
GITHUB_TOKEN=your_github_token
GROQ_API_KEY=your_groq_api_key

# Start server
node index.js
```

Server runs at:

```bash
http://localhost:3000
```

## 📂 Project Structure

```bash
ai-code-reviewer/
├── index.js
├── package.json
├── .env
├── .gitignore
└── README.md
```

## 📌 Resume Description

Built an AI-powered GitHub bot that automatically reviews Pull Requests using Groq LLaMA, analyzes code changes, and posts review feedback through GitHub APIs. Implemented webhook-based automation and deployed on Render for automated code review workflows.

**Tech:** Node.js, Express.js, Groq AI, GitHub API, Webhooks, Render

## 👨‍💻 Author

Shainti

GitHub: github.com/shainti
LinkedIn: linkedin.com/in/shainti
