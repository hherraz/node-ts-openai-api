import { Router } from "express";
import { obtenerRespuestaOpenAi } from "../controllers/openai.controller";

const router = Router();

router.get("/", (req, res) => {
  res.status(200).send({
    message: "Hola soy el BOT de OpenAI 🤖",
  })
});

router.post("/", obtenerRespuestaOpenAi);

export default router;