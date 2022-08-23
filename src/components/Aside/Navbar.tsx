import { MdArrowForwardIos } from "react-icons/md";
import styled from "styled-components";
const StyledNavbarWrapper = styled.div`
  height: calc(100vh - 83.25px - 191px);
`;

const StyledNavbar = styled.nav`
  height: 100%;
  overflow: auto;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  padding: 2rem;
  a {
    text-decoration: none;
    color: rgb(29, 29, 29);
  }
`;

interface INavLink {
  title: string;
  fields?: INavLink[];
  url?: string;
}

const navLinks: INavLink[] = [
  {
    title: "Product",
    fields: [
      {
        title: "Features",
        url: "#",
      },
      {
        title: "Channels",
        url: "#",
      },
      {
        title: "Your digital HQ",
        url: "#",
      },
      {
        title: "Integrations",
        url: "#",
      },
      {
        title: "Security",
        url: "#",
      },
      {
        title: "Slack Connect",
        url: "#",
      },
      {
        title: "Customers",
        url: "#",
      },
    ],
  },
  {
    title: "Solutions",
    fields: [],
    url: "#",
  },
  {
    title: "Enterprise",
    fields: [],
    url: "#",
  },
  {
    title: "Resources",
    fields: [],
    url: "#",
  },
  {
    title: "Pricing",
    fields: [],
    url: "#",
  },
];

const StyledList = styled("ul")<{ inner?: boolean }>`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  padding: 0;
  margin: 0;
  list-style: none;
  ${(props) =>
    props.inner && {
      padding: "2rem",
    }};
  a {
    font-weight: ${(props) => props.inner && "400"};
  }
`;

const StyledSignInLink = styled.a`
  margin-top: 2rem;
  display: block;
`;

const ExtendedLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Navbar = () => {
  return (
    <StyledNavbarWrapper>
      <StyledNavbar>
        <StyledList>
          {navLinks.map(({ title, fields, url }) => {
            if (fields && fields.length > 0) {
              return (
                <li key={title}>
                  <ExtendedLink>
                    <span>{title}</span>
                    <MdArrowForwardIos />
                  </ExtendedLink>
                  <StyledList inner>
                    {fields.map(({ title, url }) => {
                      return (
                        <li key={title}>
                          <a href={url || "#"}>{title}</a>
                        </li>
                      );
                    })}
                  </StyledList>
                </li>
              );
            }
            return (
              <li key={title}>
                <a href={url || "#"}>{title}</a>
              </li>
            );
          })}
        </StyledList>
        <StyledSignInLink href="#">Sign in</StyledSignInLink>
      </StyledNavbar>
    </StyledNavbarWrapper>
  );
};

export default Navbar;
