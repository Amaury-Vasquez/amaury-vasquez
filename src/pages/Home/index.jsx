import React, { useRef } from "react";
import { FaHandPeace, FaReact, FaChess } from "react-icons/fa";
import { SiPlatzi } from "react-icons/si";
import { GiSoccerBall } from "react-icons/gi";

import { Card } from "../../components/Card";
import { NavBar } from "../../components/NavBar";

import {
  Welcome,
  Content,
  Greet,
  Image,
  Article,
  P,
  Container,
  Title,
  CardContainer,
  Contact,
  ContactText,
} from "./styles";

export const Home = () => {
  const welcome = useRef(null),
    projects = useRef(null),
    about = useRef(null),
    contact = useRef(null);
  const sections = [
    { name: "Inicio", ref: welcome },
    { name: "Proyectos", ref: projects },
    { name: "Sobre mi", ref: about },
    { name: "contacto", ref: contact },
  ];

  return (
    <React.Fragment>
      <NavBar sections={sections} />
      <Content>
        <Welcome ref={welcome}>
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
              Futbolista <GiSoccerBall color="#32e0c4" />
            </P>
          </Article>
          <Image src="https://i.imgur.com/5QwcgnG.jpg" alt="Amaury Vasquez" />
        </Welcome>
      </Content>
      <Container ref={projects}>
        <Title>Proyectos</Title>
        <CardContainer>
          <Card
            url="https://amauryvasquezblog.netlify.app/"
            src="https://i.imgur.com/gI5qP3s.png"
            alt="Blog"
            title="Blog personal"
            description="Blog creado para compartir mis pensamientos."
          />
          <Card
            url={"https://pokerama.netlify.app/"}
            src={"https://i.imgur.com/MfCafDP.png"}
            alt="Pokerama"
            title="Pokerama"
            description="Juego de memorama pokemon."
          />
          <Card
            url={"https://amaury-vasquez.github.io/rock-paper-scissors/"}
            src={"https://i.imgur.com/9urSYHg.png"}
            alt={"Piedra, Papel y Tijeras"}
            title={"Rock Paper Scissors"}
            description={"Juego clásico de piedra, papel y tijeras."}
          />
        </CardContainer>
      </Container>
      <Content>
        <Container ref={about} inverted>
          <Welcome>
            <Article>
              <Title>{"Formación"} </Title>
              <P>
                {/* {"Estudiando Sistemas Computacionales en IPN."} <br /> */}
                {"Estudiante activo en Platzi."} <br />
                {"Autodidacta."} <br /> <br />
              </P>
              <Title> {"Habilidades"} </Title>
              <P>
                {"Me gusta aprender cosas nuevas todos los días."} <br />
                {"Conocimientos fuertes en JS, C/C++ y JAVA."} <br /> <br />
              </P>
              <Title> {"Aspiraciones."} </Title>
              <P>
                {"Especializarme en Inteligencia Artificial."} <br />
                {"Ganar un concurso de ACM."} <br /> <br />
              </P>
            </Article>
            <Article>
              <Title> {"Intereses"} </Title>
              <P>
                {"Apasionado ajedrecista."} <br />
                {"Deportista."} <br />
                {"Desarrollo web."} <br />
                {"Machine Learning."} <br /> <br />
              </P>
              <Title> {"Pensamientos"} </Title>
              <P>
                {
                  "Mi felicidad consiste en todos los días intentar ser mejor que quien era el día anterior."
                }{" "}
                <br />
                {"Hard work pays off."} <br /> <br />
              </P>
            </Article>
          </Welcome>
        </Container>
      </Content>
      <Contact ref={contact}>
        <ContactText>
          {"Buscame en redes o mandame un email para ponernos en contacto"}
        </ContactText>
      </Contact>
    </React.Fragment>
  );
};
