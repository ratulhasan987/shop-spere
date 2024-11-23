import Image from 'next/image';
export default function Button() {
  return (
    <div className="flex gap-0.5">
      <button className="bg-violet-500 hover:bg-purple-700 text-white  py-1 px-6 rounded-3xl">
        Shop Now
      </button>
      <Image
        src="/icons/exploreIcon.png"
        alt="exploreIcon"
        width={64}
        height={64}
        className="md:w-16 md:h-12 w-10 h-10 cursor-pointer"
      />
    </div>
  );
}
