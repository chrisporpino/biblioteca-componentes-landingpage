import React from "react";
import styled from "styled-components";

const getType = (props) => {
  switch (props.type) {
    case "h1":
      return <H1>{props.text}</H1>;
    case "h2":
      return <H2>{props.text}</H2>;
    case "h3":
      return <H3>{props.text}</H3>;
    case "h4":
      return <H4>{props.text}</H4>;
    case "h5":
      return <H5>{props.text}</H5>;
    case "h6":
      return <H6>{props.text}</H6>;
    default :
      return <></>
  }
};

const H1 = styled.h1`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 51px;
  line-height: 56px;

  display: flex;
  align-items: center;
  text-align: center;

  color: #000000;
`;

const H2 = styled.h2`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 45px;
  line-height: 50px;

  display: flex;
  align-items: center;
  text-align: center;

  color: #000000;
`;

const H3 = styled.h3`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 38px;
  line-height: 46px;

  display: flex;
  align-items: center;
  text-align: center;

  color: #000000;
`;

const H4 = styled.h4`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 35px;
  line-height: 40px;

  display: flex;
  align-items: center;
  text-align: center;

  color: #000000;
`;

const H5 = styled.h5`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 45px;

  display: flex;
  align-items: center;
  text-align: center;

  color: #000000;
`;

const H6 = styled.h6`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 21px;
  line-height: 31px;

  display: flex;
  align-items: center;
  text-align: center;

  color: #000000;
`;

function Heading(props) {
  return <>{getType(props)}</>;
}

export default Heading;
