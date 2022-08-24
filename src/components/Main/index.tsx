import styled from "styled-components";
import { FcGoogle } from "react-icons/fc";
import { BsArrowRight } from "react-icons/bs";

const StyledMain = styled.main`
  color: white;
  text-align: center;
`;

const StyledSectionWrapper = styled("div")<{}>`
  background-color: white;
`;

const StyledSection = styled("section")<{ flex?: boolean; rounded?: boolean }>`
  padding: 1.1rem;
  ${(props) =>
    props.flex && {
      padding: "5rem 1.1rem",
      display: "flex",
      flexDirection: "column",
      rowGap: "2rem",
    }}
  ${(props) =>
    props.rounded && {
        paddingBottom: "6rem",
        backgroundColor: "#541554",
      borderBottomLeftRadius: "100px",
      borderBottomRightRadius: "100px",
    }}
`;
const StyledHeading = styled("h1")<{ small?: boolean }>`
  font-size: ${(props) => (props.small ? "2.18rem" : "2.85rem")};
`;

const StyledSpan = styled.span`
  color: #ecb22e;
  margin-right: 5px;
`;

const StyledParagraph = styled.p`
  margin: 1.75rem 0 1.25rem 0;
  font-size: 1.15rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;

const StyledAnchor = styled("a")<{ isGoogle?: boolean; bg?: boolean }>`
  text-decoration: none;
  text-transform: uppercase;
  border-radius: 0.25rem;
  color: #611f69;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 0.8px;
  line-height: 18px;
  background-color: white;
  padding: 1.25rem 2.5rem;
  ${(props) =>
    props.bg && {
      background: "transparent",
      borderRadius: "4px",
      color: "white",
      border: "1px solid white",
    }}
  ${(props) =>
    props.isGoogle && {
      backgroundColor: "#4285f4",
      display: "flex",
      alignItems: "center",
      padding: "0.25rem",
      color: "white",
    }}
  span:first-child {
    padding: 0.75rem;
    font-size: 1.75rem;
    background-color: white;
    border-radius: 2px;
    text-align: center;
  }
  span:last-child {
    flex-grow: 1;
  }
`;

const HeroSection = styled.section`
  padding-top: 2rem;
`;

const VideoWrapper = styled("div")<{ right?: boolean }>`
  display: flex;
  align-items: center;
  overflow: hidden;
  justify-content: ${(props) => (props.right ? "end" : "")};
`;

const Video = styled("video")<{ connected?: boolean }>`
  width: 120%;
  height: 100%;
  ${(props) =>
    props.connected && {
      width: "85%",
    }}
`;

const CompanySection = styled.section`
  padding: 2rem;
  background-color: #f4ede4;
  p {
    color: black;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    line-height: 15.75px;
    letter-spacing: 0.8px;
    margin-bottom: 2rem;
  }
`;
const CompanyImagesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;
const CompanyImageWrapper = styled.div`
  height: 50px;
  img {
    display: block;
    height: 100%;
  }
`;

const TeamSection = styled.section`
  background-color: #f4ede4;
  padding-top: 2rem;
  article {
    padding: 2rem 1rem;
    text-align: left;
    color: black;
    display: flex;
    flex-direction: column;
    row-gap: 1.5rem;
    h2 {
      font-size: 2rem;
      font-weight: 700;
      line-height: 38px;
    }
    p {
      font-size: 18px;
      line-height: 26px;
    }
    a {
      text-decoration: none;
      display: flex;
      align-items: center;
      color: #1264a3;
      column-gap: 0.5rem;
      font-size: 18px;
      span:last-child {
        display: flex;
        align-items: center;
        font-size: 24px;
      }
    }
  }
