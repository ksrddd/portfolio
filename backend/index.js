require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
const projectRoutes = require("./src/routes/projects");
app.use("/api/projects", projectRoutes);

// oeo,emfoesmfsdm,fosdmfdf,
app.get("/", (req, res) => {
  res.json({ message: "Cyber Portfolio API is online." });
});

app.listen(PORT, () => {
  console.log(`[>>] Backend Server running on http://localhost:${PORT}`);
});
