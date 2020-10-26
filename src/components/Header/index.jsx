import React from "react";
import { Link } from "react-router-dom";
// import { FaBookOpen } from "react-icons/fa";

import { Logo } from "../Logo";
import { HeaderContainer, Ul, Li } from "./styles";

export const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/">
        <Logo />
      </Link>
      <Ul>
        <Li> apuntes </Li>
        <Li> blog </Li>
        <Li> acerca </Li>
      </Ul>
    </HeaderContainer>
  );
};
