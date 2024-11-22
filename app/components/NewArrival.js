
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

export default function NewArrival() {
  const router = useRouter();

  const categories = [
    {
      id: 1,
      image: '/images/hodiee.png',
      name: 'Hoodie',
      price: 2300,
      gallery: [
        '/images/hodiee.png',
        '/images/hodiee.png',
        '/images/hodiee.png',
      ],
      reviews: [
        { user: 'John', rating: 4, comment: 'Great product!' },
        { user: 'Jane', rating: 4, comment: 'Comfortable and stylish.' },
      ],
    },
    {
      id: 2,
      image: '/images/plazu.png',
      name: 'Plazu',
      price: 2300,
      gallery: ['/images/plazu.png', '/images/plazu.png', '/images/plazu.png'],
      reviews: [
        { user: 'Mike', rating: 4, comment: 'Good but could be better.' },
        { user: 'Jane', rating: 4, comment: 'Comfortable and stylish.' },
      ],
    },
    {
      id: 3,
      image: '/images/sharee.png',
      name: 'Sharee',
      price: 30000,
      gallery: [
        '/images/sharee.png',
        '/images/sharee.png',
        '/images/sharee.png',
      ],
      reviews: [
        { user: 'John', rating: 4, comment: 'Great product!' },
        { user: 'Jane', rating: 4, comment: 'Comfortable and stylish.' },
      ],
    },
    {
      id: 4,
      image: '/images/jacket.png',
      name: 'Jacket',
      price: 2300,
      gallery: [
        '/images/jacket.png',
        '/images/jacket.png',
        '/images/jacket.png',
      ],
      reviews: [
        { user: 'Mike', rating: 4, comment: 'Good but could be better.' },
        { user: 'Jane', rating: 4, comment: 'Comfortable and stylish.' },
      ],
    },
    {
      id: 5,
      image: '/images/hodiee.png',
      name: 'Hoodie',
      price: 2300,
      gallery: [
        '/images/hodiee.png',
        '/images/hodiee.png',
        '/images/hodiee.png',
      ],
      reviews: [
        { user: 'John', rating: 4, comment: 'Great product!' },
        { user: 'Jane', rating: 4, comment: 'Comfortable and stylish.' },
      ],
    },
    {
      id: 6,
      image: '/images/plazu.png',
      name: 'Plazu',
      price: 2300,
      gallery: ['/images/plazu.png', '/images/plazu.png', '/images/plazu.png'],
      reviews: [
        { user: 'Mike', rating: 4, comment: 'Good but could be better.' },
        { user: 'Jane', rating: 4, comment: 'Comfortable and stylish.' },
      ],
    },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const itemsPerSlide = 4;

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const visibleItems = isMobile ? 1 : itemsPerSlide;

  const slideLeft = () => setStartIndex(Math.max(startIndex - visibleItems, 0));
  const slideRight = () =>
    setStartIndex(
      Math.min(startIndex + visibleItems, categories.length - visibleItems)
    );

  // Navigate to Product Details page with gallery and reviews
  const handleProductClick = product => {
    router.push({
      pathname: `/product/[id]`,
      query: {
        id: product.id,
        gallery: JSON.stringify(product.gallery), // Pass gallery as JSON string
        reviews: JSON.stringify(product.reviews), // Pass reviews as JSON string
      },
    });
  };

  return (
    <div className="my-8 relative container mx-auto px-4">
      <h2 className="text-sm font-semibold text-purple-600 mb-1">
        FEATURED PRODUCT
      </h2>
      <h2 className="text-xl font-semibold mb-4">New Arrivals</h2>

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

      <div
        className={`grid grid-cols-${
          isMobile ? '1' : '4'
        } gap-4 mt-8 transition-transform`}
      >
        {categories.slice(startIndex, startIndex + visibleItems).map(cat => (
          <div
            key={cat.id}
            className="p-4 border rounded-lg text-center hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => handleProductClick(cat)} // Pass product details on click
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="h-48 w-full object-cover mb-4 rounded-md"
            />
            <div className="flex justify-between items-center">
              <p className="text-lg font-medium">{cat.name}</p>
              <p className="text-gray-600">BDT {cat.price}</p>
            </div>
            <button className="px-6 py-2 border border-black w-full  text-purple-600 rounded hover:text-purple-700 mt-2">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
