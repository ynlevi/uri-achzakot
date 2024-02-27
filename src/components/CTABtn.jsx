import { color } from "framer-motion";
import Link from "next/link";

function CTABtn({ text, url, className }) {
  return (
    <div
      className={`w-fit rounded-xl p-3 tracking-wider font-semibold text-theme-light  ${className}`}
    >
      <Link href={url}>{text}</Link>
    </div>
  );
}

export default CTABtn;
