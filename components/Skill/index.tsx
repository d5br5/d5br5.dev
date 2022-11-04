import { H2, H3, Eng } from "@styles/context";
import { CardBox, SkillContent, ContentContainer } from "@styles/skill";
import Card from "./Card";
import { haveUsed, tools, useWell } from "./data";

const Skill = () => {
	return (
		<div>
			<H2>
				<Eng>Skill</Eng>
			</H2>
			<SkillContent>
				<ContentContainer>
					<H3>
						<Eng>Using</Eng>
					</H3>
					<CardBox>
						{useWell.map((item) => (
							<Card title={item.name} filename={item.filename} key={item.name} />
						))}
					</CardBox>
				</ContentContainer>
				<ContentContainer>
					<H3>
						<Eng>Have Used</Eng>
					</H3>
					<CardBox>
						{haveUsed.map((item) => (
							<Card title={item.name} filename={item.filename} key={item.name} />
						))}
					</CardBox>
				</ContentContainer>
				<ContentContainer>
					<H3>
						<Eng>Tools</Eng>
					</H3>
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
