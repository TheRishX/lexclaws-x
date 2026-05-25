import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API endpoint for legal chat
  app.post("/api/legal-chat", async (req, res) => {
    try {
      const { prompt, history } = req.body;
      const apiKey = process.env.GEMINI_API_KEY;
      
      if (!apiKey || apiKey === "MY_GEMINI_API_KEY" || apiKey.trim() === "") {
        return res.json({ 
          text: "Hi! I am LexBot, Lex Claws' virtual legal intake assistant. It seems I am currently running without an active Gemini API Key. Let me guide you about our specialized services:\n\nAt Lex Claws, we provide expert legal representation and consultation in New Delhi across Criminal Law, Family Law (Divorce/Custody), Civil litigations, Contract drafting, Cyber Crimes, and Trademark protection. Feel free to use our instant call/WhatsApp triggers or use the interactive booking panels below to meet our senior advocates!" 
        });
      }

      const ai = new GoogleGenAI({
        apiKey: apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          }
        }
      });

      const systemInstruction = `You are "LexBot", an advanced legal information AI assistant representing "Lex Claws", an all-in-one legal solutions firm based in or around New Delhi, India. 
      Your goals:
      1. Greet visitors warmly, build reassurance, and act as a professional legal intake specialist.
      2. Offer educational insights and explain fundamental concepts under Indian Law (e.g., Section 138 check bounce timeline, anticipatory bail criteria under BNS/CrPC, trademark filing phases, corporate non-disclosure agreements).
      3. CRITICAL: Provide a clear legal awareness disclaimer in your first message, highlighting that your input is informational, and urge clients to book formal consultation.
      4. Suggest relevant Lex Claws departments (e.g., Family Dispute cell, Intellectual Property Desk).
      5. Keep responses highly structural, scannable, and under 220 words.`;

      // Map roles correctly for GenAI SDK
      const contents = history && history.length > 0 
        ? history.map((m: any) => ({
            role: m.role === 'model' ? 'model' as const : 'user' as const,
            parts: [{ text: m.text }]
          }))
        : [];
      
      contents.push({
        role: 'user' as const,
        parts: [{ text: prompt }]
      });

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: contents,
        config: {
          systemInstruction: systemInstruction,
          temperature: 0.6,
        },
      });

      res.json({ text: response.text });
    } catch (error: any) {
      console.error("Gemini Error:", error);
      res.status(500).json({ error: error.message || "Unable to retrieve insights at this moment" });
    }
  });

  // Vite integration
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Lex Claws Legal server running on http://localhost:${PORT}`);
  });
}

startServer();
