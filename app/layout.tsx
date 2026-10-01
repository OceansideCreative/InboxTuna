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
const title = "Inbox Tuna — Email & Text Marketing, Managed for You";
const description =
  "We set up and manage email and text marketing for your leads and customers. Newsletters, promotions, and automated messages, planned and sent for you.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.inboxtuna.com"),
  title: { default: title, template: "%s | Inbox Tuna" },
  description,
  alternates: { canonical: "/" },
  robots: isPreview
    ? { index: false, follow: false }
    : { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Inbox Tuna",
    title,
    description,
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
    title,
    description,
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
