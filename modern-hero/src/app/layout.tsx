import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Design Excellence | Modern UI Showcase",
  description: "Award-worthy digital experiences that push the boundaries of creativity, technology, and human interaction.",
  keywords: ["design", "ui", "ux", "modern", "creative", "award-winning"],
  authors: [{ name: "Design Studio" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#7c3aed",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
