import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import router from './routes/routes';  
import  connectDB  from './DAL/data';

dotenv.config();  

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json()); 
app.use(cors());

// חיבור ל-MongoDB
connectDB();


// חיבור לראוטים
app.use('/api', router);



// הפעלת השרת
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});