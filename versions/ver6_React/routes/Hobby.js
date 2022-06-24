import styled from 'styled-components';
import {Container, Title, TitleHeader, TitleDesc, Items, ItemTitle} from '../common';

import {
  macao,
  china,
  hongkong,
  japan,
  north_korea,
  philippines,
  singapore,
  taiwan,
  united_states
} from './images';
import {gymnastics, kettlebell, running} from './images';

import ExerciseSet from "../components/ExerciseSet";
import TravelSet from "../components/TravelSet";

const ExerciseList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-end;
  margin-top: 30px;
  margin-bottom: 10px;
  padding: 15px 0;
  @media ${(props) => props.theme.tabletM} {
    justify-content: center;
  }
`;

const TravelList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Hobby = () => {
  return <Container id="hobby">
    <Title>
      <TitleHeader>Hobby</TitleHeader>
      <TitleDesc>A child who stays only at home is foolish.</TitleDesc>
      <TitleDesc>- An Iceland Proverb - </TitleDesc>
    </Title>
    <Items>
      <ItemTitle>Exercise</ItemTitle>
      <ExerciseList>
        <ExerciseSet src={kettlebell} name="CrossFit"
                     href="http://www.painstorm.co.kr/" location="Painstorm"/>
        <ExerciseSet src={running} name="Running"
                     href="https://map.naver.com/v5/search/%ED%95%9C%EA%B0%95?c=14129258.0796867,4514072.3083808,15,0,0,0,dh"
                     location="Han River"/>
        <ExerciseSet src={gymnastics} name="Gymnastics"
                     href="https://map.naver.com/v5/search/%EB%93%9C%EA%B0%80%EC%B2%B4%ED%94%84/place/37741957?c=14135191.5040073,4507601.4362050,15,0,0,0,dh"
                     location="Tkatchev"/>
      </ExerciseList>

      <ItemTitle>Travel</ItemTitle>
      <TravelList>
        <TravelSet src={japan} country="Japan" details={['Fukuoka (2007, 2008)', 'Osaka (2012)', 'Nagoya (2018)']}/>
        <TravelSet src={china} country="China" details={['Xiamen (2008)', 'Beijing (2012)']}/>
        <TravelSet src={united_states} country="United States" details={['California (2014)']}/>
        <TravelSet src={north_korea} country="North Korea" details={['Mt. Geumgang (2006)']}/>
        <TravelSet src={philippines} country="Philippines" details={['Cebu (2019)']}/>
        <TravelSet src={singapore} country="Singapore" details={['Singapore (2012)']}/>
        <TravelSet src={hongkong} country="Hong Kong" details={['Hong Kong (2017)']}/>
        <TravelSet src={macao} country="Macao" details={['Macao (2017)']}/>
        <TravelSet src={taiwan} country="Taiwan" details={['Taiwan (2017)']}/>
      </TravelList>
    </Items>
  </Container>
}

export default Hobby;