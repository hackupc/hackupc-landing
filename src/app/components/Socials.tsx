import styled from "styled-components";

const Content_wrapper = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  max-width: 1000px;
  position: relative;
  text-align: center;
`;
const Socials_list = styled.ul`
  align-items: center;
  display: inline-flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
  margin: -0.5rem;
  padding: 0;
`;

const Social_item = styled.li`
  background: #fff;
  border-radius: 100%;
  box-sizing: content-box;
  display: block;
  transition: transform 0.3s cubic-bezier(0.17, 2.55, 0.69, 0.4);
  width: 5rem;
  will-change: transform;
`;

const Title = styled.h2`
  border: 7px solid #fff;
  border-radius: 2rem;
  display: inline-block;
  font-size: 3rem;
  font-weight: 700;
  margin: 0;
  padding: 1rem 2rem;
`;
const Content = styled.p`
  #background: #fff;
  border: solid red;
  border-radius: 0 0 1rem 1rem;
  border-top: 7px;
  #color: #1cae86;
  display: inline-block;
  font-size: 1.75rem;
  font-weight: 600;
  margin: -7px 0 3.25rem;
  padding: 0.5rem 1rem;
`;
export default function Socials() {
  return (
    <div>
      <Content_wrapper>
        <Title>Stay tuned, and don't miss a bit</Title>
        <Content>Check our social media networks.</Content>
      </Content_wrapper>
    </div>
  );
}
