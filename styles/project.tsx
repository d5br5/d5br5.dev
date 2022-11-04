import styled from "styled-components";

export const CardContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 20px;
`;

export const Card = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	border: 1px solid rgba(0, 0, 0, 0.2);
	border-radius: 4px;
	box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
	transition: all ease 0.2s;
	&:hover {
		background-color: rgba(0, 0, 0, 0.04);
	}
`;

export const ImageContainer = styled.div`
	border-right: 1px solid rgba(0, 0, 0, 0.2);
	line-height: 0;
`;

export const DescContainer = styled.div`
	margin-left: 30px;
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

export const Title = styled.div`
	font-size: 20px;
	font-weight: 900;
`;

export const Period = styled.div`
	color: gray;
`;

export const Intro = styled.div`
	line-height: 30px;
	letter-spacing: -0.3px;
`;

export const ButtonContainer = styled.div`
	display: flex;
	gap: 10px;
`;

export const Button = styled.div`
	border: 1px black solid;
	background-color: black;
	border-radius: 5px;
	padding: 3px 8px;
	color: white;

	cursor: pointer;
`;
