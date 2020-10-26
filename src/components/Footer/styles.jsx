import styled from "styled-components";

export const Footer = styled.footer`
  width: 100vw;
  height: 10vh;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  justify-content: space-between;
`;

export const P = styled.p`
  margin-left: 5vw;
  color: "#2d4059";
  letter-spacing: 1px;
  font-style: italic;
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
