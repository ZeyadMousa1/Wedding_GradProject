import express from "express";
import {
  addHall,
  deleteHall,
  getAllHalls,
  getHallById,
  updateHall,
} from "../controllers/Hall";

export const hallRouter = express();

hallRouter.route("/").post(addHall).get(getAllHalls);
hallRouter.route("/:id").get(getHallById).put(updateHall).delete(deleteHall);
