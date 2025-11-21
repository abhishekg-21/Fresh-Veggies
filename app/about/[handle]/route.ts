// /app/api/products/[handle]/route.ts
import { NextResponse, NextRequest } from "next/server";
import pool from "../../lib/db";
// adjust import path if needed

interface Product {
  handle: string;
  name: string;
  body: string;
  variantFulfillmentServices: number;
  originalPrice?: number;
  rating: number;
  img: string;
  badge?: string;
  productCategory: string;
}

export async function GET(
  request: NextRequest,
  { params }: { params: { handle: string } }
) {
  console.log("API /api/products/[handle] route triggered:", params?.handle);

  let client;
  try {
    client = await pool.connect();
    const { rows } = await client.query(
      "SELECT * FROM products_raw WHERE handle = $1 LIMIT 1",
      [params.handle]
    );

    if (rows.length === 0) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    const row = rows[0];
    const product: Product = {
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
    console.error("Error in /api/products/[handle]:", err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Unknown error" },
      { status: 500 }
    );
  } finally {
    if (client) {
      try {
        client.release();
      } catch (releaseErr) {
        console.error("Error releasing DB client:", releaseErr);
      }
    }
  }
}
