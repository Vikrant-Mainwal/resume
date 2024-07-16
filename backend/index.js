import express from "express"
import dotenv from 'dotenv'
import connectDb from "./MongoDB/connect.js"
import cors from "cors"
import userRouter from "./routes/userRoutes.js"

const app = express()
const port = 5000

dotenv.config();
console.log('JWT_SECRET:', process.env.JWT_SECRET);

// middleware
app.use(express.json())
app.use(cors())

// connection 
connectDb();


// apis
app.use("/user",userRouter)


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})