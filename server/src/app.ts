import express from "express";
import dotenv from "dotenv";
import { hallRouter } from "./routes/hall";

const app = express();

dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/halls", hallRouter);

app.listen(process.env.PORT, () => {
  console.log(`App is listening on port ${process.env.PORT}`);
});
