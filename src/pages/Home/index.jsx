import React, { useRef } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { FaHandPeace, FaReact, FaChess } from "react-icons/fa";
import { SiPlatzi } from "react-icons/si";
import { GiSoccerBall } from "react-icons/gi";

import { Card } from "../../components/Card";
import {
  Welcome,
  Content,
  Greet,
  Image,
  Article,
  P,
  Projects,
  Title,
  CardContainer,
} from "./styles";

export const Home = () => {
  const ref = useRef(null);
  return (
    <React.Fragment>
      <Content>
        <Welcome>
          <Article>
            <Greet>
              {"Hola"}
              <FaHandPeace color={"#fdddca "} />,
              {
                " mi nombre es Amaury Vasquez, soy desarrollador web y un apasionado de la tecnología."
              }
            </Greet>{" "}
            <br />
            <P>
              {"Desarrollador React  "} <FaReact color={"#0d7377"} /> <br />
              Estudiante activo en Platzi <SiPlatzi
                color={"#83b03d"}
              /> <br /> Ajedrecista <FaChess color={"#f5e6bf"} /> <br />{" "}
              Futbolista <GiSoccerBall color="#a63347" />
            </P>
          </Article>
          <Image src="https://i.imgur.com/5QwcgnG.jpg" alt="Amaury Vasquez" />
        </Welcome>
      </Content>
      <Projects>
        <AiOutlineDown
          onClick={() => {
            window.scrollTo({
              top: ref.current.offsetTop,
              behavior: "smooth",
            });
          }}
          color={"#212121"}
        />
        <Title ref={ref}>Proyectos</Title>
        <CardContainer>
          <Card
            url="https://i.imgur.com/znUVjQO.png"
            alt="memorama"
            title="Memorama Pokemon"
            description="Juego de memorama, creado usando React."
          ></Card>
          <Card
            url="https://i.imgur.com/znUVjQO.png"
            alt="memorama"
            title="Memorama Pokemon"
            description="Juego de memorama, creado usando React."
          ></Card>
          <Card
            url="https://i.imgur.com/znUVjQO.png"
            alt="memorama"
            title="Memorama Pokemon"
            description="Juego de memorama, creado usando React."
          ></Card>
          <Card
            url="https://i.imgur.com/znUVjQO.png"
            alt="memorama"
            title="Memorama Pokemon"
            description="Juego de memorama, creado usando React."
          ></Card>
        </CardContainer>
      </Projects>
    </React.Fragment>
  );
};
