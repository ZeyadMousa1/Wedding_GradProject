import express from "express";
import dotenv from "dotenv";
import { hallRouter } from "./routes/hall";
import cors from "cors";

const app = express();

dotenv.config();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/halls", hallRouter);

const port = 3000;
app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
