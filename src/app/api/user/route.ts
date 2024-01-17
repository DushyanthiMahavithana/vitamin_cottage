import db from "@/lib/db";
import { NextResponse } from "next/server";
import {hash} from 'bcrypt'
import * as z from "zod"

//input validation schema
const userSchema = z
.object({
  username:z.string().min(1, 'Username is Required'),
  email: z.string().min(1, 'Email is Required').email('Invalid email'),
  password: z
  .string()
  .min(1, 'Password is required')
  .min(8, 'Password should contain more than 8 characters'),
})


export async function POST(req: Request){
    try{
        const body = await req.json();
        const {email, username, password} = userSchema.parse(body);

        //check if email already exists
        const existingEmail = await db.user.findUnique({
            where: {email: email}
        });
        if(existingEmail){
            return NextResponse.json({user:null, message:'This email already exists'}, {status: 409})
        }


        //check if username already exists
        const existingusername = await db.user.findUnique({
            where: {username: username}
        });
        if(existingusername){
            return NextResponse.json({user:null, message:'This username already exists'}, {status: 409})
        }
        
        const hashedPassword = await hash(password, 10);
        const newUser = await db.user.create({
            data:{
                username, 
                email, 
                password : hashedPassword
            }

        });

        const {password:newUserPassword, ...rest} = newUser;


        return NextResponse.json({user : rest, message: 'Successsfully Created the User'},{status: 201});

        
    }catch(error){
        return NextResponse.json({message: 'Something Went Wrong'},{status: 500});

    }
}