import styled from "styled-components";

export const Content = styled.div`
  height: 85vh;
  display: block;
  justify-content: center;
  align-items: center;
  width: 100vw;
  box-sizing: border-box;
  background-color: #212121;
`;

export const Welcome = styled.div`
  width: 90vw;
  min-height: 90vh;
  height: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  box-sizing: border-box;
  padding: 20px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const Article = styled.article`
  width: 100%;
  height: auto;
  color: #eeeeee;
`;

export const Greet = styled.h3`
  font-size: 30px;
`;

export const P = styled.p`
  font-size: 22px;
  line-height: 35px;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
`;

export const Title = styled.h3`
  font-size: 30px;
`;

export const Projects = styled.div`
  display: block;
  width: 100vw;
  height: auto;

  & > h3 {
    text-align: center;
    margin-top: 2vh;
    margin-bottom: 2vh;
    color: #212121;
  }

  & > svg {
    font-size: 32px;
    cursor: pointer;
    display: flex;
    margin: 0 auto;
    margin-top: 0.5vh;
  }
  & > svg:hover {
    font-size: 36px;
  }
`;

export const CardContainer = styled.div`
  margin: 0 auto;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: center;
  width: 90vw;
  grid-gap: 1vw;
  min-height: 40vh;
  border: 2px dotted #212121;
  border-bottom: none;
  border-top: none;
  height: auto;
  box-sizing: border-box;
`;
