const express = require("express");
const axios = require("axios");
const {app} = require('./server')
app.use(express.json());
const Groq = require("groq-sdk");
require('dotenv').config();


const groq = new Groq({
  apiKey: process.env.groq,
});

const GITHUB_TOKEN =
  process.env.githubtoken;


app.post("/webhook", async (req, res) => {
  const pr = req.body.pull_request;
  const action = req.body.action;

  if (action !== "opened") return res.send("ok");

  // Step 1 - diff fetch karo
  const response = await axios.get(pr.diff_url, {
    headers: { Authorization: `token ${GITHUB_TOKEN}` },
  });
  const diff = response.data;

  // Step 2 - OpenAI se review 
  const aiResponse = await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    messages: [
      {
        role: "system",
        content:
          "You are a code reviewer. Review the given code diff and suggest improvements, bugs, and best practices.",
      },
      {
        role: "user",
        content: `Review this code diff:\n\n${diff}`,
      },
    ],
  });

  const review = aiResponse.choices[0].message.content;
  console.log("AI Review:", review);
  res.send("ok");


  const repoFullName = req.body.repository.full_name;
  const prNumber = req.body.pull_request.number;

  await axios.post(
    `https://api.github.com/repos/${repoFullName}/issues/${prNumber}/comments`,
    { body: review },
    {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
        "Content-Type": "application/json",
      },
    },
  );

  console.log("Comment posted on GitHub!");
});

