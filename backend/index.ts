import express from "express";
import cors from 'cors';
import { Response , Request } from "express";
import userRouter from "./api/user";
import bodyParser from "body-parser";

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended : true}));

app.get('/' , (req : Request , res : Response) => {
    res.status(200).send({ message : "[Server] => localhost:3000"})
})

app.use('/user' , userRouter);

app.listen(3000 , () => {
    console.log(`[Server] => localhost:3000`);
})
