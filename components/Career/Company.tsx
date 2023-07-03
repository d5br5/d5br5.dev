import { BlackBox, Eng } from "@styles/context";
import Image from "next/image";

interface Props {
  title: string;
  link?: string;
  eng?: boolean;
}

const Company = ({ title, link, eng }: Props) => {
  return link ? (
    <a href={link} target="_blank" rel="noreferrer">
      <BlackBox>
        <Eng>{title}</Eng>
        <Image
          src="/contact/link.svg"
          width="13px"
          height="13px"
          alt="external_link"
        />
      </BlackBox>
    </a>
  ) : eng ? (
    <BlackBox>
      <Eng>{title}</Eng>
    </BlackBox>
  ) : (
    <BlackBox>{title}</BlackBox>
  );
};

export default Company;
