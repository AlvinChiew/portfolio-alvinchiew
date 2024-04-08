import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Alvin Chiew | Portfolio",
  description:
    "Alvin Chiew specializes in providing design and solutions for data, software and IT infrastructure to individuals, SME and MNC, encompassing both on-premise and cloud environments.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
