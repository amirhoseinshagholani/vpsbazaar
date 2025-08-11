import { db } from '@/lib/db';
import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import type { RowDataPacket } from 'mysql2';

interface SpendingPayload {
  username: string;
  password: string;
}

function corsHeaders() {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  };
}

export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders() });
}

export async function POST(request: Request) {
  try {
    const { username, password } = (await request.json()) as SpendingPayload;

    if (!username || !password) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400, headers: corsHeaders() }
      );
    }

    // گرفتن کاربر از دیتابیس
    const [rows] = await db.query<RowDataPacket[]>(
      'SELECT * FROM tbladmins WHERE email = ?',
      [username]
    );

    if (rows.length === 0) {
      return NextResponse.json(
        { message: 'User not found' },
        { status: 404, headers: corsHeaders() }
      );
    }

    const passPanel: string = rows[0].panelPass;
    const admin_id : number = rows[0].id;

    const isMatch = passPanel === password;

    return NextResponse.json(
      { success:isMatch, admin_id:admin_id },
      { headers: corsHeaders() }
    );

  } catch (error) {
    console.error('Error during login:', error);
    return NextResponse.json(
      { message: 'Internal server error', error: String(error) },
      { status: 500, headers: corsHeaders() }
    );
  }
}
