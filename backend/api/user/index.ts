import { PrismaClient } from '@prisma/client';
import express from 'express'
import { Request , Response } from 'express';

const userRouter = express.Router();

const prisma = new PrismaClient()

userRouter.post('/findUser' , async (req : Request, res : Response) => {
    const email = req.body.email;
    const passowrd = req.body.password;

    console.log(`Password => ${passowrd} | Email => ${email}`)
    try { 
        const user = await prisma.user.findMany({
            where : {
                email : email,
                password : passowrd
            }
        })

        if(!user)
            return ;

        console.log(user[0].email);
        res.status(200).send({email : user[0].email , profilePicture : user[0].profilePicture});
    } catch(e) {
        res.status(404).send({message : e})
    }
})

export default userRouter