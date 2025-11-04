import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aayam Arts | Immersive 3D Visualization Studio",
  description:
    "Book immersive 3D walkthroughs, architectural blueprints, VR demos, and precision 3D prints crafted by Aayam Arts for residential and commercial developments.",
  metadataBase: new URL("https://agentic-3fb6c59f.vercel.app"),
  openGraph: {
    title: "Aayam Arts | Immersive 3D Visualization Studio",
    description:
      "Bring complexes, apartments, societies, and commercial towers to life with cinematic 3D walkthroughs, VR demos, and tangible 3D prints.",
    url: "https://agentic-3fb6c59f.vercel.app",
    siteName: "Aayam Arts",
    locale: "en_IN",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
