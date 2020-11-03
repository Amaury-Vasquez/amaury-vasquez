import React from "react";
import { Div, Ul, Li } from "./styles";

function scroll(ref) {
  window.scrollTo({
    top: ref.current.offsetTop - 60,
    behavior: "smooth",
  });
}

export const NavBar = ({ sections }) => {
  return (
    <Div>
      <Ul>
        {sections.map((element, i) => {
          return (
            <Li key={i} onClick={() => scroll(element.ref)}>
              {" "}
              {element.name}{" "}
            </Li>
          );
        })}
      </Ul>
    </Div>
  );
};
