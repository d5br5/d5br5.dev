import {
  Container,
  Box,
  Top,
  ImgBox,
  CC,
  CCBox,
  Contact,
  ContactList,
} from "@styles/footer";
import { Eng } from "@styles/context";
import Image from "next/image";
import SNS from "./SNS";

const Footer = () => {
  return (
    <Container>
      <Box>
        <Top>
          <ImgBox>
            <Image
              src="/profile.jpg"
              alt="profile"
              width="60px"
              height="60px"
            />
          </ImgBox>
          <ContactList>
            <SNS
              href="https://github.com/d5br5"
              src="/contact/github.svg"
              title="github"
            />
            <SNS
              href="https://www.instagram.com/d5._.br5/"
              src="/contact/instagram.svg"
              title="instagram"
            />
            <SNS
              href="https://www.linkedin.com/in/dohkim777/"
              src="/contact/linkedin_white.svg"
              title="linkedin"
            />
            <SNS
              href="https://dd5dd5.tistory.com/"
              src="/contact/tistory_white.svg"
              title="tistory"
            />

            <a href="mailto:ehgud456456@naver.com">
              <Contact>
                <Image
                  src="/contact/gmail.svg"
                  width="40px"
                  height="40px"
                  alt="contact_gmail"
                />
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
