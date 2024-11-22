export default function ProductCard({ product }) {
  return (
    <div className="p-4 border rounded-lg">
      <img
        src={product.image}
        alt={product.name}
        className="h-48 w-full object-cover rounded-md"
      />
      <h3 className="text-lg font-bold mt-2">{product.name}</h3>
      <p className="text-gray-600">${product.price}</p>
    </div>
  );
}
