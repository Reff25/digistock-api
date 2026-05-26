const express = require("express");
const app = express();

app.use(express.json());

// Home
app.get("/", (req, res) => {
  res.send("DigiStock API is running 🔥");
});

// Status
app.get("/status", (req, res) => {
  res.json({ ok: true });
});

// Validate key (demo)
app.post("/validate-key", (req, res) => {
  const { key } = req.body;

  if (!key) {
    return res.json({ valid: false });
  }

  if (key === "TRIAL-123") {
    return res.json({
      valid: true,
      type: "trial",
      days: 45
    });
  }

  if (key === "FULL-999") {
    return res.json({
      valid: true,
      type: "normal",
      days: 36500
    });
  }

  return res.json({ valid: false });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
