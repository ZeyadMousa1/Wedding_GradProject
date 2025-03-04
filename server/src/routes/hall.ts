import express from "express";
import {
  addHall,
  deleteHall,
  getAllHalls,
  getHallById,
  updateHall,
} from "../controllers/Hall";
import { photoUpload } from "../middelwares/multer";

export const hallRouter = express();

hallRouter
  .route("/")
  .post(photoUpload.single("image"), addHall)
  .get(getAllHalls);
hallRouter.route("/:id").get(getHallById).put(updateHall).delete(deleteHall);
