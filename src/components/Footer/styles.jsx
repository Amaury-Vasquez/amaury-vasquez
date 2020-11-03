import styled from "styled-components";

export const Footer = styled.footer`
  width: 100vw;
  height: 10vh;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  justify-content: space-between;
  /* position: fixed;
  top: 0; */
  background-color: #e5e5e5;
  /* margin-top: 5vh; */
`;

export const IconsContainer = styled.div`
  display: flex;
  width: 30%;
  align-items: center;
  justify-content: center;
  height: 100%;
  & > * {
    margin-left: 30px;
  }
`;

export const P = styled.p`
  color: #212121;
  font-size: 16px;
  margin-left: 5vw;
`;
