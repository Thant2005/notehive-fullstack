import type { Request, Response } from "express";
import { prisma } from "../config/database.ts";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/jwt.ts";
import type { signInInput, signUpInput } from "../validators/auth.validator.ts";

export const signUp = async (
  req: Request<unknown, unknown, signUpInput>,
  res: Response,
) => {
  const { name, email, password, university, year, faculty } = req.body;

  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) {
    return res.status(400).json({
      success: false,
      message: "User already exists",
    });
  }

  //hash password
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);

  const newUser = await prisma.user.create({
    data: { name, email, password: hashPassword, university, year, faculty },
    omit: { password: true },
  });
  const token = generateToken(newUser.id);
  res.status(201).json({
    success: true,
    message: "Register is successfull",
    data: {
      user: newUser,
      token,
    },
  });
};

export const signIn = async (
  req: Request<unknown, unknown, signInInput>,
  res: Response,
) => {
  const { email, password } = req.body;

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    return res.status(400).json({
      success: false,
      message: "Invalid email or password",
    });
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(400).json({
      success: false,
      message: "Invalid email or password",
    });
  }
  const token = generateToken(user.id);
  res.status(200).json({
    success: true,
    message: "User signed in successfully",
    data: {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        year: user.year,
        university: user.university,
        faculty: user.faculty,
        createdAt: user.createdAt,
      },
      token,
    },
  });
};
