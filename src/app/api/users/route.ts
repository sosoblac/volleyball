import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';

const prisma = global.prisma || new PrismaClient();
if (process.env.NODE_ENV !== 'production') global.prisma = prisma;

export async function POST(request) {
  try {
    const body = await request.json();  // Extract the JSON data from the request body
    console.log('User to be added:', body);

    // CHECK IS USER EXIST USING EMAIL

    const existinguser = await prisma.user.findUnique({
      where: {email:body.email}
    })

    if(existinguser){
      return NextResponse.json({error:'User already Exist'},{status:400})
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(body.password,10)

    // Use the data from the request body to create a new user in Prisma
    const newUser = await prisma.user.create({
      data: {
        email: body.email,
        password: hashedPassword,  // Hash password for security
        firstname: body.firstname,
        lastname: body.lastname,
        role: body.role,  // Role will be passed from the frontend
        isAdmin: body.isAdmin || false,
      },
    });

    // Return success response to client
    return NextResponse.json({ success: 'User has been added successfully', newUser }, { status: 200 });


  } catch (error) {
    console.error('Error adding user:', error);
    return NextResponse.json({ error: 'Failed to add user' }, { status: 500 });
  }
}

export function GET() {
  return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
}
