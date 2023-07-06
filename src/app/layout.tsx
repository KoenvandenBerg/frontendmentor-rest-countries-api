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
        <div className="h-screen flex flex-col bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text text-transition">
          <Navbar />
          <main className="h-full w-full max-w-[1440px] px-4 sm:px-12 lg:px-20 mt-6 sm:mt-9 lg:mt-12 mx-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
