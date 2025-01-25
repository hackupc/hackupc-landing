import styled, { css } from "styled-components";
import {
  applications_faqs,
  hackupc_faqs,
  teams_faqs,
  travel_faqs,
} from "@/app/data/faqs_data";
import Image from "next/image";
import parse from "html-react-parser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import {
  MobileBreakpoint,
  SpacingL,
  SpacingM,
  SpacingS,
  SpacingXS,
  SpacingXXS,
} from "@/app/genericComponents/tokens";
import { SectionBackground } from "@/app/genericComponents/General";
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
  background-color: rgba(1, 1, 1, .5);
  border-radius: 10px;
;
`;

const QuestionTitle = styled(BodyBold)`
  margin-bottom: ${SpacingXS};
  cursor: url("/rocket-fire.png"), auto;
`;


const BrickSection = styled.div`
  align-content: center;
  display: flex;
  justify-content: center;
  margin-bottom: ${SpacingS};
  margin-top: ${SpacingS};
  // on click render animation of mario bros coin, use coin.svg and animate it
  

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

const FontAwesomeIconStyled = styled(FontAwesomeIcon)`
  cursor: url("/rocket-fire.png"), auto;
  padding: ${SpacingXXS} ${SpacingXS};
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

  const toggleFaq = (id: number) => {
    // If the clicked FAQ is already active, close it, otherwise open the clicked FAQ
    setActiveFaqId(activeFaqId === id ? null : id);
  };

  return (
    <SectionBackground specialBackground={"#29ABE2"} id="faqs">
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
                <FontAwesomeIconStyled
                  icon={activeFaqId === faq.id ? faMinus : faPlus}
                  color={activeFaqId === faq.id ? "#E3C3FF" : "white"}
                  onClick={() => toggleFaq(faq.id)}
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
                <FontAwesomeIconStyled
                  icon={activeFaqId === faq.id ? faMinus : faPlus}
                  color={activeFaqId === faq.id ? "#E3C3FF" : "white"}
                  onClick={() => toggleFaq(faq.id)}
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
                <FontAwesomeIconStyled
                  icon={activeFaqId === faq.id ? faMinus : faPlus}
                  color={activeFaqId === faq.id ? "#E3C3FF" : "white"}
                  onClick={() => toggleFaq(faq.id)}
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
                <FontAwesomeIconStyled
                  icon={activeFaqId === faq.id ? faMinus : faPlus}
                  color={activeFaqId === faq.id ? "#E3C3FF" : "white"}
                  onClick={() => toggleFaq(faq.id)}
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
    </SectionBackground>
  );
}
