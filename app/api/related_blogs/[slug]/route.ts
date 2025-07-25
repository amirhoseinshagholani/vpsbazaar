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
      'SELECT b.* FROM blogs b JOIN blog_tags bt ON b.id = bt.blog_id JOIN tags t ON t.id = bt.tag_id WHERE t.slug = ?',
      [slug]
    );

    if ((rows as RowDataPacket[]).length === 0) {
      return NextResponse.json(
        { message: 'Post not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(rows);
  } catch (error) {
    console.error('Error fetching blog data:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
