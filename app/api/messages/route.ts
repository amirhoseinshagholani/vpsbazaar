import { db } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const [rows] = await db.query("SELECT * FROM messages ORDER BY id DESC;");
    return NextResponse.json(rows);
  } catch (error) {
    console.error('Error fetching blog data:', error);
    return NextResponse.json(
      { message: 'Internal server error', error: JSON.stringify(error) },
      { status: 500 }
    );
  }
}
