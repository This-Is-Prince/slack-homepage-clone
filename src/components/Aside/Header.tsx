import { IoMdClose } from "react-icons/io";
import styled from "styled-components";
import SlackLogo from "../utils/SlackLogo";

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 0.5rem;
`;

const Button = styled.button`
  border: none;
  outline: none;
  background: transparent;
  font-size: 1.5rem;
  cursor: pointer;
`;

const SlackLogoWrapper = styled.a`
  width: 125px;
`;

const AsideHeader = () => {
  return (
    <Header>
      <SlackLogoWrapper href="/">
        <SlackLogo />
      </SlackLogoWrapper>
      <Button>
        <IoMdClose />
      </Button>
    </Header>
  );
};

export default AsideHeader;
