import styled from "styled-components";

export const Container = styled.div`
  width: 900px;
  margin: 100px auto 100px;
  display: flex;
  flex-direction: column;
  gap: 80px;
  padding: 0 20px;
`;

export const Eng = styled.span`
  font-family: Inter, Helvetica, Apple Color Emoji, Segoe UI Emoji,
    NotoColorEmoji, Noto Color Emoji, Segoe UI Symbol, Android Emoji,
    EmojiSymbols, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Noto Sans, sans-serif;
  letter-spacing: -0.7px;
`;

export const BoldEng = styled(Eng)`
  font-weight: 700;
  letter-spacing: -1px;
`;

export const MiniTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 20px;
`;

export const H1 = styled.h1`
  font-size: 50px;
  font-weight: 900;
  white-space: pre-wrap;
  margin: 30px 0 10px;
`;

export const H2 = styled.h2`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 30px;
  &::before {
    content: ".";
    margin-right: 20px;
    background-color: black;
  }
`;

export const H3 = styled.h3<{ isGray?: boolean }>`
  font-size: 19px;
  font-weight: 550;
  margin-bottom: 20px;
  color: ${(props) => (props.isGray ? "#717170" : "black")};
`;

export const Desc = styled.div<{ isGray?: boolean }>`
  font-size: 17px;
  line-height: 35px;
  color: ${(props) => (props.isGray ? "#717170" : "black")};
`;

export const Period = styled.div`
  color: rgba(0, 0, 0, 0.6);
  margin-bottom: 20px;
`;

export const BlackBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.8);
  padding: 6px;
  font-size: 18px;
  border-radius: 5px;
  width: 170px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin-top: 5px;
  color: white;
  font-weight: 500;
`;
