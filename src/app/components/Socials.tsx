import styled from "styled-components";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faMedium,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1000px;
  position: relative;
  text-align: center;
  padding: 2rem;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 3rem;
  font-weight: 700;
  display: flex;
  margin: auto;
  padding-bottom: 0.5rem;
`;
const Content = styled.div`
  display: inline-flex;
  white-space: nowrap;
  color: red;
  font-size: 1.75rem;
  font-weight: 600;
  margin: auto;
  padding: 0.5rem 3rem;
`;
const SocialsList = styled.ul`
  padding-top: 1rem;
  position: relative;
  text-align: center;
  display: inline-flex;
`;

const SocialItem = styled.li`
  text-align: center;
  margin-left: 1rem;
  margin-right: 1rem;
  display: flex;
  transition: transform 0.3s cubic-bezier(0.17, 2.55, 0.69, 0.4);
  width: 5rem;
  will-change: transform;
`;

const Image = styled.img`
  width: ${(props) => props.width || "15%"};
  padding-left: 1rem;
`;

export default function Socials() {
  return (
    <ContentWrapper>
      <Title>Stay tuned, and don't miss a bit</Title>
      <Content>
        Check our social media networks.
        <Image
          src="/telescope.svg"
          alt="Logotype of HackersAtUPC"
          width="13%"
        />
      </Content>
      <SocialsList>
        <SocialItem>
          <a
            href="https://twitter.com/hackupc"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
          >
            <FontAwesomeIcon icon={faXTwitter} size="3x" bounce />
          </a>
        </SocialItem>
        <SocialItem>
          <a
            href="https://www.instagram.com/hackupc/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FontAwesomeIcon icon={faInstagram} size="3x" bounce />
          </a>
        </SocialItem>
        <SocialItem>
          <a
            href="https://www.facebook.com/hackupc"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FontAwesomeIcon icon={faFacebook} size="3x" bounce />
          </a>
        </SocialItem>
        <SocialItem>
          <a
            href="mailto:contact@hackupc.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FontAwesomeIcon icon={faEnvelope} size="3x" bounce />
          </a>
        </SocialItem>
        <SocialItem>
          <a
            href="https://www.youtube.com/channel/UCiiRorGg59Xd5Sjj9bjIt-g"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FontAwesomeIcon icon={faYoutube} size="3x" bounce />
          </a>
        </SocialItem>
        <SocialItem>
          <a
            href="https://medium.com/@hackupc"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FontAwesomeIcon icon={faMedium} size="3x" bounce />
          </a>
        </SocialItem>
        <SocialItem>
          <a
            href="https://github.com/hackupc"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FontAwesomeIcon icon={faGithub} size="3x" bounce />
          </a>
        </SocialItem>
      </SocialsList>
    </ContentWrapper>
  );
}
