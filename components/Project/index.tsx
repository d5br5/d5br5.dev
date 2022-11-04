import { H2, Eng } from "@styles/context";
import {
	Card,
	CardContainer,
	Title,
	Intro,
	DescContainer,
	Period,
	ButtonContainer,
	Button,
	ImageContainer,
} from "@styles/project";
import Image from "next/image";

const Project = () => {
	return (
		<div>
			<H2>
				<Eng>Project</Eng>
			</H2>
			<CardContainer>
				<Card>
					<ImageContainer>
						<Image src="/project/prism.jpg" alt="test image" width="285px" height="200px" />
					</ImageContainer>
					<DescContainer>
						<Title>셀프스튜디오 종합 비교 플랫폼</Title>
						<Period>2022.07. - 11.</Period>
						<ButtonContainer>
							<a href="https://prism-station.vercel.app/" target="_blank" rel="noreferrer">
								<Button>Product</Button>
							</a>
							<a href="https://github.com/d5br5/WEB_Prism_Station" target="_blank" rel="noreferrer">
								<Button>Github</Button>
							</a>
						</ButtonContainer>
						<Intro>
							셀프스튜디오 시장 트렌드 성장 포착 (전국, 2018년 10개 {"→"} 2022년 1,500개)
							<br />
							정보 검색 과정의 Pain Point 해결. <Eng>MVP</Eng> 런칭 3일만에{" "}
							<strong>이용자 1,500명 돌파</strong>
						</Intro>
					</DescContainer>
				</Card>
				<Card>
					<ImageContainer>
						<Image src="/project/simulator.png" alt="test image" width="285px" height="200px" />
					</ImageContainer>
					<DescContainer>
						<Title>투자 시뮬레이터</Title>
						<Period>2022.02. - 08.</Period>
						<ButtonContainer>
							<a href="https://robo-advisor.vercel.app/" target="_blank" rel="noreferrer">
								<Button>Product</Button>
							</a>
							<a href="https://github.com/d5br5/WEB_RoboAdvisor" target="_blank" rel="noreferrer">
								<Button>Github</Button>
							</a>
						</ButtonContainer>
						<Intro>
							주식, 채권 등 증권 상품의 과거 시장 분석, <strong>최적의 조합 추천</strong>
							<br />
							주문 가격 등의 <Eng>Factor</Eng> 설정 및 <Eng>Chart</Eng>를 활용한 다양한 분석 가능
						</Intro>
					</DescContainer>
				</Card>

				<Card>
					<ImageContainer>
						<Image src="/project/coin.png" alt="test image" width="285px" height="200px" />
					</ImageContainer>
					<DescContainer>
						<Title>암호화폐 모의거래소</Title>
						<Period>2021.05. - 09.</Period>
						<ButtonContainer>
							<a href="https://coin-to-the-moon.vercel.app/" target="_blank" rel="noreferrer">
								<Button>Product</Button>
							</a>
							<a href="https://github.com/d5br5/WEB-coin-market" target="_blank" rel="noreferrer">
								<Button>Github</Button>
							</a>
						</ButtonContainer>
						<Intro>
							6종의 암호화폐 매매 가능. <Eng>Coin Gecko API</Eng>를 활용한 실시간 가격 변동
							<br />
							자산 조회 및 거래 요청시 JWT 를 통한 인증. 간단한 회원가입 및 로그인
						</Intro>
					</DescContainer>
				</Card>
			</CardContainer>
		</div>
	);
};

export default Project;
