import styled from "styled-components";
import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
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
  margin: auto;
  max-width: 1000px;
  position: relative;
  text-align: center;
  padding: 32px;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 48px;
  font-weight: 700;
  display: flex;
  margin: auto;
  padding-bottom: 8px;
`;
const Content = styled.div`
  display: inline-flex;
  white-space: nowrap;
  color: red;
  font-size: 28px;
  font-weight: 600;
  margin: auto;
  padding: 8px 48px;
`;
const SocialsList = styled.ul`
  position: relative;
  align-items: center;
  display: inline-flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
  padding: 8px 16px;
  border: 1.5px solid #fff;
  border-radius: 32px;
`;

const SocialItem = styled.li`
  text-align: center;
  margin: auto;
  display: flex;
`;

export default function Socials() {
  return (
    <ContentWrapper>
      <Title>Stay tuned, and don't miss a bit</Title>
      <Content>
        Check our social media networks.
        <Image src="/telescope.svg" alt="Telescope" width={40} height={40} />
      </Content>
      <SocialsList>
        <SocialItem>
          <a
            href="https://twitter.com/hackupc"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FontAwesomeIcon icon={faXTwitter} size="3x" />
          </a>
        </SocialItem>
        <SocialItem>
          <a
            href="https://www.instagram.com/hackupc/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FontAwesomeIcon icon={faInstagram} size="3x" />
          </a>
        </SocialItem>
        <SocialItem>
          <a
            href="https://www.facebook.com/hackupc"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FontAwesomeIcon icon={faFacebook} size="3x" />
          </a>
        </SocialItem>
        <SocialItem>
          <a
            href="mailto:contact@hackupc.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
          >
            <FontAwesomeIcon icon={faEnvelope} size="3x" />
          </a>
        </SocialItem>
        <SocialItem>
          <a
            href="https://www.youtube.com/channel/UCiiRorGg59Xd5Sjj9bjIt-g"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Youtube"
          >
            <FontAwesomeIcon icon={faYoutube} size="3x" />
          </a>
        </SocialItem>
        <SocialItem>
          <a
            href="https://medium.com/@hackupc"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Medium"
          >
            <FontAwesomeIcon icon={faMedium} size="3x" />
          </a>
        </SocialItem>
        <SocialItem>
          <a
            href="https://github.com/hackupc"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github"
          >
            <FontAwesomeIcon icon={faGithub} size="3x" />
          </a>
        </SocialItem>
      </SocialsList>
    </ContentWrapper>
  );
}
