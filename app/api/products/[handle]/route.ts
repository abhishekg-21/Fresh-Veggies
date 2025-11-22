//app/api/products/[handle]/route.ts
import { NextRequest, NextResponse } from "next/server";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ handle: string }> }
) {
  try {
    const { handle } = await context.params; // MUST await

    const client = await pool.connect();
    const result = await client.query(
      "SELECT * FROM products_raw WHERE handle = $1 LIMIT 1;",
      [handle]
    );
    client.release();

    if (result.rows.length === 0) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    const row = result.rows[0];

    const product = {
      handle: row.handle,
      name: row.title,
      body: row.body_html,
      variantFulfillmentServices: Number(row.variant_price ?? 0),
      originalPrice: Number(row.variant_compare_at_price ?? 0),
      rating: 4.5,
      img: row.image_src,
      badge: row.tags,
      productCategory: row.product_category,
    };

    return NextResponse.json(product);
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Unknown error" },
      { status: 500 }
    );
  }
}
