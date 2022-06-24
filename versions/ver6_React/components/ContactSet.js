import styled from "styled-components";

const SVG = styled.svg`
  width: 35px;
  height: 40px;
  fill: var(--high);
  transition: 0.3s ease;

  @media ${(props) => props.theme.tabletS} {
    width: 25px;
    height: 40px;
  }
`;

const Link = styled.a`
  &:hover {
    ${SVG} {
      fill: gray;
    }
  }
`;

const ContactSetItem = styled.div`
  flex-basis: 15%;
  justify-content: center;
  width: 15%;
  height: 15%;
  margin: 0 auto;
`;

const ContactSet = ({href, icon, path}) => {
  return <ContactSetItem className="item">
    <Link href={href} target="_blank" rel="noopener noreferrer">
      <SVG xmlns="http://www.w3.org/2000/svg" className={`bi bi-${icon}`} viewBox="0 0 16 16">
        <path d={path}/>
      </SVG>
    </Link>
  </ContactSetItem>;
}

export default ContactSet;