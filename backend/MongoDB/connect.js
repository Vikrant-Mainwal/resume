import mongoose from "mongoose";

const connectDb = ()=>{
    mongoose.set("strictQuery",true);
    mongoose.connect("mongodb+srv://20227057:DJTGSD@cluster0.arels2a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>console.log("MongoDb Connected")).catch((error)=>console.error(error))
}

export default connectDb