import styled, { css } from "styled-components";
import {
  applications_faqs,
  hackupc_faqs,
  teams_faqs,
  travel_faqs,
} from "@/app/data/faqs_data";
import Image from "next/image";
import parse from "html-react-parser";
import React, { useState } from "react";
import {
  MobileBreakpoint,
  SpacingL,
  SpacingM,
  SpacingS,
  SpacingXS,
} from "@/app/genericComponents/tokens";
import { Section, SectionBackground } from "@/app/genericComponents/General";
import {
  BlockTitle,
  Body,
  BodyBold,
  BodyLink,
  SectionTitle,
} from "@/app/genericComponents/Typography";
import { AnswerOptions } from "@/app/data/interfaces";

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
  justify-content: flex-start;
  gap: ${SpacingS};
  padding: ${SpacingXS};
  background-color: rgba(1, 1, 1, 0.5);
  border-radius: 10px;
`;

const QuestionTitle = styled(BodyBold)`
  margin-bottom: ${SpacingXS};
  cursor: pointer;
`;

const BrickSection = styled.div`
  align-content: center;
  display: flex;
  justify-content: center;
  margin-bottom: ${SpacingS};
  margin-top: ${SpacingS};
`;

const QuestionAnswer = styled(Body)<{ isVisible: boolean }>`
  transform-origin: top;
  transition:
    transform 0.5s ease,
    opacity 0.5s ease;
  transform: scaleY(0);
  opacity: 0;
  line-height: 1.5rem;
  height: 0;
  visibility: hidden;

  ${(props) =>
    props.isVisible &&
    css`
      transform: scaleY(1);
      opacity: 1;
      height: auto;
      visibility: visible;
    `}
