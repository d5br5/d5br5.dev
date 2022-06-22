import styled from "styled-components";

export const CardContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const Card = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 285px;
	height: 400px;
	border: 1px solid rgba(0, 0, 0, 0.2);
	border-radius: 4px;
	cursor: pointer;
	box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
	transition: all ease 0.2s;
	&:hover {
		background-color: rgba(0, 0, 0, 0.03);
	}
`;

export const BgImg = styled.div`
	width: 100%;
	height: 50%;
	border-bottom: 1px solid rgba(0, 0, 0, 0.2);
	overflow: hidden;
`;

export const Title = styled.div`
	font-family: "S-CoreDream-7";
	font-size: 17px;
	margin-top: 20px;
`;

export const Intro = styled.div`
	margin-top: 15px;
	font-size: 14px;
	font-family: "S-CoreDream-3";
	line-height: 30px;
	text-align: center;
	letter-spacing: -0.5px;
`;
