import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display } from "next/font/google"
import { Inter } from "next/font/google"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Marci Metzger Homes - Pahrump's #1 Residential REALTOR",
  description:
    "Nearly 30 Years of Excellence • $28.5M in Sales • 90+ Happy Clients. Your trusted real estate partners in Pahrump, Nevada.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
