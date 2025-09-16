import CurrencyFormater from "../CurrencyFormater/CurrencyFormater"
import Rating from '@mui/material/Rating'

const ProductCard = ({product}) => {
  return (
    <>
      <div className="w-[200px] shadow-[0_0_10px_rgba(0,0,0,0.2)] p-[10px] relative text-black no-underline group">
        <img src={product.image} alt="product image" className="p-[10px] w-[100%] contain-content h-[200px]" />
        <div>
          <h3 className="">{product.title}</h3>
          <div className="flex items-center py-[10px]">
            {/* rating */}
            <Rating value={product.rating.rate} precision={0.1} />
            {/* rating score */}
            <small>{product.rating.count}</small>
          </div>
          <div>
            {/* price */}
            <CurrencyFormater amount={product.price} />
          </div>
          <button className="hidden group-hover:block py-[5px] px-[10px] font-bold cursor-pointer border-none bg-primary-color w-full my-[10px] absolute bottom-0 left-0 rounded-4xl hover:bg-primary-shade">Add to Cart</button>
        </div>
      </div>
    </>
  );
}

export default ProductCard