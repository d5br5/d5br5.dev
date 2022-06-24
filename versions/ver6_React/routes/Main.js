import styled, {keyframes} from "styled-components";
import {profile} from './images';

const text_reveal_box = keyframes`
  50% {
    width: 100%;
    left: 0;
  }
  100% {
    width: 0;
    left: 100%;
  }
`;
const text_reveal = keyframes`
  100% {
    color: var(--high);
  }
`;

const MainSection = styled.section`
  background-color: var(--low);
  position: relative;
  z-index: 1;
`;

const MainContainer = styled.div`
  min-height: 100vh;
  max-width: 900px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 0 50px;
  display: flex;
  flex-direction: column;
`;

const Profile = styled.div`
  width: 30%;
  border-radius: 50%;
  border: 4px solid var(--high);
  overflow: hidden;
  margin: 20px auto;
  font-size: 0;
  @media ${(props) => props.theme.tabletL} {
    width: 70%;
  }
`;

const Name = styled.h1`
  animation: ${text_reveal} .5s ease forwards;
  animation-delay: 1s;
  position: relative;
  color: transparent;
  font-size: 10rem;
  text-transform: initial;
  @media ${(props) => props.theme.tabletS} {
    font-size: 5rem;
  }
  @media ${(props) => props.theme.tabletM} {
    font-size: 7rem;
  }
`;

const Effect = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 0;
  background-color: var(--high);
  animation: ${text_reveal_box} 1s ease;
  animation-delay: .5s;
`;

const Desc = styled.div`
  align-items: center;
`;

const Main = () => {
  return <MainSection id="main">
    <MainContainer className="main container">
      <Profile className="profile">
        <img src={profile} alt="./"/>
      </Profile>
      <Desc className="description">
        <Name>Doh Kim<Effect/></Name>
      </Desc>
    </MainContainer>
  </MainSection>
};

export default Main;