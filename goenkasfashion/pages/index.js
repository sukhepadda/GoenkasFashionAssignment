import Awards from "@/components/homeComponents/Awards";
import CustomerReview from "@/components/homeComponents/CustomerReview";
import FeaturedProduct from "@/components/homeComponents/FeaturedProduct";
import Header from "@/components/homeComponents/Header";
import LadiesProductCategory from "@/components/homeComponents/LadiesProductCategory";
import MensProductCategory from "@/components/homeComponents/MensProductCategory";
import ProductCompanies from "@/components/homeComponents/ProductCompanies";

export default function Home() {
  return (

    <div className='flex flex-col bg-red-400'>
     <Header />
     <LadiesProductCategory />
     <FeaturedProduct />
     <ProductCompanies />
     <MensProductCategory />
     <ProductCompanies />
     <CustomerReview />
     <Awards />

    </div>
  )
}
