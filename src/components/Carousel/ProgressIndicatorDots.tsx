import styled, { css } from "styled-components";
import { IProgressIndicatorDots } from "../../types/index";

const ProgressIndicatorDotsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 140px;
  margin: 0 auto;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const ProgressIndicatorDots = styled.div<{ currentSlide: boolean }>`
  cursor: pointer;
  font-size: 8px;
  color: #a2bed5;
  width: 29px;
  height: 29px;
  display: flex;
  justify-content: center;
  vertical-align: middle;
  ${(p) =>
    p.currentSlide !== true &&
    css`
      color: #ff816a;
      border: 1px solid #ff816a;
      border-radius: 50%;
    `}
`;

const Dot = styled.span`
  width: 5px;
  height: 9px;
  margin: auto 0;
`;

const ProgessIndicatorDots = (props: IProgressIndicatorDots): JSX.Element => {
  return (
    <ProgressIndicatorDotsContainer>
      {props.items.map((slide, slideIndex: number) => (
        <ProgressIndicatorDots
          key={slideIndex}
          currentSlide={props.currentIndex !== slideIndex ? true : false}
          onClick={() => props.selectSlide(slideIndex)}
        >
          <Dot>●</Dot>
        </ProgressIndicatorDots>
      ))}
    </ProgressIndicatorDotsContainer>
  );
};

export default ProgessIndicatorDots;
