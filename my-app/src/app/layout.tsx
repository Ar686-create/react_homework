import "./globals.css";
import { Inter } from "next/font/google";
import { StoreProvider } from "./redux/StoreProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Билетопоиск",
  description: "Удобный поиск билетов",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
