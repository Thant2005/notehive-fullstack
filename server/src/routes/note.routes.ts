import { Router } from "express";
import authorize from "../middlewares/auth.middleware.ts";

const noteRouter = Router();

noteRouter.get("/", authorize, () => {
  console.log("welocem note routes");
});
export default noteRouter;
