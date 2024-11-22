import Button from "./Button";

export default function MenCollection() {
  return (
    <div className="py-8 px-4 bg-gray-50 rounded-lg text-center flex items-center flex-col md:flex-row mx-auto container gap-10">
      <div className="">
        <img
          src="/images/MenImage.png"
          alt="Men Collection"
          className="h-auto w-auto object-cover"
        />
      </div>
      <div>
        <h1 className="text-2xl font-extrabold text-gray-800">
          MEN COLLECTION
        </h1>
        <Button />
      </div>
    </div>
  );
}