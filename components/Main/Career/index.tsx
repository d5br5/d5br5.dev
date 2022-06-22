import Link from "next/link";
import { H2, Desc, EngBig, Eng, Period, SemiTitle, BoldKor, BoldEng } from "../../../styles";
import { PeriodContainer, DetailContainer, Content, Role } from "./styles";

const Career = () => {
	return (
		<div>
			<H2>
				<EngBig>Career</EngBig>
			</H2>
			<Content>
				<PeriodContainer>
					<a
						href="https://www.notion.so/TmaxFintech-Company-854af3505e0b4a2e8701cae47da7bdbd"
						target="_blank"
						rel="noreferrer"
					>
						<SemiTitle>
							<Eng>Tmax Fintech</Eng>
						</SemiTitle>
					</a>
					<Role>
						<Eng>Web Front-end Developer</Eng>
					</Role>
					<Period>
						<Eng>2022. 02. - present</Eng>
					</Period>
				</PeriodContainer>
				<DetailContainer>
					<Desc>
						코어 뱅킹, 투자 시뮬레이터 등의 서비스를 제공하는 <Eng>Fintech B2B / B2C BaaS</Eng> 기업
						<br />
						<BoldKor>자산배분, 트레이딩 시뮬레이터 프론트엔드 개발</BoldKor> <br />
						<Eng>React, TypeScript</Eng> 기반 <Eng>SPA</Eng> 제작, <Eng>Redux</Eng>를 통한 상태관리
						<br />
						<Eng>git commit, branch rule</Eng> 통일 및 정리
						<br />
						<BoldKor>자세한 프로젝트 내역</BoldKor>은 아래 항목 참조
					</Desc>
				</DetailContainer>
			</Content>
		</div>
	);
};

export default Career;
