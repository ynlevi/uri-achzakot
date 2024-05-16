import { Inter } from "next/font/google";
import { Assistant } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";
import Main from "@/components/Main";
const inter = Inter({ subsets: ["latin"] });
const assistant = Assistant({
  weight: ["200", "300", "400", "500", "700"],
  subsets: ["hebrew"],
});
export const metadata = {
  title: "אורי אחזקות",
  description: ",תחזוקת מבנים בירושלים",
};

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl">
      <body className={assistant.className}>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </body>
    </html>
  );
}
