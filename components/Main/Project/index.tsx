import { Desc, H2 } from "../../../styles";
import { Card, CardContainer, BgImg, Title } from "./styles";
import Link from "next/link";

const Project = () => {
	return (
		<div>
			<H2>Project</H2>
			<CardContainer>
				<Link href="/project/coin-to-the-moon">
					<Card>
						<BgImg></BgImg>
						<Title>Coin to the moon</Title>
					</Card>
				</Link>
				<Link href="/project/prism-station">
					<Card>
						<BgImg></BgImg>
						<Title>Prism Station</Title>
					</Card>
				</Link>
				<Link href="/project/trading-simulator">
					<Card>
						<BgImg></BgImg>
						<Title>Trading Simulator</Title>
					</Card>
				</Link>
			</CardContainer>
		</div>
	);
};

export default Project;
