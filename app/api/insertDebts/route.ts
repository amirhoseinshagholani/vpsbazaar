import { db } from '@/lib/db';
import { NextResponse } from 'next/server';
import type { ResultSetHeader } from 'mysql2';

interface SpendingPayload {
  spending_id: number;
  admin_id: number;
  amount: number;
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
    const { spending_id	, admin_id, amount } = (await request.json()) as SpendingPayload;

    if (!spending_id || !admin_id || !amount ) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400, headers: corsHeaders() }
      );
    }

    const [result] = await db.query<ResultSetHeader>(
      'INSERT INTO debts (spending_id, admin_id, amount, status) VALUES (?, ?, ?, ?)',
      [spending_id, admin_id, amount, 0]
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
