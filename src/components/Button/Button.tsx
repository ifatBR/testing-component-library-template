import React from "react";
import styled from "styled-components";
// import "./Button.scss";

export interface ButtonProps {
  label: string;
}

// const StyledButton = styled.button`
//   color: palevioletred;
//   font-size: 1em;
//   margin: 1em;
//   padding: 0.25em 1em;
//   border: 2px solid palevioletred;
//   border-radius: 3px;
// `;

const Button = (props: ButtonProps) => {
  return <button>{props.label}</button>;
};
// const Button = (props: ButtonProps) => {
//   return <StyledButton>{props.label}</StyledButton>;
// };

export default Button;
