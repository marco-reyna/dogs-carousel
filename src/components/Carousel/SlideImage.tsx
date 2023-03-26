import styled from "styled-components";
import { IContent } from "../../types/index";

const Container = styled.div`
  alignitems: center;
  cursor: pointer;
`;

const Img = styled.img`
  width: 100%;
  height: auto;
  transition: 0.2s;
  opacity: 0;
  &.load {
    opacity: 1;
  }
`;

const SlideImage = (props: IContent): JSX.Element => {
  return (
    <Container onClick={props.next}>
      <Img
        src={props.items[props.currentIndex].img}
        className={props.showImg ? "load" : ""}
      />
    </Container>
  );
};

export default SlideImage;
