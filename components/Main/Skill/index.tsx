import { H2, H3, EngBig } from "../../../styles";
import { CardBox, SkillContent, ContentContainer } from "./styles";
import Card from "./components/Card";
import { haveUsed, tools, useWell } from "./data";

const Skill = () => {
	return (
		<div>
			<H2>
				<EngBig>Skill</EngBig>
			</H2>
			<SkillContent>
				<ContentContainer>
					<H3>
						<EngBig>Use Well</EngBig>
					</H3>
					<CardBox>
						{useWell.map((item) => (
							<Card
								title={item.name}
								filename={item.filename}
								key={item.name}
							/>
						))}
					</CardBox>
				</ContentContainer>
				<ContentContainer>
					<H3>
						<EngBig>Have Used</EngBig>
					</H3>
					<CardBox>
						{haveUsed.map((item) => (
							<Card
								title={item.name}
								filename={item.filename}
								key={item.name}
							/>
						))}
					</CardBox>
				</ContentContainer>
				<ContentContainer>
					<H3>
						<EngBig>Tools</EngBig>
					</H3>
					<CardBox>
						{tools.map((item) => (
							<Card
								title={item.name}
								filename={item.filename}
								key={item.name}
							/>
						))}
					</CardBox>
				</ContentContainer>
			</SkillContent>
		</div>
	);
};

export default Skill;
