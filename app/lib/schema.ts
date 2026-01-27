// lib/schema.ts
import {
  pgTable,
  serial,
  text,
  timestamp,
  integer,
  decimal,
  boolean,
  jsonb,
} from "drizzle-orm/pg-core";

export const orders = pgTable("orders", {
  id: text("id").primaryKey(),
  email: text("email").notNull(),
  status: text("status").default("pending").notNull(),
  total: decimal("total", { precision: 10, scale: 2 }).notNull(),
  createdAt: timestamp("createdAt").defaultNow(),
  trackingUrl: text("trackingUrl"),
  estimatedDelivery: text("estimatedDelivery"),
});

export const orderItems = pgTable("order_items", {
  id: serial("id").primaryKey(),
  orderId: text("order_id").references(() => orders.id),
  name: text("name").notNull(),
  quantity: integer("quantity").notNull(),
  price: decimal("price", { precision: 10, scale: 2 }).notNull(),
});
