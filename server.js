const express = require("express");
const app = express();

app.use(express.json());

// Health check (optional)
app.get("/", (req, res) => {
  res.json({ status: "Video renderer running" });
});

// IMPORTANT: ROOT POST ENDPOINT
app.post("/", async (req, res) => {
  console.log("Render request received");
  console.log(req.body);

  // TEMP: fake video output to satisfy Lovable
  res.json({
    videoUrl: "https://example.com/fake-video.mp4"
  });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server running");
});
