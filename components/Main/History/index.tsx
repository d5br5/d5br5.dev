import { H2, Desc, EngBig, Eng, Period, SemiTitle } from "../../../styles";
import { Card, CardBox, TitleBox, DetailBox } from "./styles";

const History = () => {
	return (
		<div>
			<H2>
				<EngBig>History</EngBig>
			</H2>
			<CardBox>
				<Card>
					<TitleBox>
						<SemiTitle>서울대학교</SemiTitle>
						<Period>
							<Eng>2015. 03. - 2022. 02.</Eng>
						</Period>
					</TitleBox>
					<DetailBox>
						<Desc>공과대학 기계공학과</Desc>
						<Desc>경영대학 벤처경영학과</Desc>
					</DetailBox>
				</Card>
				<Card>
					<TitleBox>
						<SemiTitle>서울지방경찰청</SemiTitle>
						<Period>
							<Eng>2017. 09. - 2019. 05.</Eng>
						</Period>
					</TitleBox>
					<DetailBox>
						<Desc>4기동단 41중대 기동대원</Desc>
						<Desc>112 종합상황실 상황분석 대원</Desc>
					</DetailBox>
				</Card>
			</CardBox>
		</div>
	);
};

export default History;
