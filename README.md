# AI Code Review Bot 🤖

Automatically reviews GitHub Pull Requests using Groq LLaMA AI.

## Features
- Auto-detects new Pull Requests via webhook
- Fetches code diff from GitHub
- Reviews code using Groq LLaMA AI
- Posts review as PR comment automatically

## Tech Stack
- Node.js, Express
- GitHub Webhooks & REST API
- Groq LLaMA AI
- dotenv

## Setup
1. Clone the repo
2. Run `npm install`
3. Add `.env` file with your tokens
4. Run `node index.js`
