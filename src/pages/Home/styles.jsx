import styled from "styled-components";

export const Content = styled.div`
  min-height: 85vh;
  display: block;
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
  /* margin-bottom: 5vh; */
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
`;

export const Title = styled.h3`
  font-size: 30px;
  /* margin-top: 2vh; */
`;

export const Container = styled.div`
  /* border: 2px dotted #212121; */
  background-color: ${(props) => (props.inverted === true ? "#212121" : "")};
  border-top: none;
  /* border-bottom: none; */
  display: block;
  width: 90vw;
  height: auto;
  margin: 0 auto;
  margin-top: 2vh;

  & > h3 {
    text-align: center;
    margin-bottom: 2vh;
    color: ${(props) => (props.inverted === true ? "#eeeeee" : "#212121")};
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

Container.defaultProps = {
  inverted: false,
};

export const CardContainer = styled.div`
  margin: 0 auto;
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: center;
  width: 90vw;
  grid-gap: 1vw;
  min-height: 40vh;
  /* box-shadow: 3px 3px #212121; */
  border-bottom: none;
  border-top: none;
  height: auto;
  box-sizing: border-box;
`;

export const Contact = styled.div`
  display: flex;
  width: 90vw;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`;

export const ContactText = styled.p`
  margin-top: 3vh;
  font-size: 20px;
`;
