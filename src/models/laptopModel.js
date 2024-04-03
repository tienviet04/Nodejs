import mongoose from "mongoose";
const Schema = mongoose.Schema;

const LaptopSchema = new Schema(
    {
        name: {
            type: String,
            require: true
        },
        vote: {
            type: Number,
            min: 0,
            max: 6,
            default: 3,
        },
        desc: {
            type: String,
            require: true
        },
        price: {
            type: Number,
            require: true
        },
        public: {
            type: Boolean,
            default: true
        }
    }
)
const Laptop = mongoose.model("labtops", LaptopSchema);
export default Laptop