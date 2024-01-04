import styled from "styled-components";

const Card = styled.div`
  border: 1px solid black;
`;

export default function About() {
  return (
    <div>
      <Card>
        The word hackathon is a combination of the words "HACK", standing for
        creative problem-solving, and "MARATHON". These are awesome events full
        of creativity, technology, and passionate tech-related students of
        different skill levels collaborating and creating. During a certain
        period of time, attendees work in TEAMS to develop apps, games, robots…
        literally anything you want to BUILD & LEARN about!
      </Card>
      <Card>
        {" "}
        HackUPC is the first student hackathon in Spain. Once a year, we aim to
        provide a space for students of all experience levels from all around
        the world where they can improve and learn new skills, meet awesome
        people, and overall have a great experience! This year's edition will be
        the first since the pandemic to have a FULLY IN-PERSON format, meaning
        that you can only participate by physically attending the event.
      </Card>
    </div>
  );
}
