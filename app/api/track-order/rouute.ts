import { NextRequest, NextResponse } from "next/server";
import { db } from "./lib/db"; // Your NeonDB/PostgreSQL setup
import { orders } from "@/lib/schema"; // Your schema

export async function POST(request: NextRequest) {
  try {
    const { orderId, email } = await request.json();

    if (!orderId || !email) {
      return NextResponse.json(
        { error: "Missing order ID or email" },
        { status: 400 }
      );
    }

    const order = await db.query.orders.findFirst({
      where: (order, { eq, and }) =>
        and(eq(order.id, orderId), eq(order.email, email.toLowerCase())),
      with: { orderItems: true }, // Include items if needed
    });

    if (!order) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 });
    }

    return NextResponse.json({
      orderId: order.id,
      status: order.status, // e.g., 'pending', 'shipped'
      total: order.total,
      date: order.createdAt,
      trackingUrl: order.trackingUrl || null,
      items: order.orderItems,
      eta: order.estimatedDelivery, // From your schema
    });
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
