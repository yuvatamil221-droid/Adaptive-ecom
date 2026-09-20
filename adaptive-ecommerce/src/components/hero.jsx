import { useEffect, useState } from "react";

const getEndTime = () => {
  const savedTime = localStorage.getItem("dealEndTime");

  if (savedTime) {
    return Number(savedTime);
  }

  const newEndTime = Date.now() + 6 * 60 * 60 * 1000;

  localStorage.setItem("dealEndTime", newEndTime);

  return newEndTime;
};

const getRemainingTime = () => {
  const endTime = getEndTime();
  const remaining = Math.max(0, endTime - Date.now());

  return {
    hours: Math.floor(
      remaining / (1000 * 60 * 60)
    ),
    minutes: Math.floor(
      (remaining % (1000 * 60 * 60)) /
        (1000 * 60)
    ),
    seconds: Math.floor(
      (remaining % (1000 * 60)) / 1000
    ),
  };
};

function Hero() {
  const [time, setTime] = useState(getRemainingTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(getRemainingTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleShopNow = () => {
    const productSection =
      document.getElementById("products");

    if (productSection) {
      productSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="mx-auto max-w-7xl px-3 py-5 sm:px-6 sm:py-8 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl bg-[#fff3ef]">

        <div className="relative z-10 px-6 py-10 sm:px-12 sm:py-16 lg:px-16 lg:py-20">

          <div className="max-w-2xl">

            <span className="inline-block rounded-full bg-red-500 px-4 py-2 text-[10px] font-black uppercase tracking-wide text-white sm:px-5 sm:py-2.5 sm:text-xs">
              Deal of the Week
            </span>

            <h1 className="mt-5 text-4xl font-black leading-[1.05] text-[#111827] sm:text-6xl lg:text-7xl">
              Big Deals.
              <br />

              <span className="font-serif font-normal italic">
                Bigger
              </span>

              <br />

              <span className="font-serif font-normal italic">
                Savings.
              </span>
            </h1>

            <p className="mt-5 max-w-lg text-sm leading-6 text-gray-600 sm:mt-6 sm:text-base sm:leading-7">
              Save more on your favourite products this week.
              Limited-time deals are waiting for you.
            </p>

            <button
              onClick={handleShopNow}
              className="mt-6 rounded-xl bg-red-500 px-6 py-3 text-sm font-bold text-white transition hover:bg-red-600 sm:mt-7 sm:px-7 sm:py-3.5"
            >
              Shop Deals →
            </button>

            <div className="mt-7 grid max-w-md grid-cols-3 gap-3 sm:mt-9 sm:gap-4">

              <div className="rounded-xl bg-white px-3 py-4 text-center shadow-sm sm:rounded-2xl sm:px-5 sm:py-5">
                <p className="text-2xl font-black text-[#111827] sm:text-4xl">
                  {String(time.hours).padStart(2, "0")}
                </p>
                <p className="mt-1 text-[9px] font-medium uppercase tracking-wide text-gray-400 sm:text-xs">
                  Hours
                </p>
              </div>

              <div className="rounded-xl bg-white px-3 py-4 text-center shadow-sm sm:rounded-2xl sm:px-5 sm:py-5">
                <p className="text-2xl font-black text-[#111827] sm:text-4xl">
                  {String(time.minutes).padStart(2, "0")}
                </p>
                <p className="mt-1 text-[9px] font-medium uppercase tracking-wide text-gray-400 sm:text-xs">
                  Minutes
                </p>
              </div>

              <div className="rounded-xl bg-white px-3 py-4 text-center shadow-sm sm:rounded-2xl sm:px-5 sm:py-5">
                <p className="text-2xl font-black text-[#111827] sm:text-4xl">
                  {String(time.seconds).padStart(2, "0")}
                </p>
                <p className="mt-1 text-[9px] font-medium uppercase tracking-wide text-gray-400 sm:text-xs">
                  Seconds
                </p>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;