import { db } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const [rows] = await db.query("SELECT spending.*,concat( tbladmins.firstname,' ',tbladmins.lastname) as admin_name FROM `spending` join tbladmins on spending.admin_id = tbladmins.id ORDER BY id DESC;");
    return NextResponse.json(rows);
  } catch (error) {
    console.error('Error fetching blog data:', error);
    return NextResponse.json(
      { message: 'Internal server error', error: JSON.stringify(error) },
      { status: 500 }
    );
  }
}
