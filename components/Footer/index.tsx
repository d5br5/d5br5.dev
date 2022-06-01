import { Container } from "../../styles";
import { Box, Top, ImgBox, CCBox } from "./styles";
import Image from "next/image";
const Footer = () => {
	return (
		<Container>
			<Box>
				<Top>
					<ImgBox>
						<Image src="/square.jpg" alt="profile" width="60px" height="60px" />
					</ImgBox>
					<div>Contact List</div>
				</Top>
				<CCBox>
					<div> © 2022 Doh Kim. All Rights Reserved.</div>
					<a
						href="https://www.webfreecounter.com/"
						target="_blank"
						rel="noopener noreferrer"
						style={{ marginTop: "5.5px", marginLeft: "5px" }}
					>
						<Image
							src="https://www.cutercounter.com/hits.php?id=huxkkfpd&nd=6&style=2"
							alt="hit counter"
							width="51px"
							height="15px"
						/>
					</a>
				</CCBox>
			</Box>
		</Container>
	);
};

export default Footer;
