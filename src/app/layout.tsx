import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./components/Providers";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://tuhin-mandal-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Tuhin Mandal – Backend Developer",
  description:
    "Personal portfolio site showcasing projects, skills and contact details.",
  openGraph: {
    title: "Tuhin Mandal – Backend Developer",
    description:
      "Personal portfolio site showcasing projects, skills and contact details.",
    url: siteUrl,
    siteName: "Tuhin Mandal's Portfolio",
    images: [
      {
        url: "/og-image.png", // Path to your OG image in the /public folder
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tuhin Mandal – Backend Developer",
    description:
      "Personal portfolio site showcasing projects, skills and contact details.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} !scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="antialiased bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
