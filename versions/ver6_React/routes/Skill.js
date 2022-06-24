import styled from 'styled-components';
import {Container, Title, TitleHeader, TitleDesc, Items, ItemTitle, Item} from '../common';

import {css, express, html, javascript, mongodb, mysql, nodejs, php, python, react} from './images';
import {china, japan, south_korea, spains, united_states} from './images';
import {illustrator, indesign, photoshop, premier} from './images';
import {excel, github, gsuit, hancom, notion, powerpoint, slack, word, surge, vercel} from './images';

import SkillSet from '../components/SkillSet';

const SkillList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: left;
  align-items: flex-start;
  margin-top: 30px;
  margin-bottom: 10px;
  padding: 15px 0;
  @media ${(props) => props.theme.tabletM} {
    justify-content: center;
  }
`;

const Education = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  margin-top: 30px;
  margin-bottom: 10px;
  padding: 15px 0;
  @media ${(props) => props.theme.tabletL} {
    flex-direction: column;
    align-items: center;
  }
`;

const EducationInfo = styled.div`
  flex-basis: 50%;
  height: 8rem;
  text-align: left;
  padding-left: 50px;
  @media ${(props) => props.theme.tabletL} {
    padding-left:0;
    margin-bottom:50px;
  }
`;

const EducationDesc = styled.div`
  flex-basis: 45%;
  min-height: 8rem;
  color: var(--font);
`;

const EducationDegree = styled.p`
  line-height: 1.6;
  text-align: left;
  font-weight: 400;
`

const EducationSchool = styled.h3`
  font-size: 2.2rem;
`

const EducationYear = styled.h4`
`;


const Skill = () => {
  return (
    <Container id="skill">

      <Title className="title">
        <TitleHeader className="section-title">Skill</TitleHeader>
        <TitleDesc>"If you are not willing to risk the usual,<br/>You will have to Settle for the Ordinary"</TitleDesc>
        <TitleDesc>- Jim Rohn-</TitleDesc>
      </Title>
      <Items>
        <ItemTitle>education</ItemTitle>
        <Education>
          <EducationInfo>
            <EducationSchool>Seoul Nat'l University</EducationSchool>
            <EducationYear>2015 - present</EducationYear>
          </EducationInfo>
          <EducationDesc>
            <EducationDegree>
              B.S. Mechanical and Aerospace Engineering <br/>
              B.S. Business Administration
            </EducationDegree>
          </EducationDesc>
        </Education>
      </Items>
      <Items className="items">
        <ItemTitle>Programming</ItemTitle>
        <SkillList className="itemlist" id="programming">
          <SkillSet toolImg={html} toolName="HTML" level='4'/>
          <SkillSet toolImg={css} toolName="CSS" level='4'/>
          <SkillSet toolImg={javascript} toolName="JavaScript" level='3'/>
          <SkillSet toolImg={php} toolName="PHP" level='3'/>
          <SkillSet toolImg={mysql} toolName="MySQL" level='3'/>
          <SkillSet toolImg={mongodb} toolName="MongoDB" level='2'/>
          <SkillSet toolImg={express} toolName="Express.js" level='2'/>
          <SkillSet toolImg={nodejs} toolName="Node.js" level='2'/>
          <SkillSet toolImg={python} toolName="Python" level='2'/>
          <SkillSet toolImg={react} toolName="React.js" level='3'/>
        </SkillList>
        <ItemTitle>Design</ItemTitle>
        <SkillList className="itemlist" id="design">
          <SkillSet toolImg={indesign} toolName="Indesign" level='4'/>
          <SkillSet toolImg={premier} toolName="Premier" level='3'/>
          <SkillSet toolImg={photoshop} toolName="Photoshop" level='2'/>
          <SkillSet toolImg={illustrator} toolName="Illustrator" level='1'/>
        </SkillList>
        <ItemTitle>Language</ItemTitle>
        <SkillList className="itemlist" id="design">
          <SkillSet toolImg={south_korea} toolName="한국어" level='5'/>
          <SkillSet toolImg={china} toolName="漢文" level='4'/>
          <SkillSet toolImg={united_states} toolName="English" level='4'/>
          <SkillSet toolImg={japan} toolName="日本語" level='3'/>
          <SkillSet toolImg={spains} toolName="Español" level='1'/>
        </SkillList>
        <ItemTitle>Office & Cowork</ItemTitle>
        <SkillList className="itemlist" id="design">
          <SkillSet toolImg={excel} toolName="Excel" level='5'/>
          <SkillSet toolImg={hancom} toolName="Hancom" level='5'/>
          <SkillSet toolImg={word} toolName="MS Word" level='4'/>
          <SkillSet toolImg={powerpoint} toolName="Powerpoint" level='4'/>
          <SkillSet toolImg={notion} toolName="Notion" level='4'/>
          <SkillSet toolImg={github} toolName="Github" level='3'/>
          <SkillSet toolImg={gsuit} toolName="G suite" level='4'/>
          <SkillSet toolImg={slack} toolName="Slack" level='4'/>
          <SkillSet toolImg={surge} toolName="Surge" level='4'/>
          <SkillSet toolImg={vercel} toolName="Vercel" level='4'/>
        </SkillList>
      </Items>
    </Container>
  )
};

export default Skill;