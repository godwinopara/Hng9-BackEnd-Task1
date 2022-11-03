const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    slackUsername: "@godwin",
    backend: true,
    age: 30,
    bio: "I am a ambition and passionate software developer. I thrive on challenges and constantly set goals for myself and I'm always looking for an opportunity to do better and achieve greatness",
  });
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.listen(5000);
