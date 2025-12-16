const express = require("express");
const cors = require("cors");

const app = express();

// Allow browser requests
app.use(cors());

// Parse JSON bodies
app.use(express.json());

// Health check
app.get("/", (req, res) => {
  res.json({ status: "Video renderer running" });
});

// REQUIRED POST endpoint
app.post("/render", async (req, res) => {
  console.log("Render request received");
  console.log("Payload:", req.body);

  // TEMP fake response to unblock V1
  const fakeVideoUrl = `https://${process.env.RENDER_EXTERNAL_HOSTNAME}`;

  res.json({
    success: true,
    video_url: fakeVideoUrl,
  });
});

// Start server
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

