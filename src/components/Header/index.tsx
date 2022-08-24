import { FiSearch } from "react-icons/fi";
import { FaBars } from "react-icons/fa";
import styled from "styled-components";
import SlackLogo from "../utils/SlackLogo";

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.75rem 2rem;
`;

const Button = styled.button`
  border: none;
  outline: none;
  background: transparent;
  font-size: 1.5rem;
  cursor: pointer;
  color: white;
`;

const ButtonWrapper = styled.div`
  display: flex;
  column-gap: 2rem;
`;

const SlackLogoWrapper = styled.a`
  width: 125px;
  path:nth-child(2){
    fill: white;
  }
`;

const AsideHeader = () => {
  return (
    <Header>
      <SlackLogoWrapper href="/">
        <SlackLogo />
      </SlackLogoWrapper>
      <ButtonWrapper>
        <Button>
          <FiSearch />
        </Button>
        <Button>
          <FaBars />
        </Button>
      </ButtonWrapper>
    </Header>
  );
};

export default AsideHeader;
