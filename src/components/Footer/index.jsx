import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

import { Footer as FooterContainer, IconsContainer, P } from "./styles";

export const Footer = () => {
  return (
    <FooterContainer>
      <P> amaury.vasquezenriquez@gmail.com </P>
      <IconsContainer>
        <a
          style={{ color: "#3b5998" }}
          href="https://www.facebook.com/amaury.vasquezenriquez/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaFacebook size="32" />
        </a>
        <a
          style={{ color: "#00acee" }}
          href="https://twitter.com/AmauryVasquez11"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaTwitter size="32" />
        </a>
        <a
          style={{ color: "#E1306C" }}
          href="https://www.instagram.com/vasquezamaury/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaInstagram size="32" />
        </a>
        <a
          style={{ color: "#000000" }}
          href="https://github.com/Amaury-Vasquez"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaGithub size="32" />
        </a>
      </IconsContainer>
    </FooterContainer>
  );
};
