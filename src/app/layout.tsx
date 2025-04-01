import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Layouts from "@/components/layouts/Layouts";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  applicationName: "Petlyfe Indonesia",
  appleWebApp: {
    title: "Petlyfe Indonesia",
    capable: true,
    statusBarStyle: "default",
  },
  formatDetection: {
    telephone: false,
  },
  metadataBase: new URL(
    process.env.NODE_ENV === "development" ? "http://localhost:3000/" : "https://petlyfe.vercel.app/",
  ),
  description: "Petlyfe Indonesia Landing Page.",
  keywords: "Pet, Adoption, Vet Clinic, Vet, Cat, Dog, Kibble, Pet Store",
  creator: "Arnawa Digital",
  authors: {
    name: "Arnawa Digital",
    url: "https://github.com/arnawa-digital/",
  },
  openGraph: {
    images: "",
    url: "",
    siteName: "",
    locale: "",
    type: "website",
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
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Layouts>{children}</Layouts>
      </body>
    </html>
  );
}
