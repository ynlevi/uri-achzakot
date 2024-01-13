function CTABtn({ text, className }) {
  return (
    <div className={`w-fit mr-auto ${className}`}>
      <button className="p-3 mr-auto w-fit font-semibold tracking-wider rounded-xl bg-theme-primary text-theme-light">
        {text}
      </button>
    </div>
  );
}

export default CTABtn;
