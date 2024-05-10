import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import "./globals.css";
import NavMenu from "./NavMenu";
import AuthProvider from "./AuthProvider";

const comfortaa = Comfortaa({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home - Nextspace",
  description: "Nextspace - Not cloned or fake social media site lol",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <html lang="en">
        <body className={comfortaa.className}>
          <NavMenu />
          {children}
        </body>
      </html>
    </AuthProvider>
  );
}
