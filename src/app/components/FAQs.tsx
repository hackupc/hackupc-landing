import styled, { css } from "styled-components";
import {
  applications_faqs,
  hackupc_faqs,
  teams_faqs,
  travel_faqs,
} from "@/app/data/faqs_data";

import parse from "html-react-parser";
import React, { useState } from "react";
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
  justify-content: flex-start;
  padding: ${SpacingXS};
  border-radius: 10px;
  box-shadow: 2px 2px 8px black;
`;

const QuestionWithPadding = styled(Question)`
  padding: ${SpacingM};
`;

const QuestionTitleWrap = styled.div`
  display: flex;
  align-items: center;
  gap: ${SpacingS};
`;

const QuestionTitle = styled(BodyBold)`
  cursor: pointer;
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
      padding: ${SpacingS};
    `}
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
  text-align: center;
  margin-top: ${SpacingL};
`;

const BlockTitleStyled = styled(BlockTitle)`
  text-shadow: 2px 2px 5px black;
`;

const SectionTitleStyled = styled(SectionTitle)`
  text-shadow: 2px 2px 5px black;
`;

function renderAnswer(answers: AnswerOptions[]) {
  return answers.map((answer, index) => {
    switch (answer.type) {
      case "Link":
        return (
          <BodyLinkStyled
            key={index}
            href={answer.link}
            rel="noopener noreferrer"
            target="_blank"
          >
            {answer.content}
          </BodyLinkStyled>
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
    setActiveFaqId(activeFaqId === id ? null : id);
  };

  return (
    <Section id="faqs">
      <TitleSpacer>
        <SectionTitleStyled className={lora.className}>FAQs</SectionTitleStyled>
      </TitleSpacer>
      <Split>
        <ColumnsQuestions>
          <div>
            <QuestionsBlock>
              <BlockTitleStyled className={lora.className}>
                About HackUPC
              </BlockTitleStyled>
              {hackupc_faqs.map((faq) => (
                <Question key={faq.id}>
                  <QuestionTitleWrap>
                    <span
                      style={{
                        cursor: "pointer",
                        fontSize: "20px",
                        width: "25px",
                        textAlign: "center",
                      }}
                      onClick={() => toggleFaq(faq.id)}
                    >
                      {activeFaqId === faq.id ? "−" : "+"}
                    </span>
                    <QuestionTitle onClick={() => toggleFaq(faq.id)}>
                      {faq.question}
                    </QuestionTitle>
                  </QuestionTitleWrap>
                  <QuestionAnswer isVisible={activeFaqId === faq.id}>
                    {renderAnswer(faq.answer)}
                  </QuestionAnswer>
                </Question>
              ))}
            </QuestionsBlock>
          </div>

          <div>
            <QuestionsBlock>
              <BlockTitleStyled className={lora.className}>
                Travel Reimbursement
              </BlockTitleStyled>
              {travel_faqs.map((faq) => (
                <Question key={faq.id}>
                  <QuestionTitleWrap>
                    <span
                      style={{
                        cursor: "pointer",
                        fontSize: "20px",
                        width: "25px",
                        textAlign: "center",
                      }}
                      onClick={() => toggleFaq(faq.id)}
                    >
                      {activeFaqId === faq.id ? "−" : "+"}
                    </span>
                    <QuestionTitle onClick={() => toggleFaq(faq.id)}>
                      {faq.question}
                    </QuestionTitle>
                  </QuestionTitleWrap>
                  <QuestionAnswer isVisible={activeFaqId === faq.id}>
                    {renderAnswer(faq.answer)}
                  </QuestionAnswer>
                </Question>
              ))}
            </QuestionsBlock>
          </div>
        </ColumnsQuestions>

        <ColumnsQuestions>
          <div>
            <QuestionsBlock>
              <BlockTitleStyled className={lora.className}>
                Applications
              </BlockTitleStyled>
              {applications_faqs.map((faq) => (
                <Question key={faq.id}>
                  <QuestionTitleWrap>
                    <span
                      style={{
                        cursor: "pointer",
                        fontSize: "20px",
                        width: "25px",
                        textAlign: "center",
                      }}
                      onClick={() => toggleFaq(faq.id)}
                    >
                      {activeFaqId === faq.id ? "−" : "+"}
                    </span>
                    <QuestionTitle onClick={() => toggleFaq(faq.id)}>
                      {faq.question}
                    </QuestionTitle>
                  </QuestionTitleWrap>
                  <QuestionAnswer isVisible={activeFaqId === faq.id}>
                    {renderAnswer(faq.answer)}
                  </QuestionAnswer>
                </Question>
              ))}
            </QuestionsBlock>
          </div>
          <div>
            <QuestionsBlock>
              <BlockTitleStyled className={lora.className}>
                Teams
              </BlockTitleStyled>
              {teams_faqs.map((faq) => (
                <Question key={faq.id}>
                  <QuestionTitleWrap>
                    <span
                      style={{
                        cursor: "pointer",
                        fontSize: "20px",
                        width: "25px",
                        textAlign: "center",
                      }}
                      onClick={() => toggleFaq(faq.id)}
                    >
                      {activeFaqId === faq.id ? "−" : "+"}
                    </span>
                    <QuestionTitle onClick={() => toggleFaq(faq.id)}>
                      {faq.question}
                    </QuestionTitle>
                  </QuestionTitleWrap>
                  <QuestionAnswer isVisible={activeFaqId === faq.id}>
                    {renderAnswer(faq.answer)}
                  </QuestionAnswer>
                </Question>
              ))}
            </QuestionsBlock>
          </div>
        </ColumnsQuestions>
      </Split>

      <LastBlock>
        <BlockTitleStyled className={lora.className} haveMargin>
          What if I have another question?
        </BlockTitleStyled>
        <QuestionWithPadding>
          <Body style={{ paddingBottom: SpacingS }}>
            DM us on Instagram at @hackupc or, if you want to contact us via
            email, drop us a line at{" "}
            <BodyLinkStyled href="mailto:contact@hackupc.com">
              contact@hackupc.com
            </BodyLinkStyled>
          </Body>
          <Body>
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
