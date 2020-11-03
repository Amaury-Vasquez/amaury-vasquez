import styled from "styled-components";

export const Div = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  position: fixed;
  background-color: #e5e5e5;
`;

export const Ul = styled.ul`
  display: flex;
  width: 90vw;
  padding: 20px;
  @media screen and (max-width: 500px) {
    width: 100vw;
    padding: 10px;
    justify-content: space-around;
  }
`;

export const Li = styled.li`
  margin-right: 2vw;
  text-transform: uppercase;
  font-size: 16px;
  /* padding: 5px; */
  &:hover {
    cursor: pointer;
    color: #0d7377;
  }
  @media screen and (max-width: 500px) {
    font-size: 16px;
  }
`;
