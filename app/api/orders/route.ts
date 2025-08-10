import { db } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const [rows] = await db.query("select tblorders.*,concat(tblusers.first_name,' ',tblusers.last_name)as customer_name from tblorders join tblusers on tblorders.userid = tblusers.id;");
    return NextResponse.json(rows);
  } catch (error) {
    console.error('Error fetching blog data:', error);
    return NextResponse.json(
      { message: 'Internal server error', error: JSON.stringify(error) },
      { status: 500 }
    );
  }
}
