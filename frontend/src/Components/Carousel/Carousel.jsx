import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {img} from './img/data'
import classes from './carousel.module.css'

const CarouselEffect = () => {
  return (
    <>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
        showStatus={false}
      >
        {img.map((imgItem) => {
          return <img src={imgItem} alt="carousel" />;
        })}
      </Carousel>
      <div className={classes.hero__img}></div>
      {/* { console.log(img)} */}
    </>
  );
};

export default CarouselEffect;
