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
        className="-z-10 -top-[0.2rem] -inset-x-0 absolute"
      />
      <div className="mx-3 xs:mx-8 md:mx-auto max-w-3xl lg:-mt-24 mb-10">
        <h3 className="text-2xl lg:text-4xl font-bold text-shadow-sm text-theme-secondary text-center mb-10">
          מחכים לשמוע ממך, אנחנו כאן לכל שאלה.
        </h3>
        <form
          // action="https://public.herotofu.com/v1/bd010930-6125-11ee-a450-5f0c9649ec83"
          action="https://formsubmit.co/uriachzakot@gmail.com"
          method="POST"
          acceptCharset="UTF-8"
          className={`flex flex-col gap-2 mt-2 text-theme-dark text-lg tracking-wider`}
        >
          <input
            dir="rtl"
            className="w-full px-5 py-2 placeholder:text-theme-accent font-bold border-[3px] border-theme-secondary rounded-t-xl focus:outline-none bg-theme-text text-theme-accent"
            name="Name"
            id="name"
            type="text"
            required
            placeholder={"שם פרטי"}
          />
          <input
            dir="rtl"
            className="w-full px-5 py-2 placeholder:text-theme-accent font-bold border-[3px] border-theme-secondary rounded-bl-xl focus:outline-none bg-theme-text text-theme-accent"
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
            className="w-fit py-2 px-5 text-theme-background bg-gradient-to-l from-theme-primary via-theme-secondary border-theme-secondary to-theme-primary border-[3px] rounded-b-xl font-bold tracking-wide cursor-pointer"
            aria-label="דברו איתנו"
          />
        </form>
      </div>
      <div className="">
        <div
          className=" w-screen absolute bg-gradient-to-l
        from-transparent via-theme-secondary to to-transparent h-[1px]"
        />
        <p dir="ltr" className="text-center py-4 text-xs md:text-base  ">
          Hand-coded by
          <Link
            href="https://lws-xi.vercel.app"
            className="text-theme-primary"
            aria-label="למעבר לעמוד פורטפוליו"
          >
            {" "}
            Levi's Web Solutions{" "}
          </Link>
          in Montréal 🇨🇦 2024 ©
        </p>
      </div>
    </div>
  );
}
