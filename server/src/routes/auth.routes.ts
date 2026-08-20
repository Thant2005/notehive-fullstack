import { Router } from "express";
import { signIn, signUp } from "../controllers/auth.controller.ts";
import { validate } from "../middlewares/validate.middleware.ts";
import { signInSchema, signUpSchema } from "../validators/auth.validator.ts";

const authRouter = Router();

authRouter.post("/sign-up", validate(signUpSchema), signUp);

authRouter.post("/sign-in", validate(signInSchema), signIn);

// authRouter.post("/sign-out");

export default authRouter;
