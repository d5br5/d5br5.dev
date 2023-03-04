import {
  PeriodContainer,
  DetailContainer,
  Content,
  Role,
} from "@styles/career";
import { Desc, Eng, Period } from "@styles/context";
import Company from "./Company";

const Tmax = () => {
  return (
    <Content>
      <PeriodContainer>
        <a
          href="https://www.notion.so/TmaxFintech-Company-854af3505e0b4a2e8701cae47da7bdbd"
          target="_blank"
          rel="noreferrer"
        >
          <Company title="Tmax Fintech" />
        </a>
        <Role>
          <Eng>Web Front-end Developer</Eng>
        </Role>
        <Period>
          <Eng>2022. 02. - 2023.02.</Eng>
        </Period>
      </PeriodContainer>
      <DetailContainer>
        <Desc>
          자산배분, 트레이딩 시뮬레이터 프론트엔드 개발
          <br />
          <Eng>React, TypeScript</Eng> 기반 <Eng>SPA</Eng> 제작,{" "}
          <Eng>Redux</Eng>를 통한 상태관리
          <br />
          다양한 <Eng>backtest data</Eng>를 <Eng>chart.js</Eng>로 도식화
          <br />
          브라우저 렌더링 성능 개선 ( <Eng>Lighthouse</Eng> 기준, 60점 {"→"}{" "}
          86점 )
          <br />
          협업을 위한 <Eng>git commit, branch rule</Eng> 통일 및 정리
        </Desc>
      </DetailContainer>
    </Content>
  );
};

export default Tmax;
