import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "./SmoothScroll";

export const metadata: Metadata = {
  metadataBase: new URL("https://zykovstudio.com"),

  title: {
    default: "ZYKOV — Brand & Digital Studio",
    template: "%s — ZYKOV",
  },

  description:
    "Independent brand and digital studio working across identity, websites and digital products.",

  applicationName: "ZYKOV",

  keywords: [
    "brand design",
    "branding",
    "web design",
    "digital products",
    "UX UI",
    "art direction",
    "design studio",
    "ZYKOV",
  ],

  authors: [{ name: "ZYKOV" }],
  creator: "ZYKOV",
  publisher: "ZYKOV",

  openGraph: {
    type: "website",
    siteName: "ZYKOV",
    title: "ZYKOV — Brand & Digital Studio",
    description:
      "Identity, websites and digital products — built as one system.",
    url: "https://zykovstudio.com",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "ZYKOV — Brand & Digital Studio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "ZYKOV — Brand & Digital Studio",
    description:
      "Identity, websites and digital products — built as one system.",
    images: ["/og.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}