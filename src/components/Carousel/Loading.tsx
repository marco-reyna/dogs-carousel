import styled from "styled-components";
import { ILoadingText } from "../../types/index";

const LoadingDiv = styled.div`
  font-family: "Nunito", sans-serif;
  font-size: 30px;
  text-align: center;
  color: #3a464f;
`;

const Loading = (props: ILoadingText): JSX.Element => {
  return <LoadingDiv>{props.text}</LoadingDiv>;
};

export default Loading;
