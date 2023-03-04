import { Contact } from "@styles/footer";
import Image from "next/image";

interface Props {
  href: string;
  src: string;
  title: string;
  size?: number;
}

const SNS = ({ href, src, title, size }: Props) => {
  return (
    <Contact>
      <a href={href} target="_blank" rel="noopener noreferrer">
        <Image src={src} width="90px" height="90px" alt={`contact_${title}`} />
      </a>
    </Contact>
  );
};

export default SNS;
