import { BlackBox, Eng } from "@styles/context";
import Image from "next/image";

const Company = ({ title }: { title: string }) => {
  return (
    <BlackBox>
      <Eng>{title}</Eng>
      <Image
        src="/contact/link.svg"
        width="13px"
        height="13px"
        alt="external_link"
      />
    </BlackBox>
  );
};

export default Company;
