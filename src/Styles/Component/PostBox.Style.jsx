import styled from "styled-components";

export const Box = styled.div`
  background-color: #fff;
  border: 1px solid rgb(0, 0, 0, 0.1);
  border-radius: 12px;
  overflow: hidden;
  transition: all 300ms ease-in-out;

  &:hover {
    border: 1px solid rgb(0, 0, 0, 0.4);
    box-shadow: 0 6px 4px 0 rgb(0, 0, 0, 0.1);
  }
`;

export const MiniContainer = styled.div`
  padding: 10px 20px 30px;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

export const Image = styled.img`
  height: 250px;
  width: 100%;
  object-fit: cover;
  border-radius: 5px;

  @media screen and (max-width: 540px) {
    height: 200px;
  }
`;

export const Title = styled.h2`
  font-size: 1.6rem;
  color: #444;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    color: #222;
  }
`;

export const Paragrapgh = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  color: #777;
  text-align: justify;
`;

export const Time = styled.h3`
  font-family: "Roboto", sans-serif;
  color: #555;
  font-size: 1rem;
`;
