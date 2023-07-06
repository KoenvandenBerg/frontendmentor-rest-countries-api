import Navbar from "./components/Navbar";
import "./globals.css";
import { Nunito_Sans } from "next/font/google";

const nunito = Nunito_Sans({ subsets: ["latin"] });

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
      <body className={`${nunito.className}`}>
        <div className="h-screen flex flex-col text-light-text dark:text-dark-text text-transition">
          <Navbar />
          <main className="h-full bg-light-bg dark:bg-dark-bg">{children}</main>
        </div>
      </body>
    </html>
  );
}
