import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { AuthContextProvider } from "@/context/authContext";
import { SocketContextProvider } from "@/context/socketContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme='dark'>
      <body className={inter.className}>
        <div className='w-screen h-screen flex justify-center items-center'>
          <AuthContextProvider>
            <SocketContextProvider >
              {children}
            </SocketContextProvider>
          </AuthContextProvider>
        </div>
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
      </body>
    </html>
  );
}