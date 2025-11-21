// /app/api/products/route.ts
import { NextResponse } from "next/server";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export async function GET() {
  try {
    const client = await pool.connect();
    const result = await client.query("SELECT * FROM products_raw LIMIT 50;");
    client.release();

    const products = result.rows.map((row) => ({
      handle: row.handle,
      name: row.title,
      body: row.body_html,
      variantFulfillmentServices: Number(row.variant_price ?? 0),
      originalPrice: Number(row.variant_compare_at_price ?? 0),
      rating: 4.5,
      img: row.image_src,
      badge: row.tags,
      productCategory: row.product_category,
    }));

    return NextResponse.json(products);
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Unknown error" },
      { status: 500 }
    );
  }
}
