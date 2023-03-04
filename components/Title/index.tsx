import SNS from "@components/Footer/SNS";
import { H1, MiniTitle, Eng } from "@styles/context";
import { Contact, ContactList } from "@styles/footer";
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
          <div>
            <Eng>Simple is the best</Eng>
          </div>
          <div>
            <Eng>Be unique</Eng>
          </div>
        </MiniTitle>

        <ContactList>
          <SNS
            href="https://github.com/d5br5"
            src="/contact/github_black.svg"
            title="github"
          />
          <SNS
            href="https://www.linkedin.com/in/dohkim777/"
            src="/contact/linkedin_black.svg"
            title="linkedin"
          />
          <SNS
            href="https://dd5dd5.tistory.com/"
            src="/contact/tistory_black.svg"
            title="tistory"
          />
        </ContactList>
      </div>
    </div>
  );
};

export default Intro;
