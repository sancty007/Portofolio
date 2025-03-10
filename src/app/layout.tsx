import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ScrollToTopButton from "@/components/scroll-to-top-button";
import Nav from "@/components/nav";
import { cn } from "@/lib/utils";
import NavMobil from "@/components/navMobil";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "sanctifier yaw-Mensah",
  description: "portofolio sanctifier yaw-Mensah",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "bg-slate-950")}>
        <header>
          <Nav />
        </header>

        <main>
          <NavMobil />
          {children}
          <Toaster />
        </main>
      </body>
      <ScrollToTopButton />
    </html>
  );
}