`;

const CustomBackground = styled(SectionBackground)`
  background-image: url("/cloud.svg"),
                    url("/cloud2.svg"),
                    url("/cloud2.svg"),
                    url("/cloud.svg"),
                    url("/cloud.svg"),
                    url("/cloud2.svg");
  background-position: 20% 25%,
                       90% 10%,
                       10% 65%,
                       75% 55%,
                       20% 90%,
                       90% 85%;
  background-repeat: no-repeat;
  background-size: 15%, 
                  20%, 
                  15%, 
                  18%, 
                  13%, 
                  9%;

  @media (max-width: ${MobileBreakpoint}) {
    background-size: 25%,
                    30%,
                    25%,
                    28%,
                    23%,
                    19%;

`;

const Coin = styled(Image)<{ isVisible: boolean }>`
  position: absolute;
  opacity: 0;
  margin-left: 6px;
  width: 20px;
  height: 20px;
  z-index: 1;

  ${(props) =>
    props.isVisible &&
    css`
      animation: coinJump 1s cubic-bezier(0.57, 1.37, 0.41, 0.89) forwards;
    `}

  @keyframes coinJump {
    0% {
      opacity: 1;
      transform: translateY(0%) rotateY(0deg) rotate(0deg);
    }
    100% {
      transform: translateY(-200%) rotateY(180deg) rotate(calc(360deg * 1.5));
    }
  }
`;

function renderAnswer(answers: AnswerOptions[]) {
  return answers.map((answer, index) => {
    switch (answer.type) {
      case "Link":
        return (
          <BodyLink
            key={index}
            href={answer.link}
            rel="noopener noreferrer"
            target="_blank"
          >
            {answer.content}
          </BodyLink>
        );
      case "Enumeration":
        return (
          <>
            <Body style={{ paddingBottom: SpacingXS }}>
              {parse(answer.content)}
            </Body>
            <ol style={{ paddingLeft: SpacingM }}>
              {answer.options?.map((option) => (
                <li style={{ paddingBottom: SpacingXS }} key={option}>
                  {parse(option)}
                </li>
              ))}
            </ol>
          </>
        );
      case "List":
        return (
          <>
            <Body style={{ paddingBottom: SpacingXS }}>
              {parse(answer.content)}
            </Body>
            <ul style={{ paddingLeft: SpacingM }}>
              {answer.options?.map((option) => (
                <li style={{ paddingBottom: SpacingXS }} key={option}>
                  {parse(option)}
                </li>
              ))}
            </ul>
          </>
        );
      default:
        return <span>{parse(answer.content)}</span>;
    }
  });
}

export default function FAQs() {
  const [activeFaqId, setActiveFaqId] = useState<null | number>(null);
  const [showCoin, setShowCoin] = useState<null | number>(null);

  const toggleFaq = (id: number) => {
    if (activeFaqId !== id) {
      setShowCoin(id);
      setTimeout(() => setShowCoin(null), 1000);
    } else {
      setShowCoin(null);
    }
    // If the clicked FAQ is already active, close it, otherwise open the clicked FAQ
    setActiveFaqId(activeFaqId === id ? null : id);
  };

  return (
    <CustomBackground specialBackground={"#29ABE2"} id="faqs">
      <Section>
        <TitleSpacer>
          <SectionTitle>FAQs</SectionTitle>
        </TitleSpacer>
        <Split>
          <ColumnsQuestions>
            <div>
              <BrickSection>
                <Image
                  src="/brick_separator.svg"
                  width={163}
                  height={54}
                  alt="Brick block"
                />
              </BrickSection>
              <QuestionsBlock>
                <BlockTitle color={"white"}>About HackUPC</BlockTitle>
                {hackupc_faqs.map((faq) => (
                  <Question key={faq.id}>
                    <Coin
                      src="/coin.png"
                      width={28}
                      height={28}
                      alt="Coin"
                      isVisible={showCoin === faq.id}
                    />
                    <Image
                      src={
                        activeFaqId === faq.id
                          ? "/used_question_mark_block.svg"
                          : "/question_mark_block.svg"
                      }
                      width={32}
                      height={32}
                      alt="Question Mark Block"
                      onClick={() => toggleFaq(faq.id)}
                      style={{ cursor: "pointer", zIndex: 2 }}
                    />
                    <div>
                      <QuestionTitle onClick={() => toggleFaq(faq.id)}>
                        {faq.question}
                      </QuestionTitle>
                      <QuestionAnswer isVisible={activeFaqId === faq.id}>
                        {renderAnswer(faq.answer)}
                      </QuestionAnswer>
                    </div>
                  </Question>
                ))}
              </QuestionsBlock>
            </div>

            <div>
              <BrickSection>
                <Image
                  src="/brick_separator.svg"
                  width={163}
                  height={54}
                  alt="Brick block"
                />
              </BrickSection>
              <QuestionsBlock>
                <BlockTitle color={"white"}>Travel Reimbursement</BlockTitle>
                {travel_faqs.map((faq) => (
                  <Question key={faq.id}>
                    <Coin
                      src="/coin.png"
                      width={28}
                      height={28}
                      alt="Coin"
                      isVisible={showCoin === faq.id}
                    />
                    <Image
                      src={
                        activeFaqId === faq.id
                          ? "/used_question_mark_block.svg"
                          : "/question_mark_block.svg"
                      }
                      width={32}
                      height={32}
                      alt="Question Mark Block"
                      onClick={() => toggleFaq(faq.id)}
                      style={{ cursor: "pointer", zIndex: 2 }}
                    />
                    <div>
                      <QuestionTitle onClick={() => toggleFaq(faq.id)}>
                        {faq.question}
                      </QuestionTitle>
                      <QuestionAnswer isVisible={activeFaqId === faq.id}>
                        {renderAnswer(faq.answer)}
                      </QuestionAnswer>
                    </div>
                  </Question>
                ))}
              </QuestionsBlock>
            </div>
          </ColumnsQuestions>

          <ColumnsQuestions>
            <div>
              <BrickSection>
                <Image
                  src="/brick_separator.svg"
                  width={163}
                  height={54}
                  alt="Brick block"
                />
              </BrickSection>
              <QuestionsBlock>
                <BlockTitle color={"white"}>Applications</BlockTitle>
                {applications_faqs.map((faq) => (
                  <Question key={faq.id}>
                    <Coin
                      src="/coin.png"
                      width={28}
                      height={28}
                      alt="Coin"
                      isVisible={showCoin === faq.id}
                    />
                    <Image
                      src={
                        activeFaqId === faq.id
                          ? "/used_question_mark_block.svg"
                          : "/question_mark_block.svg"
                      }
                      width={32}
                      height={32}
                      alt="Question Mark Block"
                      onClick={() => toggleFaq(faq.id)}
                      style={{ cursor: "pointer", zIndex: 2 }}
                    />
                    <div>
                      <QuestionTitle onClick={() => toggleFaq(faq.id)}>
                        {faq.question}
                      </QuestionTitle>
                      <QuestionAnswer isVisible={activeFaqId === faq.id}>
                        {renderAnswer(faq.answer)}
                      </QuestionAnswer>
                    </div>
                  </Question>
                ))}
              </QuestionsBlock>
            </div>
            <div>
              <BrickSection>
                <Image
                  src="/brick_separator.svg"
                  width={163}
                  height={54}
                  alt="Brick block"
                />
              </BrickSection>
              <QuestionsBlock>
                <BlockTitle color={"white"}>Teams</BlockTitle>
                {teams_faqs.map((faq) => (
                  <Question key={faq.id}>
                    <Coin
                      src="/coin.png"
                      width={28}
                      height={28}
                      alt="Coin"
                      isVisible={showCoin === faq.id}
                    />
                    <Image
                      src={
                        activeFaqId === faq.id
                          ? "/used_question_mark_block.svg"
                          : "/question_mark_block.svg"
                      }
                      width={32}
                      height={32}
                      alt="Question Mark Block"
                      onClick={() => toggleFaq(faq.id)}
                      style={{ cursor: "pointer", zIndex: 2 }}
                    />
                    <div>
                      <QuestionTitle onClick={() => toggleFaq(faq.id)}>
                        {faq.question}
                      </QuestionTitle>
                      <QuestionAnswer isVisible={activeFaqId === faq.id}>
                        {renderAnswer(faq.answer)}
                      </QuestionAnswer>
                    </div>
                  </Question>
                ))}
              </QuestionsBlock>
            </div>
          </ColumnsQuestions>
        </Split>
      </Section>
    </CustomBackground>
  );
}
