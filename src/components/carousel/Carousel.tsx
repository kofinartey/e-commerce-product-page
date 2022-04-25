import { useEffect, useState } from "react";
import styles from "./Carousel.module.css";
import leftArrow from "../../assets/images/icon-previous.svg";
import rightArrow from "../../assets/images/icon-next.svg";

const images = [
  {
    id: 1,
    imgSrc: "/images/image-product-1.jpg",
    thumbnail: "/images/image-product-1-thumbnail.jpg",
  },
  {
    id: 2,
    imgSrc: "/images/image-product-2.jpg",
    thumbnail: "/images/image-product-2-thumbnail.jpg",
  },
  {
    id: 3,
    imgSrc: "/images/image-product-3.jpg",
    thumbnail: "/images/image-product-3-thumbnail.jpg",
  },
  {
    id: 4,
    imgSrc: "/images/image-product-4.jpg",
    thumbnail: "/images/image-product-4-thumbnail.jpg",
  },
];

function Carousel() {
  const [carouselPosition, setCarouselPosition] = useState(1);
  const shiftPrev = () => {
    if (carouselPosition === 1) {
      setCarouselPosition(4);
    } else {
      setCarouselPosition((curState) => curState - 1);
    }
  };

  const shiftNext = () => {
    if (carouselPosition === 4) {
      setCarouselPosition(1);
    } else {
      setCarouselPosition((curState) => curState + 1);
    }
  };

  const leftStyles = () => {
    switch (carouselPosition) {
      case 1:
        return 0;
      case 2:
        return -100;
      case 3:
        return -200;
      case 4:
        return -300;
      default:
        return 0;
    }
  };

  //   useEffect(() => {
  //     lef;
  //   });

  return (
    <div className={styles.carousel}>
      <div className={styles.wrapper}>
        <div className={styles.window}>
          {/* carousel buttons */}
          <div className={styles.buttonWrapper}>
            <div className={styles.arrow} onClick={shiftPrev}>
              <img src={leftArrow} alt="previous button" />
            </div>
            <div className={styles.arrow} onClick={shiftNext}>
              <img src={rightArrow} alt="next button" />
            </div>
          </div>
          <div
            className={styles.imagesWrapper}
            style={{ left: `${leftStyles()}%` }}
          >
            {images.map((image) => (
              <img
                className={styles.image}
                key={image.id}
                src={process.env.PUBLIC_URL + `${image.imgSrc}`}
                alt={`${image.id}`}
              />
            ))}
          </div>
        </div>

        <div className={styles.thumbnailWrapper}>
          {images.map((image) => (
            <img
              src={process.env.PUBLIC_URL + `${image.thumbnail}`}
              className={styles.thumbnail}
              style={
                carouselPosition === image.id
                  ? {
                      border: "0.2rem solid hsl(26, 100%, 55%)",
                      opacity: "0.5",
                    }
                  : {}
              }
              key={image.id}
              onClick={() => {
                setCarouselPosition(image.id);
              }}
              alt={`thumbnail ${image.id}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
