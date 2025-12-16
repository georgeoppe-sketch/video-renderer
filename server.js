const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ status: "Video renderer running" });
});

app.post("/render", async (req, res) => {
  console.log("Render request received");
  console.log("Payload:", req.body);

  // TEMP: fake output video (confirms pipeline works)
  const videoUrl = `https://${process.env.RENDER_EXTERNAL_HOSTNAME}/test.mp4`;

  res.json({
    success: true,
    video_url: videoUrl
  });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server running");
});

