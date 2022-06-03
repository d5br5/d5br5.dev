import { EngBig, H2, Eng } from "../../../styles";
import { Card, CardContainer, BgImg, Title, Intro } from "./styles";
import Link from "next/link";
import Image from "next/image";

const Project = () => {
	return (
		<div>
			<H2>
				<EngBig>Project</EngBig>
			</H2>
			<CardContainer>
				<Link href="/project/trading-simulator">
					<Card>
						<BgImg>
							<Image
								src="/test.jpg"
								alt="test image"
								width="600px"
								height="500px"
							/>
						</BgImg>
						<Title>자산배분, 트레이딩 시뮬레이터</Title>
						<Intro></Intro>
					</Card>
				</Link>
				<Link href="/project/coin-to-the-moon">
					<Card>
						<BgImg>
							<Image
								src="/test.jpg"
								alt="test image"
								width="600px"
								height="500px"
							/>
						</BgImg>
						<Title>암호화폐 모의거래소</Title>
						<Intro>
							6종의 암호화폐 매매 가능 <br />
							<Eng>Coin Gecko API</Eng>를 활용한 실시간 가격 변동
							<br />
							자산 조회 및 거래 요청시 <Eng>JWT</Eng>를 통한 인증
							<br />
							간단한 정보 입력으로 회원가입 및 로그인
						</Intro>
					</Card>
				</Link>
				<Link href="/project/prism-station">
					<Card>
						<BgImg>
							<Image
								src="/test.jpg"
								alt="test image"
								width="600px"
								height="500px"
							/>
						</BgImg>
						<Title>셀프스튜디오 종합 비교 플랫폼</Title>
						<Intro>
							셀프스튜디오 시장 트렌드 포착 <br />
							정보 검색 과정의 <Eng>Pain Point</Eng> 해결 <br />
							네이버 <Eng>Map API</Eng>를 활용한 직관적 <Eng>UI</Eng>
							<br />
							<Eng>MVP</Eng> 런칭 3일만에 이용자 1,500명 돌파
						</Intro>
					</Card>
				</Link>
			</CardContainer>
		</div>
	);
};

export default Project;
