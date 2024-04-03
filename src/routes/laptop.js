import express from "express";
import laptopController from "../controllers/laptopController";
import checkPermniss from "../../middlewares/checkPermision";

const laptopRouter = express.Router()

const laptopsController = new laptopController()

laptopRouter.get("/", laptopsController.getAllLaptop);
laptopRouter.post("/", checkPermniss, laptopsController.createLaptop);
laptopRouter.put("/:id", checkPermniss, laptopsController.putLaptop);
laptopRouter.delete("/:id", checkPermniss, laptopsController.deleteLaptop);
laptopRouter.get("/:id", laptopsController.getDetailLaptop);

export default laptopRouter;