import { useEffect, useState } from "react"
import axios from 'axios'
import ProductCard from "./ProductCard"


const Products = () => {
    const [products,setProducts] = useState([])
    useEffect(()=>{
        const fetchProducts = async ()=>{
            try {
                const { data } = await axios.get("https://fakestoreapi.com/products");
                setProducts(data);

            } catch (error) {
                console.log(error)
            }
        }

        fetchProducts();
    },[])

  return (
    <section className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] max-w-[1450px] gap-[40px] my-[100px] ml-6">
      {products?.map((singleProduct) => {
        return <ProductCard product={singleProduct} key={singleProduct.id} />;
      })}
    </section>
  );
}

export default Products