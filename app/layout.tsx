import type { Metadata } from "next";
import { Bebas_Neue, Outfit } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Nimma DRRE | Rotaract District 3192",
  description:
    "Meet PP Rtr. Rakshith K Shetty, District Rotaract Representative Elect for RY 2027–28, and nominate for the Legacy Executive Council.",
  openGraph: {
    title: "Nimma DRRE",
    description:
      "From serving a club to shaping a district — DRRE intro & council nominations for Rotaract District 3192.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${bebas.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
