import type { Metadata } from "next";
import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/layout/ScrollProgress";
import { ThemeProvider } from "@/components/layout/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Avishka Pramod Pathirana — Full Stack Engineer",
  description:
    "Full Stack Engineer building scalable web apps with .NET, Next.js, and Azure. Currently @ SYNCONIC (Pvt) Ltd.",
  keywords: [
    "Avishka Pramod",
    "Full Stack Engineer",
    "Software Engineer",
    "Next.js Developer",
    ".NET Developer",
    "Azure",
    "Sri Lanka Developer",
  ],
  authors: [{ name: "Avishka Pramod Pathirana" }],

   // ⬇️ THIS IS THE KEY PART — explicitly declares favicon URLs
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
  },
  
  openGraph: {
    title: "Avishka Pramod Pathirana — Full Stack Engineer",
    description:
      "Full Stack Engineer building scalable web apps with .NET, Next.js, and Azure.",
    url: "https://avishka-portfolio.vercel.app",
    siteName: "Avishka Portfolio",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${jetbrains.variable} dark`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider>
          <ScrollProgress />
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}