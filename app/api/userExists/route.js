// api/userExists/route.js
import { NextResponse } from 'next/server';
import { connectMongoDB } from '../../../lib/mongodb';
import User from '@/models/user';

export async function POST(req) {
  try {
    const { email } = await req.json();
    await connectMongoDB();
    const user = await User.findOne({ email });

    return NextResponse.json({ user: !!user }, { status: 200 });
  } catch (error) {
    console.error('Error checking user existence:', error);
    return NextResponse.json(
      { message: 'An error occurred while checking the user' },
      { status: 500 }
    );
  }
}















// import {connectMongoDB} from '@/lib/mongodb';

// export async function POST(req){
//     try{
//         await connectMongoDB();
//         const {email}=  await req.json();
//         const user = await UserActivation.findOne({email}).select("_id");
//         console.log("user: ", user);
//         return NextResponse.json({user});
//     } catch(error){
//         console.log(error);
//     }
// }