import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Inbox Tuna — Email That Works",
  description:
    "Cold outreach, newsletters, list management, infrastructure. Fully managed email marketing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
