import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";

import mainRouter from "./routes";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use(mainRouter)

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
