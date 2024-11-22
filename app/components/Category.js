import { useState } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'; // Import React Icons
import { AiOutlineClose } from 'react-icons/ai'; // Close icon for the modal

export default function Category() {
  // Hardcoded category data
  const categories = [
    { id: 1, image: '/images/hodiee.png', name: 'Hoodie', price: 2300 },
    { id: 2, image: '/images/plazu.png', name: 'Plazu', price: 2300 },
    { id: 3, image: '/images/jacket.png', name: 'Jacket', price: 2300 },
    { id: 4, image: '/images/sharee.png', name: 'Saree', price: 3000 },
    { id: 1, image: '/images/hodiee.png', name: 'Hoodie', price: 2300 },
    { id: 2, image: '/images/plazu.png', name: 'Plazu', price: 2300 },
    { id: 3, image: '/images/jacket.png', name: 'Jacket', price: 2300 },
  ];

  // State for the current index of the slider
  const [startIndex, setStartIndex] = useState(0);

  // State to control the "See More" modal visibility
  const [showModal, setShowModal] = useState(false);

  // Number of items to display per slide
  const itemsPerSlide = 4;

  // Handle slide to the left
  const slideLeft = () => {
    setStartIndex(prevIndex => Math.max(prevIndex - itemsPerSlide, 0));
  };

  // Handle slide to the right
  const slideRight = () => {
    setStartIndex(prevIndex =>
      Math.min(prevIndex + itemsPerSlide, categories.length - itemsPerSlide)
    );
  };

  return (
    <div className="my-8 relative container mx-auto">
      {/* Section Title */}
      
      <h2 className="text-sm font-semibold text-purple-600 mb-1">FEATURED PRODUCT</h2>
      <h2 className="text-xl font-semibold mb-4">New Arrivals</h2>

      {/* Slider Buttons */}
      <div className="absolute top-0 right-0 flex space-x-2">
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
            startIndex + itemsPerSlide >= categories.length
              ? 'cursor-not-allowed opacity-50'
              : ''
          }`}
          disabled={startIndex + itemsPerSlide >= categories.length}
        >
          <FiArrowRight size={20} />
        </button>
      </div>

      {/* Category Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
        {categories.slice(startIndex, startIndex + itemsPerSlide).map(cat => (
          <div
            key={cat.id}
            className="p-4 border rounded-lg text-center hover:shadow-md transition-shadow"
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="h-auto w-full object-cover mb-4"
            />
            <div className="flex justify-between items-center">
              <p className="text-lg font-medium">{cat.name}</p>
              <p className="text-gray-600">BDT {cat.price}</p>
            </div>
            <button className="mt-2 px-4 py-2 border border-black  w-full text-purple-600  rounded hover:text-purple-700">
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* See More Button */}
      <div className="flex justify-center mt-6">
        <button
          onClick={() => setShowModal(true)} // Open modal
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
              onClick={() => setShowModal(false)} // Close modal
              className="absolute top-4 right-4 text-gray-600 hover:text-black"
            >
              <AiOutlineClose size={24} />
            </button>

            <h3 className="text-xl font-semibold mb-4">More Products</h3>
            <p className="text-gray-700">
              Explore more products in our collection. This could lead to a new
              page or showcase additional items.
            </p>

            <div className="flex justify-center mt-4">
              <button
                onClick={() => {
                  // Navigate to another page or load more data
                  setShowModal(false);
                  console.log('Navigate to more products...');
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
