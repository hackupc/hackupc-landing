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
            <Question>
              <QuestionTitle>What does HackUPC provide?</QuestionTitle>
              <QuestionAnswer>
                HackUPC is free for all accepted hackers. We will provide you
                with Wi-Fi, swag, workspaces, and meals (including breakfast,
                lunch, dinner, and snacks during the night). There will be
                access to the showers in a specific schedule and mattresses to
                relax in sleep-enabled classrooms (there will be not one
                mattress per person).
              </QuestionAnswer>
            </Question>
            <Question>
              <QuestionTitle>What can I build?</QuestionTitle>
              <QuestionAnswer>
                You can build any tech-related project. We do not have
                restrictions over the topic. Some examples are web pages, mobile
                apps, hardware projects, games, an API... Remember that you can
                also use a variety of hardware components, from Arduino kits and
                Raspberry Pi's, to Amazon Echo dots and Myo Arm.
              </QuestionAnswer>
            </Question>
            <Question>
              <QuestionTitle>What should I bring?</QuestionTitle>
              <QuestionAnswer>
                All attendees must bring the following:
                <ul>
                  <li>Valid government ID for admission. </li>
                  <li>
                    Laptop & charger (adapter if you don’t have the same plug as
                    in Spain).
                  </li>
                </ul>
                Other common checklist items include:
                <ul>
                  <li>Sleeping bag</li>
                  <li>
                    Towel, flip-flops, and soap, we encourage all the hackers to
                    take a shower!
                  </li>
                </ul>
                We will send you a more detailed checklist once you’re accepted.
              </QuestionAnswer>
            </Question>
            <Question>
              <QuestionTitle>What are the judging criteria?</QuestionTitle>
              <QuestionAnswer>
                Projects will mainly be judged based on technical difficulty,
                innovation, overall learning experience, and also, on their
                usability and design by a panel of selected judges from the
                industry.
              </QuestionAnswer>
            </Question>
            <Question>
              <QuestionTitle>
                What if I have any dietary restrictions?
              </QuestionTitle>
              <QuestionAnswer>
                Since beta 1.0, we support vegan, vegetarian, gluten-free and
                any type of allergies. Make sure you are specifying your dietary
                in the application form.
              </QuestionAnswer>
            </Question>
            <Question>
              <QuestionTitle>Do you have a code of conduct?</QuestionTitle>
              <QuestionAnswer>
                Yes, here it is: Code of conduct. TL;DR: Be respectful,
                harassment and abuse are never tolerated.
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
