import { H2, H3, Desc } from "../../../styles";
import { Card, CardBox, TitleBox } from "./styles";

const History = () => {
	return (
		<div>
			<H2>History</H2>
			<CardBox>
				<Card>
					<TitleBox>
						<H3>서울대학교</H3>
						<H3 isGray>2015.03. - 2022.02.</H3>
					</TitleBox>
					<Desc>공과대학 기계공학과</Desc>
					<Desc>경영대학 벤처경영학과</Desc>
				</Card>
				<Card>
					<TitleBox>
						<H3>서울지방경찰청</H3>
						<H3 isGray>2017.09. - 2019.05.</H3>
					</TitleBox>
					<Desc>4기동단 41중대 기동대원</Desc>
					<Desc>112 종합상황실 상황분석 대원</Desc>
				</Card>
			</CardBox>
		</div>
	);
};

export default History;