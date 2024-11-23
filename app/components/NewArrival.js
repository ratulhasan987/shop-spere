import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import Image from 'next/image';
export default function NewArrival() {
  const router = useRouter();

  // Determine titles based on the current route
  const isHomePage = router.pathname === '/';
  // products data
  const products = [
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

  // State for slider and screen size
  const [startIndex, setStartIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Determine items per slide based on screen size
  const itemsPerSlide = isMobile ? 1 : 4;

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Slider controls
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
    <div id="newArrival" className="my-8 relative container mx-auto px-4">
      {/* Section Title */}
      {isHomePage ? (
        <>
          <h2 className="text-sm font-semibold text-purple-600 mb-1">
            FEATURED PRODUCT
          </h2>
          <h2 className="text-xl font-semibold mb-4">New Arrivals</h2>
        </>
      ) : (
        <>
          <h2 className="text-sm font-semibold text-purple-600 mb-1">
            RELATED PRODUCT
          </h2>
          <h2 className="text-xl font-semibold mb-4">Explore More</h2>
        </>
      )}

      {/* Slider Buttons */}
      <div className="absolute top-0 right-4 flex space-x-2">
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8 transition-transform">
        {products.slice(startIndex, startIndex + itemsPerSlide).map(cat => (
          <div
            key={cat.id}
            className="p-4 border rounded-lg text-center hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => handleProductClick(cat)}
          >
            <Image
              src={cat.image}
              alt={cat.name}
              layout="responsive"
              width={300} 
              height={300}
              className="h-auto w-full object-cover mb-4 rounded-md"
            />
            <div className="flex justify-between items-center">
              <p className="text-lg font-medium">{cat.name}</p>
              <p className="text-gray-600">BDT {cat.price}</p>
            </div>
            <button className="px-6 py-2 border border-black w-full text-purple-600 rounded hover:text-purple-700 mt-2">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

