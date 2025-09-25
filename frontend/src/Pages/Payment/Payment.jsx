import LayOut from "../../Components/LayOut/LayOut";
import { dataContext } from "../../Components/DataProvider/DataProvider";
import { useContext, useState } from "react";
import {useNavigate} from 'react-router-dom'
import ProductCard from "../../Components/Products/ProductCard";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import CurrencyFormater from "../../Components/CurrencyFormater/CurrencyFormater";
import {axiosInstance} from '../../Components/Api/axios'
import {ClipLoader} from 'react-spinners'
import {db} from '../../Components/Utils/firebase'
import {collection, doc, setDoc } from "firebase/firestore";
import {toast} from 'react-toastify'
import { Type } from "../../Components/Utils/action.type";

const Payment = () => {
  const [cardError, setCardError] = useState("");
  const [{ user, cart },dispatch] = useContext(dataContext);
  const [loading,setLoading] = useState(false)

  const navigate = useNavigate()

  const stripe = useStripe();
  const elements = useElements();

  const totalCart = cart.reduce((amount, value) => value.amount + amount, 0);
  const cartTotal = cart.reduce(
    (amount, value) => value.price * value.amount + amount,
    0
  );

  const handleChange =(e) => {
    e?.error?.message ? setCardError(e?.error?.message) : setCardError("");
  };

  const handlePayment =async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    // step 1: getting the client secret from the backend
   try {
 

      setLoading(true)
      const { data } = await axiosInstance.post(`/payment/create?amount=${cartTotal*100}`);
    // console.log(data)
   const clientSecret = data?.client_secret;

    // console.log(clientSecret)

    // step 2: confirming the payment from react
    const { paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    }); 
    // console.log(paymentIntent);

    // saving the data to firstore database and emptying the cart
    const userDocRef = doc(db, "user", user?.uid);
    const orderDocRef = doc(collection(userDocRef, "orders"), paymentIntent?.id);

    await setDoc(orderDocRef, {
      cart: cart,
      amount: paymentIntent.amount /100,
      created: paymentIntent.created,
    });

    toast.success("Order saved successfully!");
    dispatch({
      type:Type.EMPTY_CART
    })
    

    setLoading(false);

    navigate("/orders",{state:{mesg:"you have placed new order"}});
  } catch (error) {
    console.log(error)
    toast.error(error.message)
    setCardError(error.message)
    setLoading(false);
   }
    
  };

  return (
    <LayOut>
      {cart.length > 0 ? (
        <div className=" bg-white mb-5 rounded-md shadow-sm space-y-6">
          {/* Header */}
          <h1 className="text-2xl font-semibold py-6 text-center bg-gray-200 w-full">
            Checkout ({totalCart}) items
          </h1>
          <div className="max-w-6xl mx-auto">
            {/* Delivery Address */}
            <div className="space-y-2 border-b p-4 flex flex-col md:flex-row justify-around items-center">
              <h3 className="text-lg font-semibold">Delivery Address</h3>
              <div className="text-gray-700 text-sm space-y-1">
                <p>{user?.email}</p>
                <p>123 React Lane</p>
                <p>Addis Ababa, Ethiopia</p>
              </div>
            </div>

            {/* Products */}
            <div className="space-y-4 border-b p-4 flex flex-col md:flex-row justify-around">
              <h3 className="text-lg font-semibold">
                Review items and delivery
              </h3>
              <div className="space-y-4">
                {cart?.map((item, index) => (
                  <ProductCard
                    key={index}
                    product={item}
                    flex={true}
                    smallImg={true}
                  />
                ))}
              </div>
            </div>

            {/* Payment Methods */}
            <div className="space-y-4 p-4 flex flex-col md:flex-row justify-around">
              <h3 className="text-lg font-semibold">Payment Method</h3>
              <form className="space-y-4" onSubmit={handlePayment}>
                <CardElement
                  className="p-3 border rounded-md min-w-[420px]"
                  onChange={handleChange}
                />
                {cardError && (
                  <p className="text-red-600 text-sm">{cardError}</p>
                )}

                <div className="flex gap-2.5 text-gray-700 text-sm font-medium">
                  <p>Total Order |</p>
                  <span className="font-semibold text-black">
                    <CurrencyFormater amount={cartTotal} />
                  </span>
                </div>

                <button
                  type="submit"
                  className="w-full md:w-auto bg-primary-color hover:bg-primary-shade text-black font-semibold py-2 px-6 rounded-md shadow-md transition cursor-pointer"
                >
                  {loading? (<div className="flex gap-2.5 justify-center"><ClipLoader size={15} color="#111"/> <span>Please wait...</span></div>):"Pay now"}
                </button>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-10">
          <h1 className="text-xl font-semibold text-gray-600">
            Your cart is empty
          </h1>
        </div>
      )}
    </LayOut>
  );
};

export default Payment;
