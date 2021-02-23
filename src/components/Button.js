import React from "react";
import styled from "styled-components";

const getStyle = (type) => {
  if (type === "primary") {
    return `
      border-radius: 30px;
      background: #01B3D7;
      color: #FFFFFF;      

      &:hover {
        background: #0078B7;
        color: #ffffff;
        transition-duration: 0.3s;
      }
    
      &:active {
        background: #92DFEF;
      }
    `;
  }
  if (type === "secondary") {
    return `
      background: #ffffff;
      color: #03045e;
      border: 1px solid #03045e;
      border-radius: 30px;

      &:hover {
        background: #555687;
        color: #ffffff;
        box-shadow: 0 6px 50px #555687;
      }
    
      &:active {
        background: #f0f0ff;
        color: #03045E;
      }
    `;
  }
};

const getSize = (size) => {
  if (size === "sm") {
    return`
      width: 160px;
      height: 39px;

      font-family: "Poppins", sans-serif;
      font-weight: bold;
      font-size: 15px;
      line-height: 22px;
      text-decoration: none;
    `;
  }
  if (size === "md") {
    return`
      width: 218px;
      height: 39px;

      font-family: "Poppins", sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 15px;
      line-height: 22px;
      text-decoration: none;
    `;
  }
  if (size === "lg") {
    return`
      width: 235px;
      height: 51px;

      font-family: "Poppins", sans-serif;
      font-weight: bold;
      font-size: 18px;
      line-height: 27px;
      text-decoration: none;
    `;
  }
  if (size === "bg") {
    return`
      width: 366px;
      height: 51px;

      font-family: Poppins;
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: 27px;
    `;
  }
};

const ButtonStyle = styled.button`
  border: none;
  cursor: pointer;
  ${(props) => getStyle(props.type)};
  ${({ size }) => getSize(size)};

  //assim também funciona, e é mais curto
  // ${({ type }) => getStyle(type)};
`;

const Button = ({ children, round, size, type }) => (
  <ButtonStyle round={round} size={size} type={type}>
    {children}
  </ButtonStyle>
);

export default Button;
