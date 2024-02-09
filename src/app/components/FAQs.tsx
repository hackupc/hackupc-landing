import styled from "styled-components";
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
} from "@/app/genericComponents/tokens";
import { Section } from "@/app/genericComponents/General";
import {
  BlockTitle,
  Body,
  BodyBold,
  BodyLink,
  SectionTitle,
} from "@/app/genericComponents/Fonts";

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
`;

const LastBlock = styled.div`
  text-align: center;
  margin-top: ${SpacingM};
`;

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
              <Question key={faq.id} onClick={() => toggleFaq(faq.id)}>
                <FontAwesomeIcon
                  icon={activeFaqId === faq.id ? faMinus : faPlus}
                  style={{ marginTop: 4 }}
                  color={activeFaqId === faq.id ? Secondary500 : Primary100}
                />
                <div>
                  <QuestionTitle>{faq.question}</QuestionTitle>
                  {activeFaqId === faq.id && <Body>{parse(faq.answer)}</Body>}
                </div>
              </Question>
            ))}
          </QuestionsBlock>
          <QuestionsBlock>
            <BlockTitle color={Secondary500}>Travel Reimbursement</BlockTitle>
            {travel_faqs.map((faq) => (
              <Question key={faq.id} onClick={() => toggleFaq(faq.id)}>
                <FontAwesomeIcon
                  icon={activeFaqId === faq.id ? faMinus : faPlus}
                  style={{ marginTop: 4 }}
                  color={activeFaqId === faq.id ? Secondary500 : Primary100}
                />
                <div>
                  <QuestionTitle>{faq.question}</QuestionTitle>
                  {activeFaqId === faq.id && <Body>{parse(faq.answer)}</Body>}
                </div>
              </Question>
            ))}
          </QuestionsBlock>
        </ColumnsQuestions>
        <ColumnsQuestions>
          <QuestionsBlock>
            <BlockTitle color={Secondary500}>Applications</BlockTitle>
            {applications_faqs.map((faq) => (
              <Question key={faq.id} onClick={() => toggleFaq(faq.id)}>
                <FontAwesomeIcon
                  icon={activeFaqId === faq.id ? faMinus : faPlus}
                  style={{ marginTop: 4 }}
                  color={activeFaqId === faq.id ? Secondary500 : Primary100}
                />
                <div>
                  <QuestionTitle>{faq.question}</QuestionTitle>
                  {activeFaqId === faq.id && <Body>{parse(faq.answer)}</Body>}
                </div>
              </Question>
            ))}
          </QuestionsBlock>
          <QuestionsBlock>
            <BlockTitle color={Secondary500}>Teams</BlockTitle>
            {teams_faqs.map((faq) => (
              <Question key={faq.id} onClick={() => toggleFaq(faq.id)}>
                <FontAwesomeIcon
                  icon={activeFaqId === faq.id ? faMinus : faPlus}
                  style={{ marginTop: 4 }}
                  color={activeFaqId === faq.id ? Secondary500 : Primary100}
                />
                <div>
                  <QuestionTitle>{faq.question}</QuestionTitle>
                  {activeFaqId === faq.id && <Body>{parse(faq.answer)}</Body>}
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
