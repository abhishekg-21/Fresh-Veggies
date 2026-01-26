"use client";
import { useState } from "react";

interface OrderItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
}

interface Order {
  orderId: string;
  status: string;
  total: number;
  date: string;
  trackingUrl?: string;
  eta?: string;
  items: OrderItem[];
}

export default function TrackOrderPage() {
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget as HTMLFormElement);
    const orderId = form.get("orderId") as string;
    const email = form.get("email") as string;

    setLoading(true);
    setError("");
    setOrder(null);

    try {
      const res = await fetch("/api/track-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ orderId, email }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error);

      setOrder(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-12 px-4">
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center text-green-700 mb-8">
          Track Your Order
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4 text-black">
          <input
            name="orderId"
            placeholder="Enter Order ID (e.g., #12345)"
            className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Billing Email"
            className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 text-white py-4 rounded-xl font-semibold hover:bg-green-700 disabled:opacity-50"
          >
            {loading ? "Tracking..." : "Track Order"}
          </button>
        </form>

        {error && (
          <p className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-xl text-center">
            {error}
          </p>
        )}

        {order && (
          <div className="mt-8 space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900">
                Order #{order.orderId}
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                {new Date(order.date).toLocaleDateString()}
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-400 to-green-600 p-6 rounded-2xl text-white text-center">
              <div className="font-bold text-xl capitalize">{order.status}</div>
              {order.eta && <p>ETA: {order.eta}</p>}
            </div>

            {order.trackingUrl && (
              <a
                href={order.trackingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-blue-600 text-white py-3 px-6 rounded-xl text-center font-semibold hover:bg-blue-700"
              >
                View Carrier Tracking
              </a>
            )}

            <div className="pt-6 border-t">
              <h3 className="font-semibold mb-3">Items (₹{order.total})</h3>
              <ul className="space-y-2">
                {order.items.map((item: OrderItem) => (
                  <li key={item.id} className="flex justify-between text-sm">
                    <span>
                      {item.name} x{item.quantity}
                    </span>
                    <span>₹{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
