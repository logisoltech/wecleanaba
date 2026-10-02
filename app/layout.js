import { Libre_Baskerville, Poppins } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const libreBaskerville = Libre_Baskerville({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: {
    default: "We Clean ABA™ | Controlled Environments for Growing ABA Organizations",
    template: "%s | We Clean ABA™",
  },
  description:
    "We Clean ABA builds controlled, consistent environments for multi-clinic ABA organizations. Clean. Stocked. Ready. Every center. Every morning.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${libreBaskerville.variable} h-full`}>
      <body className="min-h-full flex flex-col font-sans antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
