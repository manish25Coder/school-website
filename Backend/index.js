import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import morgan from 'morgan';
import contact from "./routes/contact.js"
import event from "./routes/event.js"
import gallery from "./routes/gallery.js"
import notice from "./routes/notice.js"
import teacher from "./routes/teacher.js"
import {register} from "./routes/auth.js"
import {login} from "./routes/auth.js"

dotenv.config();


const app = express();
const PORT = process.env.PORT || 3000;
connectDB()


// app.use(express.urlencoded({ extended: true }));

//Middleware
app.use(morgan("dev"))
app.use(cors());
app.use(express.json());


app.get('/',(req,res)=>{
    return res.send("Hello World")
})

app.use("/api/contact",contact)
app.use("/api/event",event)
app.use("/api/gallery",gallery)
app.use("/api/notice",notice)
app.use("/api/teacher",teacher)
app.use("/api/auth",register)
app.use("/api/auth",login)

app.listen(PORT,()=>{
    console.log(`Server is Running on http://localhost:${PORT}`);
    
})


