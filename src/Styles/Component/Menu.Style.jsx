import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const Heading = styled.h1`
  font-size: 1.4rem;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  color: #333;
`;

export const Order = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 6px;
`;

export const List = styled.li`
  font-size: 1.05rem;
  font-family: "Roboto", sans-serif;
  color: #555;
  padding: 2px 0;
  list-style: none;
  cursor: pointer;
  transition: all 200ms ease-in-out;

  &:hover {
    margin-left: 10px;
    color: #333;
    text-decoration: underline;
  }
`;
