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
        <a
          href="https://www.adenasoft.com/ko-KR"
          target="_blank"
          rel="noreferrer"
        >
          <Company title="Adena Soft" />
        </a>
        <Role>
          <Eng>Web Front-end Developer</Eng>
        </Role>
        <Period>
          <Eng>2023. 03. - present</Eng>
        </Period>
      </PeriodContainer>
      <DetailContainer>
        <Desc>2023. 03. 06 입사 예정</Desc>
      </DetailContainer>
    </Content>
  );
};

export default Adena;
