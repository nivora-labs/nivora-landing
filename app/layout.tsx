import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nivora Labs - Visão em Loop. Inteligência em Movimento.",
  description:
    "Na Nivora Labs, unimos IA, design e desenvolvimento para criar produtos que evoluem com propósito. Construa mais inteligente, escale mais rápido.",
  openGraph: {
    title: "Nivora Labs - Vision in Loop. Intelligence in Motion.",
    description:
      "At Nivora Labs, we fuse AI, design, and development to create products that evolve with purpose. Build smarter, scale faster.",
    type: "website",
    images: ["/opengraph.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nivora Labs - Vision in Loop. Intelligence in Motion.",
    description:
      "At Nivora Labs, we fuse AI, design, and development to create products that evolve with purpose. Build smarter, scale faster.",
    images: ["/opengraph.jpg"],
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={poppins.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
