import { H1, MiniTitle, EngBig, Kor } from "../../styles";
import Image from "next/image";

const Intro = () => {
	return (
		<div style={{ textAlign: "center" }}>
			<div
				style={{
					width: "300px",
					height: "300px",
					margin: "0 auto",
					padding: "0px",
					borderRadius: "150px",
					overflow: "hidden",
				}}
			>
				<Image src="/profile.jpg" alt="good" width="300px" height="300px" />
			</div>
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
