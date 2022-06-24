import styled from 'styled-components';

const TravelSetItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-basis: 50%;
  margin: 20px 0;
  @media ${(props) => props.theme.tabletS} {
    margin: 15px 0;
  }
  @media ${(props) => props.theme.tabletL} {
    flex-basis: 90%;
  }
`;

const Flag = styled.div`
  flex-basis: 20%;
  @media ${(props) => props.theme.tabletS} {
    flex-basis: 15%;
  }
`;

const Img = styled.img`
  height: initial;
`;

const Desc = styled.div`
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  padding-left: 30px;
  color: var(--font);
`;

const Name = styled.div`
  text-align: left;
  font-size: 2rem;
  font-weight: 600;
  margin-top: 10px;
  @media ${(props) => props.theme.tabletS} {
    margin-top: 0;
  }
`;

const Detail = styled.div`
  text-align: left;
  font-size: 1.3rem;
  margin-top: 10px;
`;


const TravelSet = ({src, country, details}) => {
  return <TravelSetItem>
    <Flag>
      <Img src={src} alt=""/>
    </Flag>
    <Desc>
      <Name>{country}</Name>
      {details.map((detail, index) => <Detail key={index}>{detail}</Detail>)}
    </Desc>
  </TravelSetItem>
}

export default TravelSet;