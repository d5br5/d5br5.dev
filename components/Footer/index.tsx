import { Container, Box, Top, ImgBox, CC, CCBox, Contact, ContactList } from "@styles/footer";
import { Eng } from "@styles/context";
import Image from "next/image";

const Footer = () => {
	return (
		<Container>
			<Box>
				<Top>
					<ImgBox>
						<Image src="/profile.jpg" alt="profile" width="60px" height="60px" />
					</ImgBox>
					<ContactList>
						<a href="https://github.com/d5br5" target="_blank" rel="noopener noreferrer">
							<Contact>
								<Image src="/contact/github.svg" width="70px" height="70px" alt="contact_github" />
							</Contact>
						</a>
						<a href="https://www.instagram.com/d5._.br5/" target="_blank" rel="noopener noreferrer">
							<Contact>
								<Image
									src="/contact/instagram.svg"
									width="70px"
									height="70px"
									alt="contact_instagram"
								/>
							</Contact>
						</a>
						<a href="mailto:ehgud456456@naver.com">
							<Contact>
								<Image src="/contact/gmail.svg" width="70px" height="70px" alt="contact_gmail" />
							</Contact>
						</a>
					</ContactList>
				</Top>
				<CCBox>
					<CC>
						<div>
							<Eng>Built with Next.js</Eng>
						</div>
						<a
							href="https://www.webfreecounter.com/"
							target="_blank"
							rel="noopener noreferrer"
							style={{ marginTop: "4px", marginLeft: "5px" }}
						>
							<Image
								src="https://www.cutercounter.com/hits.php?id=huxkkfpd&nd=6&style=2"
								alt="hit counter"
								width="51px"
								height="15px"
							/>
						</a>
					</CC>
					<CC>
						<div>
							<Eng>© 2022 Doh Kim. All Rights Reserved.</Eng>
						</div>
					</CC>
				</CCBox>
			</Box>
		</Container>
	);
};

export default Footer;
