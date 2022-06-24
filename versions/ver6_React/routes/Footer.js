import styled from 'styled-components';

const FooterWrap = styled.div`
  background-color: var(--low);
`;

const FooterP = styled.p`
  margin: 0 auto;
  padding-bottom: 20px;
  font-weight: 400;
  font-size: 1.5rem;
  width: max-content;
  letter-spacing: 0.05rem;
  transition: 0.3s ease;

  @media ${(props) => props.theme.tabletS} {
    font-size: 1.2rem;
  }
`;

const FooterLink = styled.a`
  width: max-content;
  transition: 0.3s ease;

  &:hover {
    ${FooterP} {
      color: gray;
    }
  }
`;

const Footer = () => {
  return <FooterWrap className="footer">
    <FooterLink href="https://github.com/d5br5/d5br5.com" target="_blank" rel="noopener noreferrer">
      <FooterP>© 2020-2021. Doh Kim<br/>All Rights Reserved.</FooterP>
    </FooterLink>
    <div style={{width: "50px", margin: "0 auto"}}>
      <FooterLink href="https://www.webfreecounter.com/" target="_blank" rel="noopener noreferrer">
        <img src="https://www.cutercounter.com/hits.php?id=huxkkfpd&nd=6&style=2" alt="hit counter"/></FooterLink>
    </div>
  </FooterWrap>
}

export default Footer;