import { db } from '@/lib/db';
import { NextResponse } from 'next/server';
import type { ResultSetHeader } from 'mysql2';

interface SpendingPayload {
  name: string;
  lastName: string;
  subject: string;
  message: string; // YYYY-MM-DD
}

function corsHeaders() {
  return {
    'Access-Control-Allow-Origin': '*', // یا دامنه سایتت
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  };
}


export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders() });
}

export async function POST(request: Request) {
  try {
    const { name, lastName, subject, message } = (await request.json()) as SpendingPayload;

    if (!name || !lastName || !subject || !message) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400, headers: corsHeaders() }
      );
    }

    const [result] = await db.query<ResultSetHeader>(
      'INSERT INTO messages (title, content, first_name, last_name) VALUES (?, ?, ?, ?)',
      [subject, message, name, lastName]
    );

    return NextResponse.json(
      {
        message: 'Record inserted successfully',
        insertId: result.insertId
      },
      { headers: corsHeaders() }
    );
  } catch (error) {
    console.error('Error inserting spending data:', error);
    return NextResponse.json(
      { message: 'Internal server error', error: String(error) },
      { status: 500, headers: corsHeaders() }
    );
  }
}
