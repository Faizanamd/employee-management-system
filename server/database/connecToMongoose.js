import mongoose from "mongoose"

export const connectToMongoose = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/merntask', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000  // Timeout after 5s instead of default 30s
        });
        console.log("Connection successful");
        return { status: true };  // Optional success return
    } catch (error) {
        console.error("Connection failed:", error.message);
        return {
            status: false,
            error: error.message
        };
    }
};
