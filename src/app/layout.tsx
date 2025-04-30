import { ThemeProvider } from "next-themes";

import "./globals.css";
import { NextAuthProvider } from "../components/NextAuthProvider";
import Nav from "../components/Nav";

export const metadata = {
  title: "Gestor Vzla",
  description: "Tu mano amiga para gestionar tus tramites en Venezuela",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NextAuthProvider>
            <div className="flex">
              <Nav />
              <main className="flex-1">{children}</main>
            </div>
          </NextAuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
