export default function Button() {
  return (
    <div className="flex gap-0.5">
      <button className="bg-violet-500 hover:bg-purple-700 text-white  py-1 px-6 rounded-3xl">
        Shop Now
      </button>
      <img src="/icons/exploreIcon.png" alt="" className="cursor-pointer" />
    </div>
  );
}
