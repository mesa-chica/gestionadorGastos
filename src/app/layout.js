import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="flex justify-between bg-amber-100 py-4 px-4">
          <ul className="flex">
            <li className="mx-6">
              <a href="/">Gastos</a>
            </li>
            <li className="mx-6">
              <a href="/servicios">Servicios</a>
            </li>
            <li className="mx-6">
              <a href="/banco">Banco</a>
            </li>
          </ul>
          <ul className="flex">
            <li className="mx-6">Perfil</li>
            <li className="mx-6">Salir</li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
