import { db } from '@/lib/db';
import { NextResponse } from 'next/server';
import { RowDataPacket } from "mysql2";

export async function GET(
  req: Request,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;

  try {
    // 1. گرفتن status فعلی
    const [statusRows] = await db.execute<RowDataPacket[]>(
      `SELECT status FROM debts WHERE id = ?;`,
      [slug]
    );

    if ((statusRows as RowDataPacket[]).length === 0) {
      return NextResponse.json({ message: 'Post not found' }, { status: 404 });
    }

    const currentStatus = (statusRows as RowDataPacket[])[0].status;

    // 2. تعیین status جدید
    const newStatus = currentStatus === 0 ? 1 : 0;

    // 3. آپدیت کردن
    await db.execute(
      `UPDATE debts SET status = ? WHERE id = ?;`,
      [newStatus, slug]
    );

    return NextResponse.json({ id: slug, oldStatus: currentStatus, newStatus });
  } catch (error) {
    console.error('Error updating status:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
