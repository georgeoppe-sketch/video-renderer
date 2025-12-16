const express = require("express");
const app = express();

app.use(express.json());

// Health check
app.get("/", (req, res) => {
  res.json({ status: "Video renderer running" });
});

// REQUIRED endpoint
app.post("/render", async (req, res) => {
  console.log("Render request received");

  // TEMP: fake success response (to unblock Lovable)
  // Real FFmpeg comes later
  const fakeVideoUrl = `https://${process.env.RENDER_EXTERNAL_HOSTNAME}`;

  res.json({
    success: true,
    video_url: fakeVideoUrl
  });
});

// Must be last
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

