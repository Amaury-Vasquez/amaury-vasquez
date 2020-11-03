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
  @media screen and (max-width: 500px) {
    display: grid;
    grid-template-columns: 1fr;
    height: auto;
    margin-top: 3vh;
  }
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
  @media screen and (max-width: 500px) {
    width: 100%;
    justify-content: space-evenly;
    & > * {
      margin: 0;
      margin-top: 2vh;
    }
  }
`;

export const P = styled.p`
  color: #212121;
  font-size: 16px;
  margin-left: 5vw;
  @media screen and (max-width: 500px) {
    margin: 0;
    margin-top: 3vh;
    text-align: center;
    grid-row: 2;
  }
`;
