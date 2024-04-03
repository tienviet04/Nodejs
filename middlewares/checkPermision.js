import jwt from "jsonwebtoken";
import User from "../src/models/UserModel";
const checkPermniss = async (req, res, next) => {
    //token

    const token = req.headers.authorization?.split(" ")[1];
    console.log(token);
    if (!token) {
        return res.status(401).json({
            message: "Not Auth"
        })
    }
    const data = jwt.verify(token, "key")
    console.log(data);
    const user = await User.findById(data.id)
    if (!user) {
        return res.status(400).json({
            message: "not found"
        })
    }
    console.log(user);
    next();
}
export default checkPermniss;