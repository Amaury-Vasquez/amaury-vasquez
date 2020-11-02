import styled from "styled-components";

export const Div = styled.div`
  display: block;
  /* background-color: #0d7377; */
  box-sizing: border-box;
  padding: 10px;
  &:hover {
    cursor: pointer;
  }
`;

export const Image = styled.img`
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
