import React from "react";
import styled from "styled-components";

const getWeight = (weight) => {
  if (weight === "normal") {
    return `
      font-family: Poppins;
      font-style: normal;
      font-weight: normal;
      `;
  }
  if (weight === "bold") {
    return `
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    `;
  }
};

const getSize = (size) => {
  if (size === "small") {
    return `
        font-size: 15px;
        line-height: 22px;
      `;
  }
  if (size === "big") {
    return `
        font-size: 18px;
        line-height: 27px;
      `;
  }
};

const ParagraphStyled = styled.p`
  ${({ weight }) => getWeight(weight)};
  ${({ size }) => getSize(size)};
  /* font-size: 18px; */
`;

function Paragraph({ children, weight, size }) {
  return (
    <ParagraphStyled weight={weight} size={size}>
      {children}
    </ParagraphStyled>
  );
}

export default Paragraph;
