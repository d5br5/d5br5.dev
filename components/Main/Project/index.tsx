import { EngBig, H2, Eng, BoldKor, BoldEng } from "../../../styles";
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
							<Image src="/project/simulator.png" alt="test image" width="285px" height="200px" />
						</BgImg>
						<Title>투자 시뮬레이터</Title>
						<Intro>
							선호 종목들의 시뮬레이션 성과 분석 <br />
							과거 시장을 분석하여 <BoldKor>최적의 조합 추천</BoldKor>
							<br />
							주문 가격 등 다양한 <Eng>Factor</Eng> 직접 설정
							<br />
							<Eng>Chart</Eng>를 사용하여 <BoldKor>직관적인 결과 확인</BoldKor>
						</Intro>
					</Card>
				</Link>
				<Link href="/project/coin-to-the-moon">
					<Card>
						<BgImg>
							<Image src="/project/coin.png" alt="test image" width="285px" height="200px" />
						</BgImg>
						<Title>암호화폐 모의거래소</Title>
						<Intro>
							6종의 암호화폐 매매 가능 <br />
							<Eng>Coin Gecko API</Eng>를 활용한 <BoldKor>실시간 가격 변동</BoldKor>
							<br />
							자산 조회 및 거래 요청시 <BoldEng>JWT</BoldEng>
							<BoldKor>를 통한 인증</BoldKor>
							<br />
							<BoldKor>간단한 정보 입력</BoldKor>으로 회원가입 및 로그인
						</Intro>
					</Card>
				</Link>
				<Link href="/project/prism-station">
					<Card>
						<BgImg>
							<Image src="/project/prism.jpg" alt="test image" width="285px" height="200px" />
						</BgImg>
						<Title>셀프스튜디오 종합 비교 플랫폼</Title>
						<Intro>
							셀프스튜디오 <BoldKor>시장 트렌드</BoldKor> 포착 <br />
							정보 검색 과정의 <BoldEng>Pain Point</BoldEng>
							<BoldKor></BoldKor> 해결 <br />
							네이버 <Eng>Map API</Eng>를 활용한 <BoldKor>직관적 </BoldKor>
							<BoldEng>UI</BoldEng>
							<br />
							<Eng>MVP</Eng> 런칭 3일만에 <BoldKor>이용자 1,500명</BoldKor> 돌파
						</Intro>
					</Card>
				</Link>
			</CardContainer>
		</div>
	);
};

export default Project;
