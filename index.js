import { v4 } from "uuid";
import express from "express";
import "dotenv/config";

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/product", (req, res) => {
  res.send("send products here");
}); // Datenbank verbindung holen

app.post("/product", (req, res) => {
  res.send("Create product here...");
});

app.put("/product/:id", (req, res) => {
  res.send("Update product here...");
});

app.delete("/product/:id", (req, res) => {
  res.status(404).send("Storry, not existing yet");
});

app.listen(PORT, () => {
  console.log(`Server online auf Port http://localhost:${PORT}`);
});
