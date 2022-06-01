import Title from "./Title";
import Intro from "./Intro";
import History from "./History";
import Project from "./Project";
import Skill from "./Skill";
import Career from "./Career";
import { Container } from "../../styles";

const Main = () => {
	return (
		<Container>
			<Title />
			<Intro />
			<Skill />
			<Career />
			<Project />
			<History />
		</Container>
	);
};

export default Main;
