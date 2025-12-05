import styled from "styled-components";

export const Container = styled.div`
  padding: 30px;
  background-color: #fff;
  border-radius: 6px;
  border: 1px solid #dadada;
  box-shadow: 0 4px 6px 0 rgb(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  margin: 140px 20%;

  @media screen and (max-width: 1000px) {
    margin: 140px 10%;
  }
  @media screen and (max-width: 767px) {
    margin: 140px 5%;
  }
  @media screen and (max-width: 580px) {
    margin: 140px 2%;
  }
`;

export const Title = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: 2rem;
  color: #333;
  text-align: center;
`;

export const FlexBox = styled.div`
  display: flex;
  gap: 20px;

  @media screen and (max-width: 580px) {
    flex-direction: column;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  width: 100%;
`;

export const Label = styled.label`
  font-size: 1.04rem;
  font-family: "Roboto", sans-serif;
  color: #444;
`;

export const Input = styled.input`
  padding: 14px 20px;
  padding-left: 30px;
  border: 1px solid #d3d3d3;
  border-radius: 4px;
  outline: none;
  color: #666;
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  width: 100%;
`;

export const Selection = styled.select`
  padding: 14px 20px;
  padding-left: 30px;
  border: 1px solid #d3d3d3;
  border-radius: 4px;
  outline: none;
  color: #666;
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  width: 100%;
  position: relative;
  appearance: base-select;

  &::picker-icon {
    color: #383838;
  }
`;

export const Option = styled.option`
  background-color: #fff;
  border: none;
  font-size: 0.9rem;
`;
