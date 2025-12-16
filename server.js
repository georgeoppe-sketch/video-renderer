// imports
const express = require("express");
const app = express();

app.use(express.json());

// existing routes
app.get("/", (req, res) => {
  res.json({ status: "Video renderer running" });
});

// ✅ ADD THIS UNDER EXISTING ROUTES
app.post("/render", async (req, res) => {
  console.log("Render request received");
  res.json({ success: true });
});

// ⚠️ MUST STAY LAST
app.listen(process.env.PORT || 3000, () => {
  console.log("Server running");
});
