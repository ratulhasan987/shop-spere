import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Gallery from '../../components/Gallery';

export default function ProductDetails({ product }) {
  return (
    <>
      <Header />
      <div className="max-w-6xl mx-auto my-8">
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Gallery images={product.images} />
          <div>
            <p className="text-lg">{product.description}</p>
            <p className="text-xl font-bold mt-4">${product.price}</p>
            <button className="px-6 py-2 mt-4 bg-blue-500 text-white rounded-lg">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export async function getServerSideProps({ params }) {
  const product = {
    id: params.id,
    name: 'T-Shirt',
    description: 'High-quality cotton T-shirt.',
    price: 29.99,
    images: ['/images/tshirt1.jpg', '/images/tshirt2.jpg'],
  };
  return { props: { product } };
}
