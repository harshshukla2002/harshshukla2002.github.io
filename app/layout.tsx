import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/theme";
import MainProvider from "./components/MainProvider";
import { ScrollProvider } from "./context/ScrollContext";

export const spaceMono = Space_Mono({
  variable: "--font-space-mono", // Define a CSS variable
  subsets: ["latin"],
  weight: ["400", "700"], // Specify available weights
});

export const metadata: Metadata = {
  title: "Harsh Shukla",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceMono.variable} antialiased scroll-smooth`}>
        <ThemeProvider>
          <ScrollProvider>
            <MainProvider>
              <Navbar />
              {children}
            </MainProvider>
          </ScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
