import React from "react";
import { Link } from "react-router-dom";

import { Logo } from "../Logo";
import { HeaderContainer, Ul, Li } from "./styles";

export const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/">
        <Logo></Logo>
      </Link>
      <Ul>
        <Li> apuntes </Li>
        <Li> blog </Li>
        <Li> acerca </Li>
      </Ul>
    </HeaderContainer>
  );
};
