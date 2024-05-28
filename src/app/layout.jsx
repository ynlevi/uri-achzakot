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
  description: "תחזוקת מבנים באיזור בית שמש וירושלים",
  keywords: [
    "תחזוקת מבנים בירושלים",
    "תחזוקת מבנים בבית שמש",
    "אורי אחזקות",
    "תחזוקת דירות לתושבי חו׳׳ל",
    "בירושלים",
    "בבית שמש",
    "הרחקת יונים",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <meta
          name="google-site-verification"
          content="NDEqAdJBeTlAQ-sbazUVUD7_NAlZmzQUZwNa2tVkRHY"
        />
      </head>

      <body className={assistant.className}>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </body>
    </html>
  );
}
