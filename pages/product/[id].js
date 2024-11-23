import Contact from '@/app/components/Contact';
import Header from '@/app/components/Header';
import NewArrival from '@/app/components/NewArrival';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Image from 'next/image';
export default function ProductDetails() {
  const router = useRouter();
  const { id, gallery, reviews } = router.query;

  const productGallery = gallery ? JSON.parse(gallery) : [];
  const productReviews = reviews ? JSON.parse(reviews) : [];

  const products = [
    { id: 1, name: 'Hoodie', price: 2300, sizes: ['S', 'M', 'L', 'XL'], colors: ['Red', 'Blue', 'Green'] },
    { id: 2, name: 'Plazu', price: 2300, sizes: ['S', 'M', 'L', 'XL'], colors: ['Black', 'White'] },
    { id: 3, name: 'Saree', price: 2300, sizes: ['S', 'M', 'L', 'XL'], colors: ['Yellow', 'Pink'] },
    { id: 4, name: 'Jacket', price: 2300, sizes: ['S', 'M', 'L', 'XL'], colors: ['Yellow', 'Pink'] },
    { id: 5, name: 'Hoodie', price: 2300, sizes: ['S', 'M', 'L', 'XL'], colors: ['Yellow', 'Pink'] },
    { id: 6, name: 'Plazu', price: 2300, sizes: ['S', 'M', 'L', 'XL'], colors: ['Yellow', 'Pink'] },
  ];

  const product = products.find((item) => item.id === parseInt(id));
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product?.colors[0]);
  const [quantity, setQuantity] = useState(1);

  const handleSizeChange = (size) => setSelectedSize(size);
  const handleColorChange = (color) => setSelectedColor(color);

  const handleQuantityChange = (operation) => {
    setQuantity((prevQuantity) =>
      operation === 'increment' ? prevQuantity + 1 : prevQuantity > 1 ? prevQuantity - 1 : 1
    );
  };

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <>
      <Header />
      <div className="max-w-4xl mx-auto px-4 mt-28">
        <h1 className="text-sm font-bold mb-8">
          Feature Product / <span className="text-purple-600">New Arrival</span>
        </h1>
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Product Gallery */}
          <div className="flex-1">
            <Image
              src={productGallery[0]}
              alt={product.name}
              className="w-full md:h-96 h-auto object-cover rounded-lg mb-4"
            />
            <div className="flex space-x-4 overflow-x-auto mb-6">
              {productGallery.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-32 h-32 object-cover rounded-lg"
                />
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="flex-1">
            <h1 className="text-lg md:w-1/2 w-full text-center bg-purple-900 px-10 py-1 text-white rounded-lg mb-4">
              New Arrival
            </h1>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <Image src="/images/Frame 73.png" alt="" className="mb-4" />
            <p className="text-lg font-bold mb-4">BDT {product.price}</p>
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Available Size */}
              <div>
                <h3 className="text-lg mb-2">Available Size</h3>
                <div className="flex gap-4 flex-wrap">
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      className={`px-2 py-1 border rounded-lg ${
                        selectedSize === size
                          ? 'bg-purple-900 text-white'
                          : 'bg-white text-black'
                      }`}
                      onClick={() => handleSizeChange(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              {/* Available Color */}
              <div>
                <h3 className="text-lg mb-2">Available Color</h3>
                <div className="flex gap-4">
                  {product.colors.map(color => (
                    <label
                      key={color}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="color"
                        value={color}
                        checked={selectedColor === color}
                        onChange={() => handleColorChange(color)}
                        className="hidden"
                      />
                      <div
                        className={`w-5 h-5 border rounded-full ${
                          selectedColor === color
                            ? 'ring-2 ring-purple-900'
                            : ''
                        }`}
                        style={{ backgroundColor: color.toLowerCase() }}
                      />
                      <span className="capitalize">{color}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <h3 className="text-lg mb-2">Quantity</h3>
              <div className="flex items-center gap-4">
                <button
                  className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
                  onClick={() => handleQuantityChange('decrement')}
                >
                  -
                </button>
                <p className="text-lg font-bold">{quantity}</p>
                <button
                  className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
                  onClick={() => handleQuantityChange('increment')}
                >
                  +
                </button>
              </div>
            </div>

            {/* Buy Now and Add to Cart Buttons */}
            <div className="flex flex-col md:flex-row gap-4 mt-6">
              <button className="px-6 py-1 w-full md:w-1/2 bg-purple-500 text-white rounded hover:bg-purple-600">
                Buy Now
              </button>
              <button className="px-6 py-1 w-full md:w-1/2 bg-gray-200 text-black rounded hover:bg-gray-300">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <h3 className="text-lg mt-10 mb-2">Reviews</h3>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex-1">
            {productReviews.length > 0 ? (
              productReviews.map((review, index) => (
                <div key={index} className="border-b pb-4 mb-4">
                  <p className="font-semibold">{review.user}</p>
                  <p className="text-gray-600">{review.comment}</p>
                  <p className="text-yellow-500">{'★'.repeat(review.rating)}</p>
                </div>
              ))
            ) : (
              <p>No reviews yet.</p>
            )}
          </div>
          <Image src="/images/reviewImage.png" alt="Reviews" className="h-36" />
        </div>
      </div>
      <div className="py-10">
        <NewArrival />
      </div>
      <Contact />
    </>
  );
}
