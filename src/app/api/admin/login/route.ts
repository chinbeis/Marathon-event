import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { username, password } = body;

    if (!username || !password) {
      return new NextResponse('Missing username or password', { status: 400 });
    }

    const filePath = path.join(process.cwd(), 'data', 'users.json');
    const users = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

    const user = users.find(
      (u: {username: string, password: string}) => u.username === username && u.password === password
    );

    if (user) {
      const response = new NextResponse('Login successful', { status: 200 });
      response.cookies.set('auth', 'true', { httpOnly: true, maxAge: 60 * 60 });
      return response;
    } else {
      return new NextResponse('Invalid username or password', { status: 401 });
    }
  } catch (error) {
    console.error('Login error:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
