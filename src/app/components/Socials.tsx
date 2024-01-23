import styled from "styled-components";

const Content_wrapper = styled.div`
  display: table-row;
  margin: 0 auto;
  max-width: 1000px;
  position: relative;
  text-align: center;
`;

const Title = styled.h2`
  border: 7px solid #fff;
  text-align: center;
  border-radius: 2rem;
  font-size: 3rem;
  font-weight: 700;
  margin: auto;
  padding: 1rem 2rem;
`;
const Content = styled.p`
  #background: #fff;
  border: 3px solid white;
  border-radius: 0 0 2rem 2rem;
  display: inline-flex;
  color: #1cae86;
  font-size: 1.75rem;
  font-weight: 600;
  margin: auto;
  padding: 0.5rem 3rem;
`;
const Socials_list = styled.ul`
  margin-top: 1rem;
  position: relative;
  text-align: center;
  display: inline-flex;
`;

const Social_item = styled.li`
  text-align: center;
  #background: #fff;
  margin-left: 1rem;
  margin-right: 1rem;
  display: block;
  transition: transform 0.3s cubic-bezier(0.17, 2.55, 0.69, 0.4);
  width: 5rem;
  will-change: transform;
`;
export default function Socials() {
  return (
    <Content_wrapper>
      <Title>Stay tuned, and don't miss a bit</Title>
      <Content>Check our social media networks.</Content>
      <Socials_list>
        <Social_item>
          <a
            href="https://x.com/hackupc"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <img src="" alt="Twitter" />
          </a>
        </Social_item>
        <Social_item>
          <a
            href="https://www.instagram.com/hackupc"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <img src="../logos/instagram-logo.svg" alt="Instagram" />
          </a>
        </Social_item>
        <Social_item>
          <a
            href="https://www.facebook.com/hackupc"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <img src="" alt="Facebook" />
          </a>
        </Social_item>
        <Social_item>
          <a href="mailto:contact@hackupc.com" aria-label="Email">
            <img src="" alt="Email" />
          </a>
        </Social_item>
        <Social_item>
          <a
            href="https://www.youtube.com/channel/UCiiRorGg59Xd5Sjj9bjIt-g"
            aria-label="Youtube"
          >
            <img src="" alt="Youtube" />
          </a>
        </Social_item>
        <Social_item>
          <a href="https://medium.com/@hackupc" aria-label="Medium">
            <img src="" alt="Medium" />
          </a>
        </Social_item>
        <Social_item>
          <a href="https://github.com/hackupc" aria-label="Github">
            <img src="" alt="Github" />
          </a>
        </Social_item>
      </Socials_list>
    </Content_wrapper>
  );
}
