import styled from "styled-components";
import { IContent } from "../../types/index";

const Container = styled.div`
  max-width: 430px;
  margin: 0 auto;
  transition: 0.2s;
  opacity: 0;
  transform: translateX(-50px);
  cursor: pointer;
  &.load {
    opacity: 1;
    transform: translateX(0px);
  }
`;

const Heading = styled.h3`
  font-family: "Nunito";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  letter-spacing: 1.5px;
  color: #3a464f;
`;

const BodyText = styled.p`
  font-family: "Nunito";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.35px;
  color: #3a464f;
  opacity: 0.8;
`;

const SlideInfo = (props: IContent): JSX.Element => {
  return (
    <Container className={props.showImg ? "load" : ""} onClick={props.next}>
      <Heading>{props.items[props.currentIndex].heading}</Heading>
      <BodyText>{props.items[props.currentIndex].bodyText}</BodyText>
    </Container>
  );
};

export default SlideInfo;
