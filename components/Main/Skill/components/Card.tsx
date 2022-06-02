import Image from "next/image";
import { FC } from "react";
import { Box } from "../styles";

interface Props {
	filename: string;
	title: string;
}

const Card: FC<Props> = ({ filename, title }) => {
	return (
		<Box>
			<Image
				src={`/skill/white/${filename}.svg`}
				width="60px"
				height="60px"
				alt={`skill_${title}`}
			/>
			<div>{title}</div>
		</Box>
	);
};

export default Card;
