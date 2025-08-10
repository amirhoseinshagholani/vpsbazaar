import { db } from '@/lib/db';
import { NextResponse } from 'next/server';
import type { ResultSetHeader } from 'mysql2';

interface SpendingPayload {
  admin_id: number;
  title: string;
  amount: number;
  date: string; // YYYY-MM-DD
}

// یک تابع کمکی برای ست کردن هدرهای CORS
function corsHeaders() {
  return {
    'Access-Control-Allow-Origin': '*', // یا دامنه سایتت
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  };
}


// هندل کردن درخواست OPTIONS (Preflight)
export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders() });
}

export async function POST(request: Request) {
  try {
    const { admin_id, title, amount, date } = (await request.json()) as SpendingPayload;

    if (!admin_id || !title || !amount || !date) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400, headers: corsHeaders() }
      );
    }

    const [result] = await db.query<ResultSetHeader>(
      'INSERT INTO spending (admin_id, title, amount, date) VALUES (?, ?, ?, ?)',
      [admin_id, title, amount, date]
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
