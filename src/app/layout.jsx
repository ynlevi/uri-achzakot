import { Inter } from "next/font/google";
import { Assistant } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
        <div id="content" className="min-h-screen w-full  ">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
