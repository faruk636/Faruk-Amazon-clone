import { useContext, useEffect } from "react";
import LayOut from "../../Components/LayOut/LayOut";
import { dataContext } from "../../Components/DataProvider/DataProvider";
import { useState } from "react";
import { db } from "../../Components/Utils/firebase";
import {
  collection,
  query,
  orderBy,
  onSnapshot
} from "firebase/firestore";
import ProductCard from "../../Components/Products/ProductCard";

const Orders = () => {
  const [{ user }, dispatch] = useContext(dataContext);
  const [orders, setOrders] = useState([]);


  useEffect(() => {
    let unsubscribe; 

    const fetchUserOrders = async () => {
      try {
        if (user) {

          const ordersCollectionRef = collection(
            db,
            "user",
            user.uid,
            "orders"
          );
          const q = query(ordersCollectionRef, orderBy("created", "desc"));

          unsubscribe = onSnapshot(
            q,
            (querySnapshot) => {
              // console.log(querySnapshot);

 
              const orders = querySnapshot.docs.map(doc => ({ id: doc.id, data:doc.data() }));
              setOrders(orders); 
              console.log(orders)
            },
            (listenerError) => {
              console.error("Firestore listener error: ", listenerError);
            }
          );
        } else {
          console.log("No user logged in, not fetching orders.");
          setOrders([]);
        }
      } catch (setupError) {
        console.error("Error setting up Firestore listener: ", setupError);
      }
    };

    fetchUserOrders(); 

    // Return the cleanup function for useEffect
    // This ensures the listener is detached when the component unmounts or dependencies change
    return () => {
      if (unsubscribe) {
        unsubscribe();
        console.log("Firestore listener unsubscribed.");
      }
    };
  }, [user]);

  return (
    <LayOut>
      <div className="bg-[#efeeee] p-8">
        <div className="p-5 bg-[#fff]">
          <h2 className="p-5 border-b-2 border-b-primary-shade font-semibold text-3xl">
            Your Orders
          </h2>
          <div>
            {
              orders?.map((eachOrder)=>{

                return(
                  <div key={eachOrder.id}>
                    <hr  className="h-0.5 bg-gray-600 my-1.5"/>
                    <p>Order Id : {eachOrder?.id}</p>
                    {
                      eachOrder?.data?.cart.map((orderData)=>{

                        return <ProductCard product={orderData} flex={true} smallImg={true} className='w-full'/>;

                      })
                    }

                  </div>
                )

              })
            }
          </div>
        </div>
      </div>
    </LayOut>
  );
};

export default Orders;
