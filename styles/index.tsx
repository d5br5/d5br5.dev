import styled from "styled-components";

export const Container = styled.div`
	width: 900px;
	margin: 100px auto 100px;
	display: flex;
	flex-direction: column;
	gap: 80px;
`;

export const Kor = styled.span`
	font-family: "S-CoreDream-6";
`;

export const Eng = styled.span`
	font-family: Inter, Helvetica, Apple Color Emoji, Segoe UI Emoji,
		NotoColorEmoji, Noto Color Emoji, Segoe UI Symbol, Android Emoji,
		EmojiSymbols, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
		Helvetica Neue, Noto Sans, sans-serif;
	letter-spacing: -0.7px;
`;

export const EngBig = styled(Eng)`
	letter-spacing: -1px;
`;

export const MiniTitle = styled.div`
	font-size: 24px;
	font-family: "S-CoreDream-5";
`;

export const H1 = styled.div`
	font-size: 45px;
	font-weight: 700;
	white-space: pre-wrap;
	margin: 30px 0 10px;
`;

export const H2 = styled.div`
	font-size: 32px;
	font-weight: 600;
	margin-bottom: 30px;
`;

export const H3 = styled.div<{ isGray?: boolean }>`
	font-family: "S-CoreDream-7";
	font-size: 19px;
	font-weight: 550;
	margin-bottom: 20px;
	color: ${(props) => (props.isGray ? "#717170" : "black")};
`;

export const Desc = styled.div<{ isGray?: boolean }>`
	font-family: "S-CoreDream-3";
	font-size: 17px;
	line-height: 35px;
	color: ${(props) => (props.isGray ? "#717170" : "black")};
`;

export const Strong = styled.span`
	font-family: "S-CoreDream-7";
`;
export const Period = styled.div`
	color: rgba(0, 0, 0, 0.6);
	margin-bottom: 20px;
`;

export const SemiTitle = styled.div`
	font-family: "S-CoreDream-4";
	text-align: center;
	background-color: rgba(0, 0, 0, 0.8);
	padding: 6px;
	font-size: 18px;
	border-radius: 5px;
	width: 150px;

	margin-top: 5px;

	color: white;
	font-weight: 500;
`;
