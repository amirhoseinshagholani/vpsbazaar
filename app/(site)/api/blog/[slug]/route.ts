import { db } from '@/lib/db';
import { NextResponse } from 'next/server'
import { RowDataPacket } from "mysql2";

export async function GET(
  req: Request,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;

  try {
    const [rows] = await db.execute<RowDataPacket[]>(
      'SELECT * FROM blogs WHERE slug = ?',
      [slug]
    );

    if ((rows as RowDataPacket[]).length === 0) {
      return NextResponse.json(
        { message: 'Post not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(rows[0]);
  } catch (error) {
    console.error('Error fetching blog data:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
