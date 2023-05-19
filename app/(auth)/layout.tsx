"use client";
import Home from "@/components/Home";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-red-600">{children}</body>
    </html>
  );
}
