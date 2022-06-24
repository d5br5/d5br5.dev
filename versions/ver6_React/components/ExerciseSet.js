import styled from 'styled-components';

const ExerciseSetItem = styled.div`
  flex-basis: 33%;
  display: flex;
  flex-direction: column;
  color: var(--font);
  margin: 20px 0;
`;

const SVG = styled.svg`
  width: 13px;
  height: 13px;
  fill: var(--high);
  line-height: 1;
  transition: 0.3s ease;
`;

const LocationLink = styled.a`
  font-size: 1.5rem;

  &:hover {
    ${SVG} {
      width: 13px;
      height: 13px;
      fill: gray;
      line-height: 1;
    }
  }
`;

const IMG = styled.div`
  width: 40%;
  margin: 0 auto;
`;

const ExerciseName = styled.h3`
  font-size: 2.5rem;
  margin-top: 20px;
  margin-bottom: 10px;

  @media ${(props) => props.theme.tabletS} {
    font-size: 1.6rem;
  }
`

const ExerciseSet = ({src, name, href, location}) => {
  return <ExerciseSetItem className="exerciseset">
    <IMG><img src={src} alt=""/></IMG>
    <ExerciseName>{name}</ExerciseName>
    <LocationLink target="_blank" href={href} rel="noopener noreferrer">
      <SVG xmlns="http://www.w3.org/2000/svg" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
      </SVG>
      {location}
    </LocationLink>

  </ExerciseSetItem>;
}

export default ExerciseSet;