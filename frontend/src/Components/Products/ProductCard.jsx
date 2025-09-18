import { Link } from "react-router-dom";
import CurrencyFormater from "../CurrencyFormater/CurrencyFormater";
import Rating from "@mui/material/Rating";
import { useContext } from "react";
import { dataContext } from "../DataProvider/DataProvider";
import {Type} from '../Utils/action.type'


const ProductCard = ({ product, flex, description, renderAdd, smallImg }) => {
  const [{ cart }, dispatch] = useContext(dataContext);

  const addToCart = () => {
    dispatch({
      type: Type.ADD_TO_CART,
      item: product,
    });
  };

  return (
    <>
      <div
        className={`w-[200px] shadow-[0_0_10px_rgba(0,0,0,0.2)] p-[10px] relative text-black no-underline group ${
          flex
            ? "shadow-none h-[50vh] flex flex-col md:flex-row md:gap-[50px] w-full"
            : ""
        }`}
      >
        <Link to={`/products/${product.id}`}>
          <img
            src={product.image}
            alt="product image"
            className={`p-[10px] w-[100%] contain-content h-[200px] ${
              flex && smallImg ?'w-[100px] h-auto' :flex? "w-[300px] h-auto" : ""
            }`}
          />
        </Link>

        <div>
          <h3 className={`font-bold ${flex ? "py-[20px] px-0" : ""}`}>
            {product.title}
          </h3>
          {description && (
            <p style={{ maxWidth: "750px" }}>{product.description}</p>
          )}
          <div className="flex items-center py-[10px]">
            {/* rating */}
            <Rating value={product.rating?.rate} precision={0.1} />
            {/* rating score */}
            <small>{product.rating?.count}</small>
          </div>
          <div>
            {/* price */}
            <CurrencyFormater amount={product.price} />
          </div>
          {renderAdd && (
            <button
              onClick={addToCart}
              className={` group-hover:block py-[5px] px-[10px] font-bold cursor-pointer border-none bg-primary-color my-[10px] absolute bottom-0 left-0 rounded-4xl hover:bg-primary-shade ${
                flex ? "block static w-36 mr-[40px]" : "hidden w-full"
              }`}
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductCard;
