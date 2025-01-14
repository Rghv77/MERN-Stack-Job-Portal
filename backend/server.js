import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors"
const app=express();


//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser()); //to access or parse cookie in backend from browser

const corsOptions=({
    origin:"http://localhost:5173",
    credentials:true
})

app.use(cors(corsOptions));

const PORT=3000;
app.listen(process.env.PORT,()=>{
console.log(`Server running at ${PORT}`)
})