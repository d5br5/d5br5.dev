import { H1, MiniTitle, Eng } from "@styles/context";
import { Contact } from "@styles/footer";
import Image from "next/image";
import styled from "styled-components";

const ImgBox = styled.div`
	width: 300px;
	height: 300px;
	margin: 0 auto;
	border-radius: 150px;
	overflow: hidden;
	box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

	&:hover {
		border: 4px black solid;
	}
`;

const Intro = () => {
	return (
		<div style={{ textAlign: "center" }}>
			<ImgBox>
				<Image src="/profile.jpg" alt="good" width="300px" height="300px" />
			</ImgBox>
			<div style={{ display: "flex", flexDirection: "column" }}>
				<H1>
					<Eng>Doh Kim</Eng>
				</H1>

				<MiniTitle>
					<Eng>Simple is the best</Eng>
				</MiniTitle>

				<Contact>
					<a href="https://github.com/d5br5" target="_blank" rel="noopener noreferrer">
						<Image
							src="/contact/github_black.svg"
							width="70px"
							height="70px"
							alt="contact_github"
						/>
					</a>
				</Contact>
			</div>
		</div>
	);
};

export default Intro;