`;

const WelcomeSection = styled.section``;

const Main = () => {
  return (
    <StyledMain>
      <StyledSection>
        <StyledHeading>Great teamwork starts with a digital HQ</StyledHeading>
        <StyledParagraph>
          <StyledSpan>Slack is free to try for</StyledSpan>
          <span>as long as you like</span>
        </StyledParagraph>
        <ButtonWrapper>
          <StyledAnchor href="#">Sign up with email address</StyledAnchor>
          <StyledAnchor isGoogle href="#">
            <span>
              <FcGoogle />
            </span>
            <span>sign up with google</span>
          </StyledAnchor>
        </ButtonWrapper>
      </StyledSection>
      <HeroSection>
        <VideoWrapper>
          <Video
            src="/hero-product-ui.webm"
            autoPlay
            loop
            muted
            playsInline
          ></Video>
        </VideoWrapper>
      </HeroSection>
      <CompanySection>
        <p>Trusted by companies all over the world</p>
        <CompanyImagesContainer>
          <CompanyImageWrapper>
            <img src="/public/logo-seek@2x.png" alt="seek company logo" />
          </CompanyImageWrapper>
          <CompanyImageWrapper>
            <img src="/public/logo-xero@2x.png" alt="xero company logo" />
          </CompanyImageWrapper>
          <CompanyImageWrapper>
            <img src="/public/rea@2x.png" alt="rea company logo" />
          </CompanyImageWrapper>
          <CompanyImageWrapper>
            <img src="/public/rmit@2x.png" alt="rmit company logo" />
          </CompanyImageWrapper>
          <CompanyImageWrapper>
            <img src="/public/ibm@2x.png" alt="ibm company logo" />
          </CompanyImageWrapper>
          <CompanyImageWrapper>
            <img src="/public/deliveroo@2x.png" alt="deliveroo company logo" />
          </CompanyImageWrapper>
        </CompanyImagesContainer>
      </CompanySection>
      <TeamSection>
        <VideoWrapper>
          <Video
            connected
            src="/connectedness-mobile.webm"
            autoPlay
            loop
            muted
            playsInline
          ></Video>
        </VideoWrapper>
        <article>
          <h2>Bring your team together</h2>
          <p>
            At the heart of Slack are channels: organised spaces for everyone
            and everything that you need for work. In channels, it's easier to
            connect across departments, offices, time zones and even other
            companies.
          </p>
          <a href="#">
            <span>Learn more about channels</span>
            <span>
              <BsArrowRight />
            </span>
          </a>
        </article>
      </TeamSection>
      <TeamSection>
        <VideoWrapper right>
          <Video
            connected
            src="/flexibility-mobile.webm"
            autoPlay
            loop
            muted
            playsInline
          ></Video>
        </VideoWrapper>
        <article>
          <h2>Choose how you want to work</h2>
          <p>
            In Slack, you’ve got all the flexibility to work when, where and how
            it’s best for you. You can easily chat, send audio and video clips,
            or join a huddle to talk things through live.
          </p>
          <a href="#">
            <span>Learn more about flexible communication</span>
            <span>
              <BsArrowRight />
            </span>
          </a>
        </article>
      </TeamSection>
      <TeamSection>
        <VideoWrapper>
          <Video
            connected
            src="/speed-mobile.webm"
            autoPlay
            loop
            muted
            playsInline
          ></Video>
        </VideoWrapper>
        <article>
          <h2>Move faster with your tools in one place</h2>
          <p>
            With your other work apps connected to Slack, you can work faster by
            switching tabs less. And with powerful tools like Workflow Builder,
            you can automate away routine tasks.
          </p>
          <a href="#">
            <span>Learn more about the Slack platform</span>
            <span>
              <BsArrowRight />
            </span>
          </a>
        </article>
      </TeamSection>
      <StyledSectionWrapper>
        <StyledSection flex rounded>
          <StyledHeading small>Welcome to your new digital HQ.</StyledHeading>
          <ButtonWrapper>
            <StyledAnchor href="#">try for free</StyledAnchor>
            <StyledAnchor bg href="#">
              talk to sales
            </StyledAnchor>
          </ButtonWrapper>
        </StyledSection>
      </StyledSectionWrapper>
    </StyledMain>
  );
};

export default Main;
