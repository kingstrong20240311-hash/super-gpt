import type { Metadata } from "next";
import { Inter, Material_Icons, Material_Symbols_Outlined } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";

const inter = Inter({ subsets: ["latin"] });
const materialIcons = Material_Icons({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-material-icons",
});
const materialSymbolsOutlined = Material_Symbols_Outlined({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-material-symbols-outlined",
});

export const metadata: Metadata = {
  title: "Super GPT - Advanced AI Translation & Communication",
  description: "Advanced AI Translation & Communication",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="scroll-smooth">
      <body
        className={`${inter.className} ${materialIcons.variable} ${materialSymbolsOutlined.variable} bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 antialiased transition-colors duration-300`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
