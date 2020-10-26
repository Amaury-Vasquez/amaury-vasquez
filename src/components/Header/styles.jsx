import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 10vh;
  background-color: #2d4059;
  display: grid;
  grid-template-columns: 1fr 1fr;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  letter-spacing: 1px;
`;

export const Ul = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  /* background-color: rebeccapurple; */
  color: #e5e5e5;
  font-size: 18px;
  cursor: pointer;
  text-transform: capitalize;
  font-style: italic;
  font-weight: bold;
`;

export const Li = styled.li`
  padding: 5px;
  &:hover {
    color: #decdc3;
    border-bottom: 1px solid #decdc3;
  }
`;
