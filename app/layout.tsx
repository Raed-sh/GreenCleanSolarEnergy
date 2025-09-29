import type React from "react";
import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";

const tajawal = Tajawal({
  weight: ["300", "400", "500", "700"],
  subsets: ["arabic"],
  variable: "--font-tajawal",
});

export const metadata: Metadata = {
  title: "سولار سيستم - تنظيف الألواح الشمسية",
  description: "شركة متخصصة في تنظيف الألواح الشمسية بالروبوتات",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`font-sans ${tajawal.variable}`}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
      </body>
    </html>
  );
}
