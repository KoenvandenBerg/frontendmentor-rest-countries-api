import Navbar from "./components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Frontend Mentor | REST Countries API",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <div className="h-screen flex flex-col text-light-text dark:text-dark-text text-transition">
          <Navbar />
          <main className="h-full bg-light-bg dark:bg-dark-bg">{children}</main>
        </div>
      </body>
    </html>
  );
}
