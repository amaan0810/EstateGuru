import express from 'express';
const app=express();
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import listingRouter from './routes/listing.route.js';
import cookieParser from 'cookie-parser';

dotenv.config();
app.use(express.json());
app.use(cookieParser());

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("connected to MongoDB")
})
.catch((err)=>{
    console.log(err);
});


app.get('/',(req,res)=>{
    res.send('Hello '+req.cookies.access_token);
})



app.use('/api/user',userRouter);

app.use('/api/auth',authRouter);
app.use('/api/listing',listingRouter);


app.listen(3000,()=>{
    console.log('sever is runing on port 3000');
});

app.use((err,req,res,next)=>{
    const statusCode=err.statusCode || 500;
    const message=err.message || 'internal server Error';
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message,
    });
});

