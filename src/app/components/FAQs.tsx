import styled from "styled-components";
import {
  applications_faqs,
  hackupc_faqs,
  teams_faqs,
  travel_faqs,
} from "@/app/data/faqs_data";
import parse from "html-react-parser";
import React, { useState } from "react";
import Image from "next/image";
import {
  MobileBreakpoint,
  SpacingL,
  SpacingM,
  SpacingS,
  SpacingXS,
} from "@/app/genericComponents/tokens";
import { Section } from "@/app/genericComponents/General";
import {
  BlockTitle,
  Body,
  BodyBold,
  BodyLink,
  SectionTitle,
} from "@/app/genericComponents/Typography";
import { AnswerOptions } from "@/app/data/interfaces";
import { lora } from "@/app/genericComponents/fonts";

type Faq = {
  id: number;
  question: string;
  answer: AnswerOptions[];
};

const TitleSpacer = styled.div`
  padding-top: ${SpacingM};
  padding-bottom: ${SpacingM};
  width: 100%;
`;

const SectionTitleStyled = styled(SectionTitle)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: ${SpacingM} clamp(4rem, 15vw, 12rem);
  background-image: url("/faqs.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  width: 100%;
  max-width: 700px;

  @media (max-width: ${MobileBreakpoint}) {
    padding: ${SpacingS} clamp(2rem, 20vw, 6rem);
    background-image: url("/faqsmobile.svg");
  }
`;

const Split = styled.div`
  display: flex;
  justify-content: center;
  gap: ${SpacingL};

  @media (max-width: ${MobileBreakpoint}) {
    flex-direction: column;
    gap: ${SpacingS};
  }
`;

const ColumnsQuestions = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${SpacingL};
  width: 45%;

  @media (max-width: ${MobileBreakpoint}) {
    width: 100%;
  }
`;

const QuestionsBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${SpacingS};
  gap: ${SpacingS};
`;

const Question = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${SpacingS};
`;

const FaqWrapper = styled.div`
  position: relative;
`;

const QuestionBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: ${SpacingXS};
  border-radius: 10px;
  box-shadow: 2px 2px 8px black;
  background-color: #5b5340;
  cursor: pointer;
`;

const SupportImage = styled(Image)<{
  side: "left" | "right";
  isVisible: boolean;
}>`
  position: absolute;
  bottom: -47.5px;
  z-index: 1;
  pointer-events: none;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transition: opacity 0.3s ease;

  ${(props) =>
    props.side === "left"
      ? `
          left: 75px;
        `
      : `
          right: 75px;
        `}
`;

const AnswerBox = styled.div<{ isVisible: boolean }>`
  max-height: 0;
  opacity: 0;
  transform-origin: top;
  transition:
    max-height 0.4s ease,
    opacity 0.3s ease;

  ${(props) =>
    props.isVisible &&
    `
      max-height: 10000px;
      opacity: 1;
      padding: ${SpacingXS};
      margin-top: ${SpacingM};
      border-radius: 14px;
      box-shadow: 2px 2px 8px black;
      background-color: #5b5340;
    `}
`;

const AnswerInner = styled.div`
  position: relative;
  border: 7px solid #897f6a;
  border-radius: 14px;
  overflow: hidden;
`;

const AnswerImageWrapper = styled.div`
  inset: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
`;

const AnswerTextOverlay = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${SpacingS};
  padding: ${SpacingM};
  color: #5b5340;
  text-align: center;
  z-index: 2;
`;

const QuestionWithPadding = styled(QuestionBox)`
  padding: ${SpacingM};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${SpacingS};
`;

const QuestionTitleWrap = styled.div`
  display: flex;
  align-items: center;
  gap: ${SpacingS};
`;

const TorchWrapper = styled.div`
  position: relative;
  width: 24px;
  height: 40px;
`;

const FireGif = styled(Image)`
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translateX(-50%);
  pointer-events: none;
`;

const TorchIcon = styled(Image)`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
`;

const QuestionTitle = styled(BodyBold)`
  color: #ffffff;
`;

const BodyLinkStyled = styled(BodyLink)`
  color: #29abe2;

  &:hover {
    color: #b46f00;
  }

  &:active {
    color: #e2b266;
  }
`;

const LastBlock = styled.div`
  margin-top: ${SpacingL};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${SpacingM};
`;

const BlockTitleStyled = styled(BlockTitle)`
  color: #5b5340;
  background-color: #f0e3d8;
  font-weight: bold;
  border-radius: 11px;
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  width: fit-content;
  padding: ${SpacingS} ${SpacingM};
  padding-right: ${SpacingL};

  @media (max-width: ${MobileBreakpoint}) {
    border-radius: 0 11px 11px 0;
    margin-left: calc(-50vw + 50%);
    margin-top: ${SpacingS};
    flex-direction: column;
    align-self: flex-start;
    padding-right: ${SpacingM};
    padding-left: ${SpacingL};

    &:first-child {
      margin-top: 0;
    }
  }
`;

const LastBlockTitle = styled(BlockTitleStyled)`
  width: auto;
  justify-content: center;
  text-align: center;
  padding-left: ${SpacingM};
  padding-right: ${SpacingM};
  border-radius: 11px;

  @media (max-width: ${MobileBreakpoint}) {
    align-self: center;
    justify-content: center;
    text-align: center;
    margin-left: 0;
    padding: ${SpacingXS} ${SpacingM};
  }
`;

function renderAnswerOverlay(answers: AnswerOptions[]) {
  return answers.map((answer, index) => {
    switch (answer.type) {
      case "Link":
        return (
          <BodyLinkStyled key={index} href={answer.link} target="_blank">
            {answer.content}
          </BodyLinkStyled>
        );
      case "Enumeration":
        return (
          <div key={index}>
            <Body style={{ color: "#5B5340" }}>{parse(answer.content)}</Body>
            <ol>
              {answer.options?.map((option) => (
                <li key={option}>
                  <Body style={{ color: "#5B5340" }}>{parse(option)}</Body>
                </li>
              ))}
            </ol>
          </div>
        );
      case "List":
        return (
          <div key={index}>
            <Body style={{ color: "#5B5340" }}>{parse(answer.content)}</Body>
            <ul>
              {answer.options?.map((option) => (
                <li key={option}>
                  <Body style={{ color: "#5B5340" }}>{parse(option)}</Body>
                </li>
              ))}
            </ul>
          </div>
        );
      default:
        return (
          <Body key={index} style={{ color: "#5B5340" }}>
            {parse(answer.content)}
          </Body>
        );
    }
  });
}

export default function FAQs() {
  const [activeFaqId, setActiveFaqId] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setActiveFaqId(activeFaqId === id ? null : id);
  };

  const renderFaq = (faq: Faq) => (
    <Question key={faq.id}>
      <FaqWrapper>
        <QuestionBox onClick={() => toggleFaq(faq.id)}>
          <SupportImage
            src="/suport.svg"
            alt="support left"
            width={15}
            height={55}
            side="left"
            isVisible={activeFaqId === faq.id}
          />
          <SupportImage
            src="/suport.svg"
            alt="support right"
            width={15}
            height={55}
            side="right"
            isVisible={activeFaqId === faq.id}
          />
          <QuestionTitleWrap>
            <TorchWrapper>
              {activeFaqId === faq.id && (
                <FireGif
                  src="/fire_move.gif"
                  alt="fire"
                  width={50}
                  height={50}
                  unoptimized
                />
              )}
              <TorchIcon src="/torch.svg" alt="torch" width={24} height={24} />
            </TorchWrapper>
            <QuestionTitle>{faq.question}</QuestionTitle>
          </QuestionTitleWrap>
        </QuestionBox>

        <AnswerBox isVisible={activeFaqId === faq.id}>
          <AnswerInner>
            <AnswerImageWrapper>
              <Image src="/innerimage.svg" alt="answer image" fill />
            </AnswerImageWrapper>
            <AnswerTextOverlay>
              {renderAnswerOverlay(faq.answer)}
            </AnswerTextOverlay>
          </AnswerInner>
        </AnswerBox>
      </FaqWrapper>
    </Question>
  );

  return (
    <Section id="faqs">
      <TitleSpacer>
        <SectionTitleStyled className={lora.className}>FAQs</SectionTitleStyled>
      </TitleSpacer>

      <Split>
        <ColumnsQuestions>
          <QuestionsBlock>
            <BlockTitleStyled>About HackUPC</BlockTitleStyled>
            {hackupc_faqs.map(renderFaq)}
          </QuestionsBlock>

          <QuestionsBlock>
            <BlockTitleStyled>Travel Reimbursement</BlockTitleStyled>
            {travel_faqs.map(renderFaq)}
          </QuestionsBlock>
        </ColumnsQuestions>

        <ColumnsQuestions>
          <QuestionsBlock>
            <BlockTitleStyled>Applications</BlockTitleStyled>
            {applications_faqs.map(renderFaq)}
          </QuestionsBlock>

          <QuestionsBlock>
            <BlockTitleStyled>Teams</BlockTitleStyled>
            {teams_faqs.map(renderFaq)}
          </QuestionsBlock>
        </ColumnsQuestions>
      </Split>

      <LastBlock>
        <LastBlockTitle className={lora.className}>
          What if I have another question?
        </LastBlockTitle>

        <QuestionWithPadding>
          <Body style={{ color: "#FFFFFF", textAlign: "center" }}>
            DM us on Instagram at @hackupc or, if you want to contact us via
            email, drop us a line at{" "}
            <BodyLinkStyled href="mailto:contact@hackupc.com">
              contact@hackupc.com
            </BodyLinkStyled>
          </Body>

          <Body style={{ color: "#FFFFFF", textAlign: "center" }}>
            If your issue is related to Travel Reimbursement, write us at{" "}
            <BodyLinkStyled href="mailto:reimbursements@hackupc.com">
              reimbursements@hackupc.com
            </BodyLinkStyled>
          </Body>
        </QuestionWithPadding>
      </LastBlock>
    </Section>
  );
}
