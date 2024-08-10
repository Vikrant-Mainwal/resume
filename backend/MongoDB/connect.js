import mongoose from "mongoose";

const connectDb = ()=>{
    mongoose.set("strictQuery",true);
    mongoose.connect(process.env.MONGODB_URL).then(()=>console.log("MongoDb Connected")).catch((error)=>console.error(error))
}

export default connectDb;