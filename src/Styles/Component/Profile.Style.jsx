import styled from "styled-components";

export const Main = styled.div`
  margin: 140px 14%;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

export const Container = styled.div`
  padding: 50px 40px;
  border: 1px solid #d4d4d4;
  border-radius: 12px;
  box-shadow: 2px 4px 2px 0 rgb(0, 0, 0, 0.08);
`;

export const Box = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.$pattern ? "column" : "row")};
  align-items: ${(props) => (props.$centerize ? "center" : "flex-start")};
  justify-content: ${(props) =>
    props.$justify ? props.$justify : "flex-start"};
  column-gap: 20px;
  /* border: 1px solid #222; */
  min-width: ${(props) => (props.$customWidth ? "100%" : "auto")};
`;

export const Underline = styled.div`
  height: 2px;
  width: 100%;
  background-color: #d4d4d4;
  border-radius: 10px;
`;

export const Image = styled.div`
  height: 120px;
  width: 120px;
  border-radius: 50%;
  border: 2px solid #666;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Poppins", sans-serif;
  font-size: 2rem;
  color: #666;
  cursor: default;
`;

export const Title = styled.h1`
  font-size: 1.8rem;
  color: #333;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
`;

export const SubTitle = styled.h3`
  color: #555;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  min-width: ${(props) => (props.$listStyle ? "60%" : "auto")};
`;

export const Text = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: ${(props) => (props.$customSize ? "1.2rem" : "1rem")};
  color: #333;
`;

export const List = styled.div`
  padding: 24px 40px;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;
