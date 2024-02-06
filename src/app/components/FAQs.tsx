import styled from "styled-components";
import { hackupc_faqs, travel_faqs } from "@/app/data/faqs_data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Section = styled.div`
  width: 100%;
  padding: 50px 0;
`;

const Split = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 25px;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 44px;
  text-align: center;
  line-height: 61px;
`;

const ColumnsQuestions = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 50px;
`;

const QuestionsBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

const BlockTitle = styled.div`
  font-weight: 700;
  font-size: 32px;
  line-height: 46px;
  color: #e23532;
`;

const Question = styled.div`
  margin-top: 25px;
  width: 75%;
`;

const QuestionTitle = styled.div`
  font-weight: 700;
  font-size: 17px;
  line-height: 24px;
`;

const QuestionAnswer = styled.div`
  margin-top: 10px;
  font-size: 17px;
  line-height: 24px;
`;

const QuestionTitleBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default function FAQs() {
  return (
    <Section>
      <Title>FAQs</Title>
      <Split>
        <ColumnsQuestions>
          <QuestionsBlock>
            <BlockTitle>About HackUPC</BlockTitle>
            {hackupc_faqs.map((faq) => (
              <Question key={faq.question}>
                <QuestionTitleBlock>
                  <QuestionTitle>{faq.question}</QuestionTitle>
                  <FontAwesomeIcon icon={["fas", "angle-down"]} />
                </QuestionTitleBlock>
                <QuestionAnswer>{faq.answer}</QuestionAnswer>
              </Question>
            ))}
          </QuestionsBlock>
          <QuestionsBlock>
            <BlockTitle>Travel Reimbursement</BlockTitle>
            {travel_faqs.map((faq) => (
              <Question key={faq.question}>
                <QuestionTitleBlock>
                  <QuestionTitle>{faq.question}</QuestionTitle>
                  <FontAwesomeIcon icon={["fas", "angle-down"]} />
                </QuestionTitleBlock>
                <QuestionAnswer>{faq.answer}</QuestionAnswer>
              </Question>
            ))}
          </QuestionsBlock>
        </ColumnsQuestions>
        <ColumnsQuestions>
          <QuestionsBlock>
            <BlockTitle>Applications</BlockTitle>
          </QuestionsBlock>
          <QuestionsBlock>
            <BlockTitle>Teams</BlockTitle>
          </QuestionsBlock>
        </ColumnsQuestions>
      </Split>
    </Section>
  );
}
