// api/register/route.js
import { NextResponse } from 'next/server';
import { connectMongoDB } from '../../../lib/mongodb';
import User from '@/models/user';
import bcrypt from 'bcryptjs';

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();
    await connectMongoDB();

    // Check if the user already exists before creating
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: 'User already exists' },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashedPassword });

    return NextResponse.json({ message: 'User registered' }, { status: 201 });
  } catch (error) {
    console.error('Error registering user:', error);
    return NextResponse.json(
      { message: 'An error occurred while registering the user' },
      { status: 500 }
    );
  }
}



























// import { NextResponse } from "next/server";
// import { connectMongoDB } from "../../../lib/mongodb";
// import User from "@/models/user";
// import bcrypt from 'bcryptjs';

// export async function POST(req){
//     try{
//         const{name, email, password} = await req.json();
//         const hashedPassword = await bcrypt.hash(password, 10)
//         await connectMongoDB();
//         await User.create({name, email, password: hashedPassword});
        

//         return NextResponse.json({message: "User registered"}, {status: 201});
//     } catch(error){
//         return NextResponse.json(
//             {message: "An error occured while registering the user"},{status: 500}
//         )
//     }
// }