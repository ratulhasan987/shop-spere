import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'; // Import useRouter
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';
import Image from 'next/image';
export default function BigDeal() {
  const router = useRouter(); // Initialize router

  const products = [
    {
      id: 1,
      image: '/images/IndianShorts.png',
      review: '/images/Frame 17.png',
      name: 'Indian Shorts',
      price: 2300,
      gallery: [
        '/images/IndianShorts.png',
        '/images/IndianShorts.png',
        '/images/IndianShorts.png',
      ],
      reviews: [
        { user: 'John', rating: 4, comment: 'Great product!' },
        { user: 'Jane', rating: 4, comment: 'Comfortable and stylish.' },
      ],
    },
    {
      id: 2,
      image: '/images/halfShirt.png',
      review: '/images/Frame 17.png',
      name: 'Half Sleeve Shirt',
      price: 2300,
      gallery: [
        '/images/HalfShirt.png',
        '/images/HalfShirt.png',
        '/images/HalfShirt.png',
      ],
      reviews: [
        { user: 'John', rating: 4, comment: 'Great product!' },
        { user: 'Jane', rating: 4, comment: 'Comfortable and stylish.' },
      ],
    },
    {
      id: 3,
      image: '/images/WomanWearingsSharee.png',
      review: '/images/Frame 17.png',
      name: 'Woman Wearing Sharee',
      price: 2300,
      gallery: [
        '/images/WomanWearingsSharee.png',
        '/images/WomanWearingsSharee.png',
        '/images/WomanWearingsSharee.png',
      ],
      reviews: [
        { user: 'John', rating: 4, comment: 'Great product!' },
        { user: 'Jane', rating: 4, comment: 'Comfortable and stylish.' },
      ],
    },
    {
      id: 4,
      image: '/images/CheckeredShirt.png',
      review: '/images/Frame 17.png',
      name: 'Checkerd Shirt',
      price: 2300,
      gallery: [
        '/images/CheckeredShirt.png',
        '/images/CheckeredShirt.png',
        '/images/CheckeredShirt.png',
      ],
      reviews: [
        { user: 'John', rating: 4, comment: 'Great product!' },
        { user: 'Jane', rating: 4, comment: 'Comfortable and stylish.' },
      ],
    },
    {
      id: 5,
      image: '/images/Plazu.png',
      review: '/images/Frame 17.png',
      name: 'Plazu',
      price: 2300,
      gallery: ['/images/Plazu.png', '/images/Plazu.png', '/images/Plazu.png'],
      reviews: [
        { user: 'John', rating: 4, comment: 'Great product!' },
        { user: 'Jane', rating: 4, comment: 'Comfortable and stylish.' },
      ],
    },
    {
      id: 6,
      image: '/images/halfShirt.png',
      review: '/images/Frame 17.png',
      name: 'Half Sleeve Shirt',
      price: 2300,
      gallery: [
        '/images/HalfShirt.png',
        '/images/HalfShirt.png',
        '/images/HalfShirt.png',
      ],
      reviews: [
        { user: 'John', rating: 4, comment: 'Great product!' },
        { user: 'Jane', rating: 4, comment: 'Comfortable and stylish.' },
      ],
    },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const itemsPerSlide = isMobile ? 1 : 4;

  useEffect(() => {
    const updateScreenSize = () => setIsMobile(window.innerWidth < 768);
    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);
    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  const slideLeft = () =>
    setStartIndex(Math.max(startIndex - itemsPerSlide, 0));
  const slideRight = () =>
    setStartIndex(
      Math.min(startIndex + itemsPerSlide, products.length - itemsPerSlide)
    );

  // Navigate to product details page
  const handleProductClick = product => {
    router.push({
      pathname: `/product/[id]`,
      query: {
        id: product.id,
        gallery: JSON.stringify(product.gallery),
        reviews: JSON.stringify(product.reviews),
      },
    });
  };

  return (
    <div className="my-8 relative container mx-auto md:px-0 px-4">
      {/* Section Title */}
      <h2 className="text-sm font-semibold text-purple-600 mb-1">SUMMER</h2>
      <h2 className="text-xl font-semibold mb-4">Big Deal</h2>

      {/* Slider Buttons */}
      <div className="absolute top-0 right-2 flex space-x-2">
        <button
          onClick={slideLeft}
          className={`bg-gray-200 p-2 rounded-full hover:bg-gray-300 shadow ${
            startIndex === 0 ? 'cursor-not-allowed opacity-50' : ''
          }`}
          disabled={startIndex === 0}
        >
          <FiArrowLeft size={20} />
        </button>
        <button
          onClick={slideRight}
          className={`bg-gray-200 p-2 rounded-full hover:bg-gray-300 shadow ${
            startIndex + itemsPerSlide >= products.length
              ? 'cursor-not-allowed opacity-50'
              : ''
          }`}
          disabled={startIndex + itemsPerSlide >= products.length}
        >
          <FiArrowRight size={20} />
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-8 transition-transform">
        {products.slice(startIndex, startIndex + itemsPerSlide).map(cat => (
          <div
            key={cat.id}
            className="p-4 border rounded-lg text-center hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => handleProductClick(cat)} // Navigate on click
          >
            <div>
              <Image
                src={cat.image}
                alt={cat.name}
                layout="responsive"
                width={300} 
                height={300}
                className="h-auto w-full object-cover mb-4 rounded-md"
              />

              <Image
                src={cat.review}
                alt="Review"
                width={200} 
                height={50} 
                className="h-auto w-full object-cover mb-2 rounded-md"
              />

              <div className="flex justify-between items-center">
                <p className="text-lg font-medium">{cat.name}</p>
                <p className="text-gray-600">BDT {cat.price}</p>
              </div>
            </div>
            <button className="mt-2 px-4 py-2 border border-black w-full text-purple-600 rounded hover:text-purple-700">
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* See More Button */}
      <div className="flex justify-center mt-6">
        <button
          onClick={() => setShowModal(true)}
          className="px-6 py-2 bg-purple-500 text-white rounded hover:bg-purple-700"
        >
          See more
        </button>
      </div>

      {/* Modal for "See More" */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 w-3/4 max-w-lg shadow-lg relative">
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-black"
            >
              <AiOutlineClose size={24} />
            </button>

            <h3 className="text-xl font-semibold mb-4">More Products</h3>
            <p className="text-gray-700">
              Explore more products in our collection. Click below to see all.
            </p>

            <div className="flex justify-center mt-4">
              <button
                onClick={() => {
                  console.log('Navigating to more products...');
                  setShowModal(false);
                }}
                className="px-6 py-2 bg-purple-500 text-white rounded hover:bg-purple-700"
              >
                Browse All Products
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
