import Image from 'next/image';
import Banner from "@/app/components/Banner";
import Category from "@/app/components/Category";
import Header from "@/app/components/Header";
import ProductCard from "@/app/components/ProductCard";
export default function Home() {
  return (
    <div className="bg-gray-50">
      {/* Header */}
      <Header/>
       <Banner/>

      {/* Hero Section */}
      {/* <section className="bg-purple-500 text-white p-8 text-center">
        <h2 className="text-3xl font-semibold">Exclusive Fashion Sale</h2>
        <p className="mt-2">Up to 50% off for new customers</p>
      </section> */}
     <section>
           <img
          src="/images/option.png"
          alt=""
          className="w-full -mt-2"
        />
     </section>

      {/* Product Categories */}
      <Category/>
      {/* <section className="grid grid-cols-2 md:grid-cols-4 gap-4 p-8">
        {['Men', 'Women', 'Kids', 'Accessories'].map(category => (
          <div
            key={category}
            className="bg-white shadow rounded-lg p-4 text-center"
          >
            <h3 className="text-lg font-semibold">{category}</h3>
            <Image
              src={`/images/${category.toLowerCase()}.jpg`} // Replace with your image paths
              alt={category}
              width={100}
              height={100}
              className="mx-auto"
            />
          </div>
        ))}
      </section> */}

      {/* Featured Products */}
      <section className="p-8">
        <h3 className="text-2xl font-bold text-center">New Collection</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="bg-white shadow rounded-lg p-4">
              <Image
                src={`/images/product-${index + 1}.jpg`} // Replace with your product images
                alt={`Product ${index + 1}`}
                width={200}
                height={200}
                className="mx-auto"
              />
              <h4 className="text-lg font-semibold mt-2">
                Product {index + 1}
              </h4>
              <p className="text-purple-700 font-bold">$49.99</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-purple-700 text-white text-center p-4">
        <p>© 2024 Fashion Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

// import Banner from "@/app/components/Banner";
// import Category from "@/app/components/Category";
// import Header from "@/app/components/Header";
// import ProductCard from "@/app/components/ProductCard";

// export default function Home() {
//   const categories = [
//     { id: 1, name: 'Men', image: '/images/men.jpg' },
//     { id: 2, name: 'Women', image: '/images/women.jpg' },
//   ];
//   const products = [
//     { id: 1, name: 'T-Shirt', image: '/images/tshirt.jpg', price: 29.99 },
//   ];

//   return (
//     <>
//       <Header />
//       <Banner />
//       <div className="max-w-6xl mx-auto">
//         <Category categories={categories} />
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//           {products.map(product => (
//             <ProductCard key={product.id} product={product} />
//           ))}
//         </div>
//       </div>
//       {/* <Footer /> */}
//     </>
//   );
// }
