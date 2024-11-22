import Button from "./Button";

export default function Banner() {
  return (
    <div>
      <div
        className="bg-center bg-cover md:h-[480px] lg:h-[530px] h-[380px] flex flex-col items-center justify-center text-white text-center mt-10"
        style={{ backgroundImage: "url('/images/banner.png')" }}
      >
        <h2 className="md:text-4xl text-2xl font-bold mb-1">
          Elevate Your Everyday Style
        </h2>
        <p className="md:mb-6 mb-3 text-xs md:text-sm">
          Discover the Latest Trends in Sustainable Fashion
        </p>
        {/* <div className="flex gap-0.5">
          <button className="bg-purple-600 hover:bg-purple-700 text-white  py-1.4 px-6 rounded-3xl">
            Shop Now
          </button>
          <img src="/icons/exploreIcon.png" alt="" className="cursor-pointer" />
        </div> */}
        <Button />
      </div>
      <section>
        <img
          src="/images/option.png"
          alt=""
          className="w-full -mt-2 md:block
           hidden"
        />
        <img
          src="/images/option (m).png"
          alt=""
          className="w-full -mt-2 md:hidden block"
        />
      </section>
    </div>
  );
}
