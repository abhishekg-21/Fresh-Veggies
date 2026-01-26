import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Providers } from "./providers";
import { WhatsAppWidget } from "./components/WhatsAppWidget"; // 👈 NEW IMPORT

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Fresh Veggies",
    default: "Fresh Veggies - Organic Delivered Daily",
  },
  description: "Fresh organic vegetables from local farms, delivered daily.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.className}>
      <body className="min-h-screen flex flex-col bg-gray-50 antialiased">
        <Providers>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />

          {/* 👈 WhatsApp Widget - Global on every page */}
          <WhatsAppWidget />
        </Providers>
      </body>
    </html>
  );
}
