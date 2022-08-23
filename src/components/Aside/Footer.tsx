import styled from "styled-components";

const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.5rem 1.5rem 2rem 1.5rem;
  box-shadow: rgb(29, 28, 29, 0.04) 0 -10px 12px 0px;
  background-color: white;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;

const Btn = styled("a")<{ bg?: boolean }>`
  font-family: Arial, Helvetica, sans-serif;
  border: 1px solid #611f69;
  border-radius: 4px;
  font-weight: 700;
  padding: 1.25rem 2.5rem;
  color: #611f69;
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  ${(props) =>
    props.bg && {
      color: "white",
      backgroundColor: "#611f69",
    }}
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Btn href="#">Sign in</Btn>
      <Btn href="#" bg>
        Download slack
      </Btn>
    </StyledFooter>
  );
};

export default Footer;
