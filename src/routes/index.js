import { Router } from "express";
import laptopRouter from "./laptop";
import authRouter from "./auth";

const router = Router();

router.get("/", (req, res) => {
  res.send("Home");
});

router.use("/auth", authRouter);
router.use("/laptops", laptopRouter)

export default router;
