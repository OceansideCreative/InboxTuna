import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
const archivo = localFont({
  src: "../public/fonts/archivo.woff2",
  variable: "--font-display",
  display: "swap",
  weight: "100 900",
});
const dmSans = localFont({
  src: "../public/fonts/dm-sans.woff2",
  variable: "--font-body",
  display: "swap",
  weight: "100 1000",
});
const isPreview = process.env.VERCEL_ENV !== "production";
export const metadata: Metadata = {
  metadataBase: new URL("https://www.inboxtuna.com"),
  title: {
    default: "Inbox Tuna — Email & text marketing, managed for you.",
    template: "%s | Inbox Tuna",
  },
  description:
    "Email, text campaigns, and automated follow-up, managed by Nick and Bridgette. Help new inquiries take the next step and give customers reasons to return.",
  alternates: { canonical: "/" },
  robots: isPreview
    ? { index: false, follow: false }
    : { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Inbox Tuna",
    title: "Help people choose you. And come back.",
    description: "Email, text campaigns, and automated follow-up, managed by Nick and Bridgette.",
    images: [
      {
        url: "/social-card.png",
        width: 1200,
        height: 630,
        alt: "Inbox Tuna — We keep your business in touch.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Inbox Tuna — Email & text marketing, managed for you.",
    images: ["/social-card.png"],
  },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${archivo.variable} ${dmSans.variable}`}>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
