import { H2, Desc, Eng, Period, BlackBox } from "@styles/context";
import { Card, CardBox, TitleBox, DetailBox } from "@styles/history";

const History = () => {
	return (
		<div>
			<H2>
				<Eng>History</Eng>
			</H2>
			<CardBox>
				<Card>
					<TitleBox>
						<BlackBox>서울대학교</BlackBox>
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
						<BlackBox>서울경찰청</BlackBox>
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
