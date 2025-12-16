const express = require("express");
const app = express();

app.use(express.json());

/**
 * Health check
 * This is what you see when you visit the Render URL in the browser
 */
app.get("/", (req, res) => {
  res.json({ status: "Video renderer running" });
});

/**
 * Render endpoint
 * Supabase calls this endpoint
 */
app.post("/render", async (req, res) => {
  console.log("Render request received");

  // TEMP: Fake video URL so pipeline works end-to-end
  // This will be replaced with real FFmpeg output later
  const videoUrl = `https://${process.env.RENDER_EXTERNAL_HOSTNAME}`;

  res.json({
    success: true,
    video_url: videoUrl
  });
});

/**
 * Start server (MUST be last)
 */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
