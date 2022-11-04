import styled from "styled-components";

export const Box = styled.div`
	width: 85px;
	height: 110px;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	line-height: 10px;
	font-size: 15px;
	gap: 15px;
	background-color: rgba(0, 0, 0, 0.8);
	color: white;
	box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
	transition: all ease 0.2s;
	&:hover {
		background-color: rgba(0, 0, 0, 0.7);
	}
`;

export const CardBox = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	gap: 15px;
	height: 120px;
`;

export const SkillContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: 30px;
`;

export const ContentContainer = styled.div``;

export const Title = styled.div`
	font-weight: 400;
`;
