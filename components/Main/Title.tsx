import { H1, H2, H1Eng } from "../../styles";
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
				<H1>김도형 Doh Kim</H1>
				<H1Eng>Doh Kim</H1Eng>
				<H2>스스로 생각하는 개발자</H2>
			</div>
		</div>
	);
};

export default Intro;
