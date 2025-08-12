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
      `SELECT debts.*,spending.admin_id as creditor_id,spending.title as spending_title,spending.amount as total_amount,CONCAT(tbladmins.firstname, ' ', tbladmins.lastname) AS creditor_fullname FROM debts JOIN spending ON debts.spending_id = spending.id JOIN tbladmins ON spending.admin_id = tbladmins.id WHERE debts.admin_id = ?;`,
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
