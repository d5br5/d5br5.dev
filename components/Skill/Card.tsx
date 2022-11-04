import Image from "next/image";
import { FC } from "react";
import { Box, Title } from "@styles/skill";
import { Eng } from "@styles/context";

interface Props {
	filename: string;
	title: string;
}

const Card: FC<Props> = ({ filename, title }) => {
	return (
		<Box>
			<Image
				src={`/skill/white/${filename}.svg`}
				width="45px"
				height="45px"
				alt={`skill_${title}`}
			/>
			<Title>
				<Eng>{title}</Eng>
			</Title>
		</Box>
	);
};

export default Card;
