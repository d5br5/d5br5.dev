import { Desc, H2 } from "../../styles";
import Link from "next/link";

const Project = () => {
	return (
		<div>
			<H2>Project</H2>
			<Link href="/project/coin-to-the-moon">
				<Desc>Coin to the moon</Desc>
			</Link>
			<Link href="/project/prism-station">
				<Desc>Prism Station</Desc>
			</Link>
			<Link href="/project/trading-simulator">
				<Desc>Trading Simulator</Desc>
			</Link>
		</div>
	);
};

export default Project;
