import "dotenv/config";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = (process.env.JWT_EXPIRES_IN ||
  "7d") as jwt.SignOptions["expiresIn"];

if (!JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined in env");
}

export const generateToken = (userId: string): string => {
  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
};
