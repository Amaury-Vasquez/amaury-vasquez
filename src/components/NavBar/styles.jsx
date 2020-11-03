import styled from "styled-components";

export const Div = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  position: fixed;
  background-color: #e5e5e5;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

export const Ul = styled.ul`
  display: flex;
  width: 90vw;
  padding: 20px;
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
`;
