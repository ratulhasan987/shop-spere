import Image from 'next/image';
import Banner from "@/app/components/Banner";
import NewArrival from '@/app/components/NewArrival';
import BigDeal from '@/app/components/BigDeal';
import Header from "@/app/components/Header";
import Discount from '@/app/components/Discount';
import MenCollection from '@/app/components/MenCollection';
import Contact from '@/app/components/Contact';
// import ProductCard from "@/app/components/ProductCard";
import WomenCollection from '@/app/components/WomenCollection';
import ProductDetails from './product/[id]';

export default function Home() {
  
    
  return (

    <div className="bg-gray-50">
      <Header />
      <ProductDetails/>
      <Banner />
      <NewArrival />
      <Discount />
      <MenCollection />
      <div className="md:hidden block"><WomenCollection/></div>
      <BigDeal/>
      <Contact />
    </div>
  );
}
