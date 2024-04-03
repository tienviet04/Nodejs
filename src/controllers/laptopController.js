import laptopModel from "../models/laptopModel";
class LaptopController {
    // Get all
    async getAllLaptop(req, res) {
        try {
            const laptop = await laptopModel.find();
            res.status(200).json({
                message: "ok",
                data: laptop,
            });
        } catch (error) {
            res.status(400).json({
                message: "error",
                error: error.message,
            });
        }
    }
    async getDetailLaptop(req, res) {
        try {
            const laptop = await laptopModel.findById(req.params.id);
            if (!laptop) {
                return res.status(404).json({
                    message: "not found",
                });
            }
            res.status(200).json({
                message: "ok",
                data: laptop,
            });
        } catch (error) {
            res.status(400).json({
                message: "error",
                error: error.message,
            });
        }
    }
    async createLaptop(req, res) {
        try {
            const laptop = await laptopModel.create(req.body);
            res.status(200).json({
                message: "ok",
                data: laptop,
            });
        } catch (error) {
            res.status(500).json({
                message: "error",
                error: error.message,
            });
        }
    }
    async putLaptop(req, res) {
        try {
            const laptop = await laptopModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!laptop) {
                return res.status(404).json({
                    message: "not found",
                });
            }
            res.status(200).json({
                message: "ok",
                data: laptop,
            });
        } catch (error) {
            res.status(400).json({
                message: "error",
                error: error.message,
            });
        }
    }
    async deleteLaptop(req, res) {
        try {
            const laptop = await laptopModel.findByIdAndDelete(req.params.id);
            if (!laptop) {
                return res.status(404).json({
                    message: "not found",
                });
            }
            res.status(200).json({
                message: "ok",
            });
        } catch (error) {
            res.status(400).json({
                message: "error",
                error: error.message,
            });
        }
    }
}

export default LaptopController;