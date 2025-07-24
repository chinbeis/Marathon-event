import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
  const cookieStore = await cookies();
  const isAuthenticated = cookieStore.get('auth')?.value === 'true';

  if (!isAuthenticated) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  try {
    const body = await request.json();
    const { id } = body;

    if (!id) {
      return new NextResponse('Missing registration ID', { status: 400 });
    }

    const filePath = path.join(process.cwd(), 'data', 'registrations.json');
    const registrations = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

    const registrationIndex = registrations.findIndex((reg: { id: string }) => reg.id === id);

    if (registrationIndex === -1) {
      return new NextResponse('Registration not found', { status: 404 });
    }

    registrations[registrationIndex].verified = true;

    fs.writeFileSync(filePath, JSON.stringify(registrations, null, 2));

    return new NextResponse(JSON.stringify(registrations[registrationIndex]), { status: 200 });
  } catch (error) {
    console.error('Error verifying registration:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
