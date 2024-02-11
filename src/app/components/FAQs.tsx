import styled, { css } from "styled-components";
import {
  applications_faqs,
  hackupc_faqs,
  teams_faqs,
  travel_faqs,
} from "@/app/data/faqs_data";
import parse from "html-react-parser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import {
  MobileBreakpoint,
  Primary100,
  Secondary500,
  SpacingL,
  SpacingM,
  SpacingS,
  SpacingXS,
  SpacingXXS,
} from "@/app/genericComponents/tokens";
import { Section } from "@/app/genericComponents/General";
import {
  BlockTitle,
  Body,
  BodyBold,
  BodyLink,
  SectionTitle,
} from "@/app/genericComponents/Fonts";
import { AnswerOptions } from "@/app/data/interfaces";

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
  gap: ${SpacingS};
`;

const Question = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: ${SpacingS};
`;

const QuestionTitle = styled(BodyBold)`
  margin-bottom: ${SpacingXS};
  cursor: pointer;
`;

const LastBlock = styled.div`
  text-align: center;
  margin-top: ${SpacingM};
`;

const QuestionAnswer = styled(Body)<{ isVisible: boolean }>`
  transform-origin: top;
  transition:
    transform 0.5s ease,
    opacity 0.5s ease;
  transform: scaleY(0);
  opacity: 0;
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
  cursor: pointer;
  margin-top: ${SpacingXXS};
`;

function renderAnswer(answers: AnswerOptions[]) {
  return answers.map((answer, index) => {
    switch (answer.type) {
      case "Link":
        return (
          <BodyLink key={index} href={answer.link} rel="noopener noreferrer">
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
    <Section>
      <SectionTitle>FAQs</SectionTitle>
      <Split>
        <ColumnsQuestions>
          <QuestionsBlock>
            <BlockTitle color={Secondary500}>About HackUPC</BlockTitle>
            {hackupc_faqs.map((faq) => (
              <Question key={faq.id}>
                <FontAwesomeIconStyled
                  icon={activeFaqId === faq.id ? faMinus : faPlus}
                  color={activeFaqId === faq.id ? Secondary500 : Primary100}
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
          <QuestionsBlock>
            <BlockTitle color={Secondary500}>Travel Reimbursement</BlockTitle>
            {travel_faqs.map((faq) => (
              <Question key={faq.id}>
                <FontAwesomeIconStyled
                  icon={activeFaqId === faq.id ? faMinus : faPlus}
                  color={activeFaqId === faq.id ? Secondary500 : Primary100}
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
        </ColumnsQuestions>
        <ColumnsQuestions>
          <QuestionsBlock>
            <BlockTitle color={Secondary500}>Applications</BlockTitle>
            {applications_faqs.map((faq) => (
              <Question key={faq.id}>
                <FontAwesomeIconStyled
                  icon={activeFaqId === faq.id ? faMinus : faPlus}
                  color={activeFaqId === faq.id ? Secondary500 : Primary100}
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
          <QuestionsBlock>
            <BlockTitle color={Secondary500}>Teams</BlockTitle>
            {teams_faqs.map((faq) => (
              <Question key={faq.id}>
                <FontAwesomeIconStyled
                  icon={activeFaqId === faq.id ? faMinus : faPlus}
                  color={activeFaqId === faq.id ? Secondary500 : Primary100}
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
        </ColumnsQuestions>
      </Split>
      <LastBlock>
        <BlockTitle color={Secondary500} haveMargin>
          What if I have another question?
        </BlockTitle>
        <Body style={{ paddingBottom: SpacingS }}>
          DM us on instagram or X @hackupc or, if you want to contact us via
          email, drop us a line at{" "}
          <BodyLink href="mailto:contact@hackupc.com">
            contact@hackupc.com
          </BodyLink>
        </Body>
        <Body>
          If your issue is related to Travel Reimbursement, write us at{" "}
          <BodyLink href="mailto:reimbursements@hackupc.com">
            reimbursements@hackupc.com
          </BodyLink>
        </Body>
      </LastBlock>
    </Section>
  );
}
