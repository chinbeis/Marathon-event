import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, phone, email } = body;

    if (!firstName || !lastName || !phone || !email) {
      return new NextResponse('Missing required fields', { status: 400 });
    }

    const newRegistration = {
      id: Date.now().toString(),
      firstName,
      lastName,
      phone,
      email,
      registrationDate: new Date().toISOString(),
      verified: false,
    };

    const filePath = path.join(process.cwd(), 'data', 'registrations.json');
    
    // Ensure the directory exists
    const dirPath = path.dirname(filePath);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }

    let registrations = [];
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      if (fileContent) {
        registrations = JSON.parse(fileContent);
      }
    }

    const existingRegistration = registrations.find((reg: { phone: string; }) => reg.phone === phone);
    if (existingRegistration) {
      return new NextResponse('A registration with this phone number already exists.', { status: 409 });
    }

    registrations.push(newRegistration);

    fs.writeFileSync(filePath, JSON.stringify(registrations, null, 2));

    return new NextResponse(JSON.stringify(newRegistration), { status: 201 });
  } catch (error) {
    console.error('Error processing registration:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
