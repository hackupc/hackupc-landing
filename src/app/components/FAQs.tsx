import styled from "styled-components";

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

export default function FAQs() {
  return (
    <Section>
      <Title>FAQs</Title>
      <Split>
        <ColumnsQuestions>
          <QuestionsBlock>
            <BlockTitle>About HackUPC</BlockTitle>
            <Question>
              <QuestionTitle>What is HackUPC?</QuestionTitle>
              <QuestionAnswer>
                HackUPC is the first student hackathon in Spain. This will be
                our tenth edition with lots of side activities to learn new
                technologies, meet interesting people and have fun. Come and
                make history with us!
              </QuestionAnswer>
            </Question>
            <Question>
              <QuestionTitle>When is HackUPC?</QuestionTitle>
              <QuestionAnswer>
                The opening ceremony starts at 7:00 p.m. on Friday, May, 3rd. We
                expect to finish by 5:00 p.m. on Sunday, May 5th.
              </QuestionAnswer>
            </Question>
            <Question>
              <QuestionTitle>Where is HackUPC?</QuestionTitle>
              <QuestionAnswer>
                HackUPC will take place in UPC’s North Campus FIB buildings (A3,
                A4, A5 and A6) in sunny Barcelona.
              </QuestionAnswer>
            </Question>
          </QuestionsBlock>
          <QuestionsBlock>
            <BlockTitle>Travel Reimbursement</BlockTitle>
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
