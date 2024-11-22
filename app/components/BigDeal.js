
import { useState, useEffect } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'; // React Icons
import { AiOutlineClose } from 'react-icons/ai'; // Close Icon for the modal

export default function BigDeal() {
  // Hardcoded category data
  const categories = [
    {
      id: 1,
      image: '/images/IndianShorts.png',
      review: '/images/Frame 17.png',
      name: 'Indian Shorts',
      price: 2300,
    },
    {
      id: 2,
      image: '/images/halfShirt.png',
      review: '/images/Frame 17.png',
      name: 'Half Sleeve Shirt',
      price: 2300,
    },
    {
      id: 3,
      image: '/images/Woman wearing sari.png',
      review: '/images/Frame 17.png',
      name: 'Woman wearing sari',
      price: 3000,
    },
    {
      id: 4,
      image: '/images/Checkeredshirt.png',
      review: '/images/Frame 17.png',
      name: 'Checkered shirt',
      price: 2300,
    },
    {
      id: 5,
      image: '/images/plazu.png',
      review: '/images/Frame 17.png',
      name: 'Plazu',
      price: 2300,
    },
    {
      id: 6,
      image: '/images/IndianShorts.png',
      review: '/images/Frame 17.png',
      name: 'Indian Shorts',
      price: 2300,
    },
    {
      id: 7,
      image: '/images/halfShirt.png',
      review: '/images/Frame 17.png',
      name: 'Half Sleeve Shirt',
      price: 2300,
    },
    {
      id: 8,
      image: '/images/Woman wearing sari.png',
      review: '/images/Frame 17.png',
      name: 'Woman wearing sari',
      price: 3000,
    },
  ];

  // State for the current index of the slider
  const [startIndex, setStartIndex] = useState(0);

  // State to control the "See More" modal visibility
  const [showModal, setShowModal] = useState(false);

  // State for detecting mobile vs desktop
  const [isMobile, setIsMobile] = useState(false);

  // Number of items to display per slide (default to 4 for desktop)
  const itemsPerSlide = 4;

  // Handle screen resizing to detect mobile or desktop size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // Update isMobile based on screen width
    };

    checkScreenSize(); // Check screen size initially

    // Add event listener for resizing
    window.addEventListener('resize', checkScreenSize);

    // Cleanup the event listener
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Set the number of visible items per slide based on screen size
  const visibleItems = isMobile ? 1 : itemsPerSlide;

  // Slide navigation functions
  const slideLeft = () => setStartIndex(Math.max(startIndex - visibleItems, 0));
  const slideRight = () =>
    setStartIndex(
      Math.min(startIndex + visibleItems, categories.length - visibleItems)
    );

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
            startIndex + visibleItems >= categories.length
              ? 'cursor-not-allowed opacity-50'
              : ''
          }`}
          disabled={startIndex + visibleItems >= categories.length}
        >
          <FiArrowRight size={20} />
        </button>
      </div>

      {/* Category Grid */}
      <div
        className={`grid grid-cols-${
          isMobile ? '1' : '4'
        } gap-4 mt-8 transition-transform`}
      >
        {categories.slice(startIndex, startIndex + visibleItems).map(cat => (
          <div
            key={cat.id}
            className="p-4 border rounded-lg text-center hover:shadow-md transition-shadow"
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="h-auto w-full object-cover mb-4"
            />
            <div>
              <img
                src={cat.review}
                alt={cat.name}
                className="h-auto w-full object-cover mb-4"
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
