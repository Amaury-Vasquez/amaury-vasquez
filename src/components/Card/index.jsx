import React from "react";

import { Div, Image, Title, Description } from "./styles";

export const Card = ({ url, alt = "image", title = "", description = "" }) => {
  return (
    <a
      href="https://amaury-vasquez.github.io/memorama-pokemon/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Div>
        <Image src={url} alt={alt} />
        <Title> {title} </Title>
        <Description> {description} </Description>
      </Div>
    </a>
  );
};
