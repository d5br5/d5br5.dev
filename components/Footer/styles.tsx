import styled from "styled-components";

export const Box = styled.div`
	width: 100%;
	border: 1px black solid;
	border-radius: 15px;
	margin-bottom: 30px;
	padding: 50px 50px;
	background: black;
	color: white;
	display: flex;
	flex-direction: column;
	gap: 50px;
`;

export const Top = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const ImgBox = styled.div`
	width: 60px;
	height: 60px;
	border-radius: 50px;
	overflow: hidden;
`;

export const CCBox = styled.div`
	display: flex;
	align-items: center;
`;
