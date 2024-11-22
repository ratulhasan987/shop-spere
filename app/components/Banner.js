export default function Banner() {
  return (
    <div
      className="bg-center bg-cover md:h-[480px] h-[380px] flex flex-col items-center justify-center text-white text-center mt-10"
      style={{ backgroundImage: "url('/images/banner.png')" }}
    >
      <h2 className="text-4xl font-bold mb-1">Elevate Your Everyday Style</h2>
      <p className="mb-6">Discover the Latest Trends in Sustainable Fashion</p>
     <div className="flex gap-0.5">
      <button className="bg-purple-00 hover:bg-purple-700 text-white  py-1.4 px-6 rounded-3xl">
        Shop Now
      </button>
      <img
          src="/icons/exploreIcon.png"
          alt=""
          className="cursor-pointer"
        />
      </div>
    </div>
  );
}
