import { H2, Eng } from "@styles/context";
import styled from "styled-components";

import Tmax from "./Tmax";
import Adena from "./Adena";

const Career = () => {
  return (
    <div>
      <H2>
        <Eng>Career</Eng>
      </H2>
      <CompanyWrapper>
        <Adena />
        <Tmax />
      </CompanyWrapper>
    </div>
  );
};

const CompanyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export default Career;
