import { useParams } from "react-router-dom";
import LayOut from "../../Components/LayOut/LayOut";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../../Components/Products/ProductCard";
import Loader from "../../Components/Loader/Loader";

const Results = () => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { categoryType } = useParams();

  useEffect(() => {
    setIsLoading(true);
    const fetchResults = async () => {
      try {
        const { data } = await axios.get(
          `https://fakestoreapi.com/products/category/${categoryType}`
        );
        // console.log(data)
        setResults(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    fetchResults();
  }, []);

  console.log(results);
  return (
    <LayOut>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div>
            <h1 style={{ padding: "30px", fontWeight: "bold" }}>Results</h1>
            <p style={{ padding: "30px" }}>Category/ {categoryType}</p>
          </div>
          <hr />
          <section className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] max-w-[1450px] gap-[40px] my-[100px] ml-6">
            {results?.map((singleResults) => {
              return (
                <ProductCard
                  product={singleResults}
                  key={singleResults.id}
                  renderAdd={true}
                />
              );
            })}
          </section>
        </>
      )}
    </LayOut>
  );
};

export default Results;
