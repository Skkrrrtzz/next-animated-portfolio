import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kertz Portfolio App",
  description: "Next.js 13.1.4 portfolio app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="text-white w-screen h-screen bg-gradient-to-b from-black via-black to-gray-900">
          <div className="h-24">
          <Navbar />
          </div>
          <div className="h-full"> {children} </div>
        </div>
      </body>
    </html>
  );
}
