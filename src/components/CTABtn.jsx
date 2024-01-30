import { color } from "framer-motion";

function CTABtn({ text, className }) {
  return (
    <div className={`w-fit rounded-xl text-theme-light  ${className}`}>
      <button className={`p-3 w-fit tracking-wider font-semibold`}>
        {text}
      </button>
    </div>
  );
}

export default CTABtn;
