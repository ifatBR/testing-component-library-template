import React, { useState } from "react";
import styled from "styled-components";
// import "./Button.scss";

export interface ButtonProps {
  label?: string;
  onClick?: () => void;
}

const StyledButton = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const Button = (props: ButtonProps) => {
  const [text, setText] = useState("remove me");
  props.label && props.label !== text && setText(props.label);
  return <StyledButton onClick={() => props.onClick && props.onClick()}>{text}</StyledButton>;
};

export default Button;
