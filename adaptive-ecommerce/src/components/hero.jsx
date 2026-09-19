import { useEffect, useState } from "react";

function Hero() {
  const [seconds, setSeconds] = useState(6 * 60 * 60 + 42 * 60 + 18);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((current) => {
        if (current <= 0) {
          return 6 * 60 * 60 + 42 * 60 + 18;
        }

        return current - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  return (
    <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <div className="grid min-h-[480px] overflow-hidden rounded-[28px] bg-[#fff4ef] md:grid-cols-2">

        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center px-8 py-12 sm:px-12 lg:px-16">

          <div className="mb-6 w-fit rounded-full bg-red-500 px-4 py-2 text-xs font-bold tracking-wide text-white">
            DEAL OF THE WEEK
          </div>

          <h1 className="text-5xl font-black leading-[1.05] tracking-tight text-slate-900 sm:text-6xl">
            Big Deals.
            <br />

            <span className="font-serif font-normal italic">
              Bigger Savings.
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-7 text-slate-600 sm:text-lg">
            Save more on your favourite products this week.
            Limited-time deals are waiting for you.
          </p>

          {/* TIMER */}
          <div className="mt-7 flex gap-3">

            <div className="flex h-20 w-20 flex-col items-center justify-center rounded-2xl bg-white shadow-sm">
              <span className="text-2xl font-black text-slate-900">
                {String(hours).padStart(2, "0")}
              </span>
              <span className="mt-1 text-[10px] font-medium uppercase tracking-wide text-slate-400">
                Hours
              </span>
            </div>

            <div className="flex h-20 w-20 flex-col items-center justify-center rounded-2xl bg-white shadow-sm">
              <span className="text-2xl font-black text-slate-900">
                {String(minutes).padStart(2, "0")}
              </span>
              <span className="mt-1 text-[10px] font-medium uppercase tracking-wide text-slate-400">
                Minutes
              </span>
            </div>

            <div className="flex h-20 w-20 flex-col items-center justify-center rounded-2xl bg-white shadow-sm">
              <span className="text-2xl font-black text-slate-900">
                {String(remainingSeconds).padStart(2, "0")}
              </span>
              <span className="mt-1 text-[10px] font-medium uppercase tracking-wide text-slate-400">
                Seconds
              </span>
            </div>

          </div>

          <button
            onClick={() => {
              const productSection = document.getElementById("products");

              if (productSection) {
                productSection.scrollIntoView({
                  behavior: "smooth",
                });
              }
            }}
            className="mt-8 w-fit rounded-xl bg-red-500 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-red-600 hover:shadow-lg"
          >
            Shop Deals →
          </button>

        </div>

        {/* RIGHT SIDE */}
        <div className="relative min-h-[350px] overflow-hidden bg-red-600">

          <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=90"
            alt="Featured Deal"
            className="h-full w-full object-cover"
          />

          <div className="absolute right-6 top-6 rounded-full bg-white px-5 py-3 text-xs font-black text-slate-900 shadow-lg">
            SAVE 38%
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;