// @ts-ignore
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Prajakta Dumbre | Finance & Investment Operations Professional",
  description:
    "Portfolio of Prajakta Dumbre showcasing experience in Financial Reporting, Fund Accounting, Investment Operations, Reconciliations, and Alternative Investments.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}