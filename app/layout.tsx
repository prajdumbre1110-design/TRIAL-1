import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prajakta Dumbre | Finance & Investment Operations Professional",
  description:
    "Finance & Investment Operations Professional with 5+ years of experience in Fund Accounting, Financial Reporting, Alternative Investments, Reconciliations, and Investment Operations.",
  keywords: [
    "Prajakta Dumbre",
    "Fund Accounting",
    "Financial Reporting",
    "Investment Operations",
    "Finance Portfolio",
    "Alternative Investments",
    "Reconciliation",
    "Pune",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}