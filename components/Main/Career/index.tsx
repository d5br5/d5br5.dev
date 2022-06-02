import { H2, H3, Desc } from "../../../styles";
import { PeriodContainer, DetailContainer, Content } from "./styles";

const Career = () => {
	return (
		<div>
			<H2>Career</H2>
			<div>
				<H3>티맥스 핀테크</H3>
				<Desc>
					코어 뱅킹, 로보 어드바이저 등의 서비스를 제공하는 Fintech B2B / B2C BaaS 전문 기업
				</Desc>
			</div>
			<Content>
				<PeriodContainer>
					<div>Web Front-end Developer</div>
					<div>2022.02. - 현재</div>
				</PeriodContainer>
				<DetailContainer>
					<div>자산배분, 트레이딩 시뮬레이터 프론트엔드 개발</div>
					<div>React, TypeScript 기반 SPA 제작, Redux를 통한 상태관리</div>
					<div>git commit, branch rule 통일 및 정리</div>
					<div>자세한 프로젝트 내역은 아래 Project 항목 참조</div>
				</DetailContainer>
			</Content>
		</div>
	);
};

export default Career;
