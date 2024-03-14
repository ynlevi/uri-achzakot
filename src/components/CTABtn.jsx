import { color } from "framer-motion";
import Link from "next/link";

function CTABtn({ text, url, className }) {
  return (
    <div
      className={`w-fit rounded-xl tracking-wide font-extrabold hover:shadow-lg relative hover:-translate-y-1 duration-300 ${className}`}
    >
      <Link href={url}>{text}</Link>
    </div>
  );
}

export default CTABtn;
