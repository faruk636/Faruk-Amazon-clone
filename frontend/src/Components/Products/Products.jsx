import { useEffect, useState } from "react"
import axios from 'axios'
import ProductCard from "./ProductCard"
import Loader from "../Loader/Loader"


const Products = () => {
    const [products,setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    
    useEffect(()=>{
      setIsLoading(true);
        const fetchProducts = async ()=>{
            try {
                const { data } = await axios.get("https://fakestoreapi.com/products");
                setProducts(data);
                setIsLoading(false);

            } catch (error) {
                console.log(error)
                setIsLoading(false);
            }
        }

        fetchProducts();
    },[])

  return (
   <>
   {
    isLoading ? <Loader/> : (<section className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] max-w-[1450px] gap-[50px] my-[100px] ml-6">
      {products?.map((singleProduct) => {
        return (
          <ProductCard
            product={singleProduct}
            key={singleProduct.id}
            renderAdd={true}
          />
        );
      })}
    </section>)
   }
   
   </>
    
  );
}

export default Products