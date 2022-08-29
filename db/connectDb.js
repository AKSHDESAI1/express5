import mongoose from "mongoose";

const connectDb = async () => {
    try {
        const DBOPTIONS = {
            dbName: "P1"
        };
        await mongoose.connect("mongodb+srv://aksh2137:aksh2137@cluster0.jpqpxva.mongodb.net/test", DBOPTIONS);
        console.log("connection Successfully");
    } catch (error) {
        console.log(error);
        res.send(error)
    }
}

export default connectDb;