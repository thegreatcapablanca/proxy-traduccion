// Archivo: server.js (para Vercel o cualquier backend Express compatible)

import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/translate", async (req, res) => {
  try {
    const response = await fetch("https://libretranslate.de/translate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body),
    });

    if (!response.ok) {
      return res.status(response.status).json({ error: "LibreTranslate falló" });
    }

    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error("Error al traducir:", err);
    res.status(500).json({ error: "Error interno del servidor" });
  }
});

export default app;

// Para Vercel
export const config = {
  api: {
    bodyParser: true,
  },
};
