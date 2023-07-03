import {
  PeriodContainer,
  DetailContainer,
  Content,
  Role,
} from "@styles/career";
import { Desc, Eng, Period } from "@styles/context";
import Company from "./Company";

const Adena = () => {
  return (
    <Content>
      <PeriodContainer>
        <Company
          eng
          title="Adena Soft"
          link="https://www.adenasoft.com/ko-KR"
        />
        <Role>
          <Eng>Web Front-end Developer</Eng>
        </Role>
        <Period>
          <Eng>2023. 03. - present</Eng>
        </Period>
      </PeriodContainer>
      <DetailContainer>
        <Desc>가상화폐 현물, 선물 거래소 프론트엔드 개발 (React.js)</Desc>
        <Desc>React.js {"→"} Next.js Migration 준비중 </Desc>
        <Desc>거래소 Admin 개발 (Vue.js)</Desc>
        <Desc>다크/라이트 테마 도입. 디자인 및 색상 코드 통일</Desc>
        <Desc>검색 엔진 최적화(SEO) 작업</Desc>
      </DetailContainer>
    </Content>
  );
};

export default Adena;
