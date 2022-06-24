import styled from "styled-components";

const Container = styled.section`
  min-height: 30vh;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin: 0 auto;
  padding : 50px 0;
`;

const Title = styled.div`
  width: 100%;
  margin: 50px auto;
  @media ${(props) => props.theme.tabletS} {
    font-size: 3.5rem;
  }
`;
const TitleHeader = styled.h1`
  font-size: 3.5rem;
  font-size: 4rem;
  color: var(--high);
  text-shadow: -1px 0 var(--low), 0 1px var(--low), 1px 0 var(--low), 0 -1px var(--low);
  margin-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: .2rem;
  text-align: center;
`

const TitleDesc = styled.p`
  font-size: 2rem;
  @media ${(props) => props.theme.tabletS} {
    font-size: 1.5rem;
  }
`;

const Items = styled.div`
  width: 100%;
`;

const ItemTitle = styled.h2`
  text-transform: uppercase;
  font-size: 2.5rem;
  
  text-align: left;
  
  margin : 40px 0 10px 20px;
  
  font-weight: 600;
  text-shadow: -1px 0 var(--low), 0 1px var(--low), 1px 0 var(--low), 0 -1px var(--low);
`;

const Item = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  margin-top: 30px;
  margin-bottom: 10px;
  padding: 15px 0;
`;

export {Container, Title, TitleHeader, TitleDesc, Items, ItemTitle, Item}
