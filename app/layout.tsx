import type { Metadata } from "next";
import { Suspense } from "react";
import { DemoNav } from "@/components/demo-nav";
import "./globals.css";

export const metadata: Metadata = {
  title: "Modern Next.js — Talk Demos",
  description: "Live demos for Modern Next.js: What's New in Next.js 15 & 16",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full">
      <body className="flex min-h-full">
        <Suspense fallback={<nav className="w-56 shrink-0 border-r border-[var(--card)] bg-[var(--card)] p-4" />}>
          <DemoNav />
        </Suspense>
        <main className="flex-1 overflow-y-auto p-8 md:p-10">{children}</main>
      </body>
    </html>
  );
}
