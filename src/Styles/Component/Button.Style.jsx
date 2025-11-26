import styled from "styled-components";

const CommonButton = styled.button`
  padding: 14px 20px;
  border: none;
  border-radius: 6px;
  background-color: #0c96cc;
  color: #fff;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 1.05rem;
  letter-spacing: 0.5;
  cursor: pointer;
  transition: all 200ms ease-in-out;

  &:hover {
    background-color: #1259b6;
  }

  &:active {
    scale: 0.9;
  }
`;

export default CommonButton;
