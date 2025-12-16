const express = require("express");
const app = express();

app.use(express.json());

// Health check (used by browser + Render)
app.get("/", (req, res) => {
  res.json({ status: "Video renderer running" });
});

// 🔥 THIS IS WHAT LOVABLE CALLS
// Lovable ALWAYS does: POST /render
app.post("/render", async (req, res) => {
  console.log("🔥 /render called");
  console.log("Request body:", req.body);

  // TEMP: return a fake video so Lovable succeeds
  // (we will replace this with real FFmpeg later)
  res.json({
    videoUrl: "https://example.com/test-video.mp4"
  });
});

// ⚠️ MUST BE LAST
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

