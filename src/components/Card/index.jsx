import React from "react";

import { Div, Image, Title, Description } from "./styles";

export const Card = ({
  url = "",
  src = "",
  alt = "image",
  title = "",
  description = "",
}) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <Div>
        <Image src={src} alt={alt} />
        <Title> {title} </Title>
        <Description> {description} </Description>
      </Div>
    </a>
  );
};
