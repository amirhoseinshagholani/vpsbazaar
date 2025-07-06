import { db } from '@/lib/db';
import { NextResponse } from 'next/server'

export async function GET() {
  // return NextResponse.json({ message: 'Blog API is working!' });
  try {
    const [rows] = await db.query('SELECT * FROM tags ORDER BY id DESC');
    return NextResponse.json(await rows);
  } catch (error) {
    console.error('Error fetching blog data:', error);
    NextResponse.json({ message: 'Internal server error' });
  }
}

