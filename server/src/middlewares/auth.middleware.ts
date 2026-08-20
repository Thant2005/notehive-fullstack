import type { NextFunction, Response, Request } from "express";
import jwt from "jsonwebtoken";
import { prisma } from "../config/database.ts";
import type { User } from "../generated/prisma/client.ts";

type SafeUser = Omit<User, "password">;
interface jwtPayload {
  userId: string;
  email?: string;
}
declare global {
  namespace Express {
    interface Request {
      user?: SafeUser;
    }
  }
}
const authorize = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as jwtPayload;
    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
    });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Unautorized",
      });
    }
    const { password, ...safeUser } = user;
    req.user = safeUser;
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid or expired token",
    });
  }
};
export default authorize;
