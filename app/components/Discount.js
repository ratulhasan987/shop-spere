import Button from "./Button";
import Image from 'next/image';
export default function Discount() {
  return (
    <div className="bg-primary-100 py-8 container mx-auto ">
      <div className="bg-zinc-200 md:p-0 p-4 flex  flex-col md:flex-row md:justify-evenly md:gap-20 gap-10 items-center">
        <div className=" text-center">
          <h2 className="text-lg font-bold text-purple-600 mb-2">Big Deal</h2>
          <h1 className="text-3xl font-extrabold text-gray-800">
            30% Off for New Customers
          </h1>
          <p className="text-gray-500 mt-2 mb-2">
            Hurry up! Offer valid for a limited time.
          </p>
          <div className="flex justify-center">
            <Button />
          </div>
        </div>

        <div className="md:w-1/2 w-full">
          <Image
            src="/images/DiscountImage.png"
            width={640}
            height={480}
            alt="Discount Offer"
            className=""
          />
        </div>
      </div>
    </div>
  );
}
