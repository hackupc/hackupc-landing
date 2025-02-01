import styled from "styled-components";
import Image from "next/image";
import {
  MobileBreakpoint,
} from "@/app/genericComponents/tokens";
import { Body, SectionTitle } from "@/app/genericComponents/Typography";
import { silkscreen } from "@/app/genericComponents/fonts";

const Colors = {
  pink: "#FF6798",
  blue: "#0F0030",
  white: "#FFFFFF",
  black: "#000000",
  lightPink: "#FFB6C1",
  lightBlue: "#F5F5F5",
};

const ProvideSectionWrapper = styled.div`
  background-image: url("/paintball background mobile.png");
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
  padding-top: 130px;

  @media (min-width: ${MobileBreakpoint}) {
    background-image: url("/provide desktop background.png");
    background-size: cover;
    background-position: top;
    background-repeat: no-repeat;
    padding-top: 100px;
  }
`;

const ProvideHeader = styled(SectionTitle)`
  color: ${Colors.white}; /* title color */
  margin-bottom: 30px;
  text-transform: uppercase;
  white-space: pre-line; /* Enable line breaks */
`;

const ProvideBlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
  max-width: 750px;
  margin: auto;
`;

const ProvideBlock = styled.div`
  background-color: ${Colors.pink}; /* Pink background */
  border-radius: 15px;
  padding: 25px;
  text-align: center;
  min-width: 80%;
  border: 6px solid ${Colors.white};

  @media (max-width: ${MobileBreakpoint}) {
    margin: 0 40px;
  }
`;

const ProvideSubTitle = styled.div`
  background-color: ${Colors.blue}; /* Blue background */
  border-radius: 10px;
  padding: 0;
  z-index: 1;
  margin: -23px;
  text-align: center;
  min-width: 45%;
  border: 6px solid ${Colors.pink};
`;

const ProvideBody = styled(Body)`
  font-size: 16px;
  line-height: 1.1;
  color: ${Colors.blue};
  white-space: pre-line; /* Enable line breaks */
`;

const ProvideSubTitleText = styled(Body)`
  font-size: 18px;
  font-weight: bold;
  line-height: 1.5;
  color: ${Colors.white};
`;

const DividerIcon = styled.div`
  width: 174px;
  height: 64px;
  background-image: url("/spacer div.png");
  background-size: 228px 132px;
  background-position: center;
  background-repeat: no-repeat;
`;

const FlipperIconRight = styled(Image)`
  position: relative;
  top: -90px;
  left: 170px;
  transform: scaleX(-1);

  @media (max-width: ${MobileBreakpoint}) {
    left: 30px;
  }
`;

const FlipperIconLeft = styled(Image)`
  position: relative;
  top: -90px;
  right: 170px;
  @media (max-width: ${MobileBreakpoint}) {
    right: 30px;
  }
`;

export default function Provide() {
  return (
    <ProvideSectionWrapper id="provide">
      <ProvideBlockWrapper>
        <ProvideHeader className={silkscreen.className}>
          We Also <br />
          Provide...
        </ProvideHeader>

        <ProvideSubTitle>
          <ProvideSubTitleText>FOOD</ProvideSubTitleText>
        </ProvideSubTitle>
      </ProvideBlockWrapper>
      <ProvideBlockWrapper>
        <ProvideBlock>
          <ProvideBody>
            We’ve got you completely covered, we even have midnight snacks.
            Besides, you can serve yourself with cafeteria snacks.
          </ProvideBody>
        </ProvideBlock>
        <DividerIcon />
        <ProvideSubTitle>
          <ProvideSubTitleText>SLEEPING</ProvideSubTitleText>
        </ProvideSubTitle>
      </ProvideBlockWrapper>
      <ProvideBlockWrapper>
        <ProvideBlock>
          <ProvideBody>
            We will provide air mattresses both nights so you can boost your
            energy levels. Check out the FAQs for more info.
          </ProvideBody>
        </ProvideBlock>
        <ProvideSubTitle>
          <ProvideSubTitleText>SPONSORS</ProvideSubTitleText>
        </ProvideSubTitle>
      </ProvideBlockWrapper>
      <ProvideBlockWrapper>
        <ProvideBlock>
          <ProvideBody>
            You can also visit our sponsors' stands or meet them remotely!
            They'll be available during the day and would love to talk to you!
            (you may even get some swag as well).
          </ProvideBody>
        </ProvideBlock>
        <div>
          <FlipperIconLeft
            src="/pinball flipper2.png"
            alt="flipper 2"
            width={155}
            height={85}
          />
          <FlipperIconRight
            src="/pinball flipper2.png"
            alt="flipper 2"
            width={155}
            height={85}
          />
        </div>
      </ProvideBlockWrapper>
    </ProvideSectionWrapper>
  );
}
