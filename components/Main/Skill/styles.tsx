import styled from "styled-components";

export const Box = styled.div`
	width: 100px;
	height: 130px;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	line-height: 10px;
	gap: 15px;
	background-color: #181717;
	color: white;
	font-weight: 700;
`;

export const CardBox = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;
	gap: 20px;
`;

export const SkillContent = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;

export const ContentContainer = styled.div`
	width: 25%;
`;
