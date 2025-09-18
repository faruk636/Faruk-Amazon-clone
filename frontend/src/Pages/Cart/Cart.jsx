import { useContext } from "react";
import LayOut from "../../Components/LayOut/LayOut";
import { dataContext } from "../../Components/DataProvider/DataProvider";
import ProductCard from "../../Components/Products/ProductCard";
import CurrencyFormater from "../../Components/CurrencyFormater/CurrencyFormater";
import { Link } from "react-router-dom";

const Cart = () => {
  const [{ cart }, dispatch] = useContext(dataContext);

  const cartTotal= cart.reduce((amount,value)=>{
    return value.price + amount
  },0)

  return (
    <LayOut>
      <section className="flex flex-col md:flex-row order-1 justify-center gap-5 m-5">
        {/* cart div */}
        <div className="p-5 flex-1">
          <h2 className="p-2.5 text-2xl font-semibold">Hello</h2>
          <h3 className="p-2.5 text-xl font-medium">Your shopping basket</h3>
          <hr className="m-2.5" />
          <div className="flex flex-col gap-20">
            {cart?.length === 0 ? (
              <p>Oops you cart is empty</p>
            ) : (
              cart?.map((item, i) => (
                <ProductCard
                  key={i}
                  product={item}
                  flex={true}
                  description={true}
                  renderAdd={false}
                  smallImg={true}
                />
              ))
            )}
          </div>
        </div>
        {/* subtotal div */}

        {cart.length !== 0 && (
          <div className="p-5 min-w-[300px] h-[80%] flex flex-col gap-5 items-center border-[1px] border-[rgb(193,193,193)] bg-[rgb(242,242,241)] rounded-[5px]">
            <div className="flex gap-5">
              <p>Subtotal ({cart?.length} items)</p>
              <CurrencyFormater amount={cartTotal} />
            </div>
            <div className="flex gap-3">
              <input type="checkbox" />
              <small>This order contains a gift</small>
            </div>
            <Link
              to="/payments"
              className="text-center w-full border-0 bg-primary-color rounded-[5px] text-black py-1.5 px-2.5 hover:bg-primary-shade"
            >
              Continue to checkout
            </Link>
          </div>
        )}
      </section>
    </LayOut>
  );
};

export default Cart;
