import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import ChatbotRoutes from './routes/chatbot.route.js';



const app = express();
dotenv.config();

const port = process.env.PORT || 3000;

//middleware
app.use(express.json());
app.use(cors());




// Databse connection code

mongoose.connect(process.env.MONGO_URI)
.then(() =>{
    console.log("Connected to MongoDB");
}).catch((error) =>{
    console.log("Error connecting to MongoDB:", error);
});

app.listen(port, () =>{
    console.log('Server is running on port  ${port}');
});


// Defining Routes
app.use("/bot/v1", ChatbotRoutes);

app.listen(port, ()=>{
    console.log('Server is runnning on port ${port}')
});