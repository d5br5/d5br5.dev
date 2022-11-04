import type { NextPage } from "next";
import Title from "@components/Title";
import History from "@components/History";
import Project from "@components/Project";
import Skill from "@components/Skill";
import Career from "@components/Career";
import { Container } from "@styles/context";

const Home: NextPage = () => {
	return (
		<Container>
			<Title />
			<Career />
			<Project />
			<Skill />
			<History />
		</Container>
	);
};

export default Home;
