import CarouselEffect from "../../Components/Carousel/Carousel";
import Category from "../../Components/Category/Category";
import Header from "../../Components/Header/Header";
import LayOut from "../../Components/LayOut/LayOut";
import Products from "../../Components/Products/Products";

const Landing = () => {
  return (
    <>
      <LayOut>
        <CarouselEffect />
        <Category />
        <Products />
      </LayOut>
    </>
  );
};

export default Landing;
