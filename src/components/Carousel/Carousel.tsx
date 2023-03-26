import { useState, useEffect } from "react";
import styled from "styled-components";
import { IData } from "../../types/index";
import SlideImage from "./SlideImage";
import ProgessIndicatorDots from "./ProgressIndicatorDots";
import SlideInfo from "./SlideInfo";
import Loading from "./Loading";

const CarouselContainer = styled.div`
  text-align: center;
  margin: 0 auto;
  min-width: -webkit-fill-available;
`;

const Carousel = (props: IData): JSX.Element => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [showImg, setShowImg] = useState<boolean>(true);
  const [loaded, setLoaded] = useState<boolean>(false);
  const loadingText = "Woof! Woof! Wait...";

  const next = (): void => {
    setShowImg(false);
    setTimeout((): void => {
      const lastSlide: boolean = currentIndex === props.items.length - 1;
      const newIndex: number = lastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
      setShowImg(true);
    }, 200);
  };

  const selectSlide = (slideIndex: number) => {
    setShowImg(false);
    setTimeout((): void => {
      setCurrentIndex(slideIndex);
      setShowImg(true);
    }, 200);
  };

  useEffect((): void => {
    setTimeout(() => {
      selectSlide(0);
      setLoaded(true);
    }, 1000);
  }, []);

  return (
    <CarouselContainer>
      {loaded && (
        <>
          <SlideImage
            next={next}
            showImg={showImg}
            items={props.items}
            currentIndex={currentIndex}
          />

          <ProgessIndicatorDots
            currentIndex={currentIndex}
            items={props.items}
            selectSlide={selectSlide}
          />

          <SlideInfo
            next={next}
            showImg={showImg}
            items={props.items}
            currentIndex={currentIndex}
          />
        </>
      )}
      {!loaded && <Loading text={loadingText} />}
    </CarouselContainer>
  );
};

export default Carousel;
