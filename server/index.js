
import express from 'express';
import cors from 'cors';
import userRouter from './users/user.router.js';
const app = express();


const corsOptions = {   
    origin: 'http://localhost:5173', // Allow requests from the client
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'x-access-token'], // Allow custom headers
    credentials: true  // For legacy browser support
};
app.use(cors(corsOptions));
app.use(express.json());
app.use("/api/users", userRouter);
app.get("/", (req, res) => {
    res.send("welcome to this world");
})



export default app;