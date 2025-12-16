const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ status: "Video renderer running" });
});

app.post("/render", async (req, res) => {
  console.log("Render request received");
  console.log("Body:", req.body);

  // MUST return video_url (Lovable requires this)
  res.json({
    success: true,
    video_url: "https://example.com/fake-video.mp4"
  });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server running");
});
