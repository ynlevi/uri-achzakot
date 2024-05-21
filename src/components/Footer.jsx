import Link from "next/link";
import Wave from "./svgs/Wave";
export default function Footer() {
  return (
    <div className="relative">
      <Wave
        position={"bottom"}
        className="relative -top-2 inset-x-0 -z-[5]"
        color={"var(--theme-accent)"}
      />
      <Wave
        position={"bottom"}
        color="var(--theme-secondary)"
        className="-z-10 -top-1 -inset-x-0 absolute"
      />
      <div className="mx-3 xs:mx-8 md:mx-auto max-w-3xl lg:-mt-24 mb-10">
        <h2 className="text-2xl lg:text-3xl font-bold text-shadow-sm text-theme-secondary">
          מחכים לשמוע ממך, אנחנו כאן לכל שאלה.
        </h2>
        <form
          action="https://public.herotofu.com/v1/bd010930-6125-11ee-a450-5f0c9649ec83"
          method="post"
          acceptCharset="UTF-8"
          className={`flex flex-col gap-2 mt-2 text-theme-dark text-lg tracking-wider`}
        >
          <input
            dir="rtl"
            className="w-full px-3 py-2 placeholder:text-theme-primary rounded-t-xl focus:outline-none bg-theme-light"
            name="Name"
            id="name"
            type="text"
            required
            placeholder={"שם פרטי"}
          />
          <input
            dir="rtl"
            className="w-full px-3 py-2 placeholder:text-theme-primary rounded-bl-xl focus:outline-none bg-theme-light "
            name="Tel"
            id="tel"
            type="tel"
            required
            placeholder={"מספר לחזרה"}
          />
          <input
            type="submit"
            name="Send"
            value={"דברו איתנו עוד היום!"}
            id="send"
            className="w-fit py-2 px-6 text-theme-background bg-theme-primary border-gradient border-[4px] rounded-b-xl font-bold tracking-wide cursor-pointer"
            aria-label="דברו איתנו"
          />
        </form>
      </div>
      <div className="px-3 xs:px-8 lg:px-32 ">
        <p className="border-theme-light w-full border-t-[.1px] mt-8 text-center py-2 text-xs md:text-base">
          hand-coded by
          <Link
            href="https://ynlevi.github.io/portfolio/"
            className="text-theme-dark text-shadow-light font-bold"
            aria-label="למעבר לעמוד פורטפוליו"
          >
            {" "}
            Levi's Digital Solutions for Small Business{" "}
          </Link>
          2024 ©
        </p>
      </div>
    </div>
  );
}
