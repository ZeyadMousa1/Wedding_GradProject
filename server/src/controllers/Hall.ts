import { NextFunction, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { matchesGlob } from "path";

const prisma = new PrismaClient();

const anything = () => {};
export const addHall = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { name, descripation, image, price, capcity, location } = req.body;
  //   if (!name || !descripation || image || !price || !capcity || !location) {
  //     res.status(404).json({ msg: "All faileds are require" });
  //     return;
  //   }
  const hall = await prisma.hall.create({
    data: {
      name,
      descripation,
      image,
      price,
      capcity,
      location,
    },
  });

  res.status(201).json({
    msg: "The hall is created successfully",
    hall,
  });
};

export const getAllHalls = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const halls = await prisma.hall.findMany({});
  res.status(201).json({ halls });
};

export const getHallById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const hall = await prisma.hall.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!hall) {
    res.status(404).json({
      msg: "The hall not found",
    });
    return;
  }

  res.status(201).json({ hall });
};

export const updateHall = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const { name, descripation, image, price, capcity, location } = req.body;
  const hall = await prisma.hall.findUnique({
    where: {
      id: Number(id),
    },
  });
  if (!hall) {
    res.status(404).json({
      matchesGlob: "The hall not found",
    });
    return;
  }
  const hallUp = await prisma.hall.update({
    where: {
      id: Number(id),
    },
    data: {
      name,
      descripation,
      image,
      price,
      capcity,
      location,
    },
  });

  res.status(201).json({ msg: "uppdated successfully", hallUp });
};

export const deleteHall = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const hall = await prisma.hall.findUnique({
    where: {
      id: Number(id),
    },
  });
  if (!hall) {
    res.status(404).json({
      matchesGlob: "The hall not found",
    });
    return;
  }

  await prisma.hall.delete({
    where: {
      id: Number(id),
    },
  });

  res.status(201).json({
    msg: "The hall is deleted successfully",
  });
};
