import express from 'express';
const app=express();
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js'

dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("connected to MongoDB")
})
.catch((err)=>{
    console.log(err);
});


app.get('/',(req,res)=>{
    res.send('Hello ');
})

app.use('/api/user',userRouter);



app.listen(3000,()=>{
    console.log('sever is runing on port 3000');
});