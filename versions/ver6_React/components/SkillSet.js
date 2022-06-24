import styled from "styled-components";

const SkillName = styled.div`
  flex-basis: 50%;
  text-align: left;
  padding-left: 20px;
  padding-bottom: 3px;
  font-size: 1.8rem;
  color: var(--font);
`;

const Skillful = styled.div`
  
  flex-basis: 40%;
  text-align: right;
  font-size: 1.8rem;
  color: var(--high);
  padding-bottom: 3px;
`

const SkillSetItem = styled.div`
  padding: 5px 30px;
  margin: 5px 0;
  height: 45px;
  flex-basis: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  transition: .5s ease;
  
  &:hover{
    background-color: lightgray;
    transition: .5s ease;
    ${Skillful}{
      letter-spacing: 0.6rem;
      transition: .5s ease;

      @media ${(props)=>props.theme.tabletS}{
        letter-spacing: 0.35rem;
      }
    }
  }
  
  @media ${(props)=>props.theme.tabletL}{
    flex-basis: 90%;
  }
`;

const Logo = styled.div`
  flex-basis: 8%;
  font-size: 0;
`;

const Img = styled.img`
  height: initial;
  font-size: 0;
`;

function printLevel(level) {
  if (level === '1') return '★☆☆☆☆';
  else if (level === '2') return '★★☆☆☆';
  else if (level === '3') return '★★★☆☆';
  else if (level === '4') return '★★★★☆';
  else if (level === '5') return '★★★★★';
  else return '☆☆☆☆☆';
}

const SkillSet = ({toolName, toolImg, level}) => {
  return <SkillSetItem className="skillset">
    <Logo className="logo"><Img src={toolImg} alt=""/></Logo>
    <SkillName>{toolName}</SkillName>
    <Skillful>{printLevel(level)}</Skillful>
  </SkillSetItem>;
};

export default SkillSet;