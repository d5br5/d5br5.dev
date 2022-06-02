import styled from "styled-components";

export const Container = styled.div`
	width: 900px;
	margin: 100px auto 100px;
	display: flex;
	flex-direction: column;
	gap: 60px;
`;

export const H1 = styled.div`
	font-size: 45px;
	font-weight: 700;
	white-space: pre-wrap;
	margin: 20px 0;
`;

export const H1Kor = styled(H1)`
	font-family: "S-CoreDream-8Heavy";
`;

export const H1Eng = styled(H1)`
	font-family: Inter, Helvetica, Apple Color Emoji, Segoe UI Emoji, NotoColorEmoji, Noto Color Emoji,
		Segoe UI Symbol, Android Emoji, EmojiSymbols, -apple-system, BlinkMacSystemFont, Segoe UI,
		Roboto, Helvetica Neue, Noto Sans, sans-serif;
	letter-spacing: -1px;
`;

export const H2 = styled.div`
	font-size: 28px;
	font-weight: 600;
	margin-bottom: 20px;
`;

export const H3 = styled.div<{ isGray?: boolean }>`
	font-size: 19px;
	font-weight: 550;
	margin-bottom: 20px;
	color: ${(props) => (props.isGray ? "#717170" : "black")};
`;

export const Desc = styled.div<{ isGray?: boolean }>`
	font-size: 19px;
	line-height: 38px;
	color: ${(props) => (props.isGray ? "#717170" : "black")};
`;

export const Strong = styled.span`
	font-weight: 500;
`;
