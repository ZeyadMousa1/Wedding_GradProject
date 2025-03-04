import { NextFunction, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import path, { matchesGlob } from "path";
import { cloudinaryUploadImage } from "../../utils/cloudinary";

const prisma = new PrismaClient();

// export const addHall = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ): Promise<void> => {
//   const { name, descripation, price, capcity, location } = req.body;
//   //   if (!name || !descripation || image || !price || !capcity || !location) {
//   //     res.status(404).json({ msg: "All faileds are require" });
//   //     return;
//   //   }
//   const imagePath = path.join(__dirname, `../../images/${req.file?.filename}`);
//   const result = await cloudinaryUploadImage(imagePath);

//   const hall = await prisma.hall.create({
//     data: {
//       name,
//       descripation,
//       image: (result as any).secure_url,
//       imagePublicId: (result as any).public_id,
//       price,
//       capcity,
//       location,
//     },
//   });

//   res.status(201).json({
//     msg: "The hall is created successfully",
//     hall,
//   });
// };

export const getAllHalls = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const halls = await prisma.hall.findMany({});
  res.status(201).json({ halls });
};

export const addHall = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { name, descripation, price, capacity, location } = req.body;

    // Validate required fields
    // if (!name || !descripation || !price || !capacity || !location) {
    //   res.status(400).json({ msg: "All fields are required" });
    //   return;
    // }

    // Validate file upload
    if (!req.file) {
      res.status(400).json({ msg: "Image file is required" });
      return;
    }

    // Upload image to Cloudinary
    const result = (await cloudinaryUploadImage(req.file.path)) as {
      secure_url: string;
      public_id: string;
    };

    if (!result.secure_url || !result.public_id) {
      throw new Error(
        "Cloudinary upload failed: Missing secure_url or public_id"
      );
    }

    // Create hall in the database
    const hall = await prisma.hall.create({
      data: {
        name,
        descripation, // Corrected typo
        image: result.secure_url,
        imagePublicId: result.public_id,
        price: Number(price), // Ensure price is a number
        capcity: Number(capacity), // Ensure capacity is a number
        location,
      },
    });

    // Send success response
    res.status(201).json({
      msg: "The hall is created successfully",
      hall,
    });
  } catch (error) {
    console.error("Error creating hall:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    res.status(500).json({ msg: "Something went wrong", error: errorMessage });
  }
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
