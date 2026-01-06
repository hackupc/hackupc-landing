import styled, { css } from "styled-components";
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

const TitleSpacer = styled.div`
  padding-top: ${SpacingM};
`;

const Split = styled.div`
  display: flex;
  justify-content: center;
  gap: ${SpacingL};

  @media (max-width: ${MobileBreakpoint}) {
    flex-direction: column;
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

const QuestionBox = styled.div`
  display: flex;
  align-items: center;
  padding: ${SpacingXS};
  border-radius: 10px;
  box-shadow: 2px 2px 8px black;
  background-color: #5B5340;
`;

const AnswerInner = styled.div`
  position: relative;
  border: 7px solid #897F6A;
  border-radius: 14px;
  overflow: hidden;
`;

const AnswerImageWrapper = styled.div`
  position: absolute;
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
  color: #5B5340;
  text-align: center;
`;

const AnswerBox = styled.div<{ isVisible: boolean }>`
  overflow: hidden;
  max-height: 0;
  opacity: 0;
  transform-origin: top;
  transition: max-height 0.4s ease, opacity 0.3s ease;

  ${(props) =>
    props.isVisible &&
    css`
      max-height: 1000px; /* suficientemente grande */
      opacity: 1;
      padding: ${SpacingS};
      margin-top: ${SpacingS};
      border-radius: 14px;
      box-shadow: 2px 2px 8px black;
      background-color: #5B5340;
    `}
`;


const QuestionWithPadding = styled(QuestionBox)`
  padding: ${SpacingM};
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
  cursor: pointer;
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
  cursor: pointer;
  color: #FFFFFF;
`;

const BodyLinkStyled = styled(BodyLink)`
  color: #29ABE2;

  &:hover {
    color: #B46F00;
  }

  &:active {
    color: #E2B266;
  }
`;

const LastBlock = styled.div`
  text-align: center;
  margin-top: ${SpacingL};
`;

const BlockTitleStyled = styled(BlockTitle)`
  color: #5B5340;
  background-color: #F0E3D8;
  padding: ${SpacingXS};
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

  const renderFaq = (faq: any) => (
    <Question key={faq.id}>
      <QuestionBox>
        <QuestionTitleWrap>
          <TorchWrapper onClick={() => toggleFaq(faq.id)}>
            {activeFaqId === faq.id && (
              <FireGif src="/fire_move.gif" alt="fire" width={50} height={50} unoptimized />
            )}
            <TorchIcon src="/torch.svg" alt="torch" width={24} height={24} />
          </TorchWrapper>

          <QuestionTitle onClick={() => toggleFaq(faq.id)}>
            {faq.question}
          </QuestionTitle>
        </QuestionTitleWrap>
      </QuestionBox>

      <AnswerBox isVisible={activeFaqId === faq.id}>
        <AnswerInner>
          <AnswerImageWrapper>
            <Image
              src="/innerimage.svg"
              alt="answer image"
              width={500}
              height={500}
            />
          </AnswerImageWrapper>
          <AnswerTextOverlay>
            {renderAnswerOverlay(faq.answer)}
          </AnswerTextOverlay>
        </AnswerInner>
      </AnswerBox>
    </Question>
  );

  return (
    <Section id="faqs">
      <TitleSpacer>
        <SectionTitle className={lora.className}>FAQs</SectionTitle>
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
        <BlockTitleStyled className={lora.className} haveMargin>
          What if I have another question?
        </BlockTitleStyled>
        <QuestionWithPadding>
          <Body style={{ paddingBottom: SpacingS, color: "#FFFFFF" }}>
            DM us on Instagram at @hackupc or, if you want to contact us via
            email, drop us a line at{" "}
            <BodyLinkStyled href="mailto:contact@hackupc.com">
              contact@hackupc.com
            </BodyLinkStyled>
          </Body>
          <Body style={{ color: "#FFFFFF" }}>
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
