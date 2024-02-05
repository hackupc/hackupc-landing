import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px;
`;

const TimeColumn = styled.div`
  flex-direction: column;
  padding-right: 20px;
  padding-top: 75px;
`;

const ActivityColumn = styled.div`
  width: 70%;
  flex-direction: column;
  padding-right: 20px;
  padding-top: 75px;
`;

const TimeSlot = styled.div`
  margin-bottom: 30px;
`;

const ActivitySlot = styled.div`
  margin-bottom: 48px;
`;

export default function Live() {
  const liveSchedule = [
    { time: "15:00 17:45", activity: "Hacker Registration" },
    { time: "15:00 15:00", activity: "Baggage Registration" },
    { time: "18:00 19:30", activity: "Openning Ceremony" },
    { time: "19:30 22:00", activity: "Dinner: Poke" },
    { time: "20:00 20:20", activity: "Hacking Starts!!!" },
    { time: "20:00 20:00", activity: "BieneCatcher" },
  ];

  return (
    <Container>
      <h2>Friday</h2>

      <div
        style={{ display: "flex", gridTemplateColumns: "repeat(4, 1fr)" }}
      ></div>
      <TimeColumn>
        {liveSchedule.map((item, index) => (
          <TimeSlot key={index}>
            <strong>{item.time}</strong>
          </TimeSlot>
        ))}
      </TimeColumn>

      <ActivityColumn>
        {liveSchedule.map((item, index) => (
          <ActivitySlot key={index}>
            <h3>{item.activity}</h3>
          </ActivitySlot>
        ))}
      </ActivityColumn>
    </Container>
  );
}
