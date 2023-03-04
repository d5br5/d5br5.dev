import styled from "styled-components";

export const Container = styled.div`
  width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 60px;
  padding: 0 20px;
`;

export const Box = styled.div`
  width: 100%;
  border: 1px black solid;
  border-radius: 15px;
  margin: 0px 0 50px;
  padding: 50px 50px;
  background: #181717;
  color: white;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  gap: 50px;
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ContactList = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 10px;
`;

export const Contact = styled.div`
  width: 35px;
  height: 35px;
  cursor: pointer;
`;

export const ImgBox = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50px;
  overflow: hidden;
`;

export const CCBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const CC = styled.div`
  display: flex;
  font-size: 17px;
  align-items: center;
`;
