import mongoose from "mongoose"

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('Connected to DB successfully')
    }
    catch (error) {
        console.log('Oops: Failed to Connected to DB')
    }
}
export default connectToMongoDB