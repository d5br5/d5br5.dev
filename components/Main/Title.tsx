import { H1, MiniTitle, EngBig, Kor } from "../../styles";
import Image from "next/image";
import styled from "styled-components";

const ImgBox = styled.div`
	width: 300px;
	height: 300px;
	margin: 0 auto;
	border-radius: 150px;
	overflow: hidden;
	box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const Intro = () => {
	return (
		<div style={{ textAlign: "center" }}>
			<ImgBox>
				<Image src="/profile.jpg" alt="good" width="300px" height="300px" />
			</ImgBox>
			<div style={{ display: "flex", flexDirection: "column" }}>
				<div style={{ display: "flex", justifyContent: "center" }}>
					<H1>
						<Kor>김도형 </Kor>
					</H1>
					<H1>
						<EngBig> Doh Kim</EngBig>
					</H1>
				</div>

				<MiniTitle>스스로 생각하는 개발자</MiniTitle>
			</div>
		</div>
	);
};

export default Intro;
