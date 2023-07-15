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
        <div className="min-h-screen flex flex-col justify-between bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text text-transition">
          <div>
            <Navbar />
            <main className="h-full w-full max-w-[1440px] px-4 sm:px-12 lg:px-20 mt-6 sm:mt-9 lg:mt-12 mx-auto">
              {children}
            </main>
          </div>
          <footer className="px-4 sm:px-12 lg:px-20 my-3 sm:my-6 text-center text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            {`A solution to `}
            <a
              href="https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline underline-offset-4"
            >
              {`Frontend Mentor's 'REST Countries API'-challenge`}
            </a>
            {` by `}
            <a
              href="https://github.com/KoenvandenBerg"
              target="_blank"
              className="font-bold text-light-text dark:text-dark-text hover:underline underline-offset-4"
            >
              Koen van den Berg
            </a>
          </footer>
        </div>
      </body>
    </html>
  );
}
