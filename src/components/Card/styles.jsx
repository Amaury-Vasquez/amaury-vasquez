import styled from "styled-components";

import { fadeIn } from "../../styles/animation";

export const Div = styled.div`
  display: block;
  background-color: #eeeeee;
  box-sizing: border-box;
  padding: 10px;
  &:hover {
    cursor: pointer;
  }
`;

export const Image = styled.img`
  ${fadeIn()}
  width: 100%;
  height: auto;
`;

export const Title = styled.h3`
  font-size: 20px;
  margin-top: 1vh;
  color: #212121;
`;

export const Description = styled.p`
  font-size: 16px;
  margin-top: 0.5vh;
  color: #212121;
`;
