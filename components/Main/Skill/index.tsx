import { H2, H3 } from "../../../styles";
import { CardBox, SkillContent, ContentContainer } from "./styles";
import Card from "./components/Card";
import { haveUsed, tools, useWell } from "./data";

const Skill = () => {
	return (
		<div>
			<H2>Skill</H2>
			<SkillContent>
				<ContentContainer>
					<H3>Use Well</H3>
					<CardBox>
						{useWell.map((item) => (
							<Card title={item.name} filename={item.filename} key={item.name} />
						))}
					</CardBox>
				</ContentContainer>
				<ContentContainer>
					<H3>Have Used</H3>
					<CardBox>
						{haveUsed.map((item) => (
							<Card title={item.name} filename={item.filename} key={item.name} />
						))}
					</CardBox>
				</ContentContainer>
				<ContentContainer>
					<H3>Tools</H3>
					<CardBox>
						{tools.map((item) => (
							<Card title={item.name} filename={item.filename} key={item.name} />
						))}
					</CardBox>
				</ContentContainer>
			</SkillContent>
		</div>
	);
};

export default Skill;
