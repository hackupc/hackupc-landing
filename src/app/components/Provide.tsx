import styled from "styled-components";
import {
  MobileBreakpoint,
  SpacingL,
  SpacingM,
  SpacingS,
} from "@/app/genericComponents/tokens";
import {
  Body,
  BodyLink,
  SectionTitle,
} from "@/app/genericComponents/Typography";
import { silkscreen } from "@/app/genericComponents/fonts";
import { useEffect, useState } from "react";
import { Section } from "@/app/genericComponents/General";

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
  padding-top: ${SpacingL};

  @media (min-width: ${MobileBreakpoint}) {
    background-image: url("/provide desktop background.png");
    background-size: cover;
    background-position: top;
    background-repeat: no-repeat;
  }
`;

const ProvideHeader = styled(SectionTitle)`
  color: ${Colors.white};
  text-transform: uppercase;
  padding-bottom: ${SpacingM};
`;

const ProvideBlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 750px;
  margin: auto;
`;

const ProvideWrapper = styled.div`
  display: flex;
  gap: ${SpacingL};
  flex-direction: column;
  align-items: center;
  margin: auto;
`;

const ProvideBlock = styled.div`
  background-color: ${Colors.pink};
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
  background-color: ${Colors.blue};
  border-radius: 10px;
  padding: 0;
  z-index: 1;
  text-align: center;
  position: absolute;
  min-width: 20%;
  margin-top: -14px;
  border: 6px solid ${Colors.pink};

  @media (max-width: ${MobileBreakpoint}) {
    min-width: 50%;
  }
`;

const ProvideBody = styled(Body)`
  font-size: 16px;
  line-height: 1.1;
  color: ${Colors.blue};
  white-space: pre-line;
`;

const ProvideSubTitleText = styled(Body)`
  font-size: 18px;
  font-weight: bold;
  line-height: 1.5;
  color: ${Colors.white};
`;

const FlipperIcon = styled.img`
  position: relative;
  width: 155px;
  top: -30px;

  @media (max-width: ${MobileBreakpoint}) {
    width: 120px;
  }
`;

const Divider = styled.img`
  margin-top: -${SpacingM};
  margin-bottom: -${SpacingS};
`;

const FlipperIconRight = styled(FlipperIcon)`
  left: 170px;
  transform: scaleX(-1);

  @media (max-width: ${MobileBreakpoint}) {
    left: 30px;
  }
`;

const FlipperIconLeft = styled(FlipperIcon)`
  right: 170px;
  @media (max-width: ${MobileBreakpoint}) {
    right: 30px;
  }
`;

const BodyLinkStyled = styled(BodyLink)`
  color: ${Colors.lightBlue};

  &:hover {
    color: ${Colors.blue};
  }

  &:active {
    color: ${Colors.lightPink};
  }
`;

export default function Provide() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "/divider_-1.svg",
    "/divider_0.svg",
    "/divider_1.svg",
    "/divider_2.svg",
    "/divider_3.svg",
    "/divider_4.svg",
    "/divider_5.svg",
    "/divider_4.svg",
    "/divider_3.svg",
    "/divider_2.svg",
    "/divider_1.svg",
    "/divider_0.svg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 125);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <ProvideSectionWrapper id="provide">
      <Section>
        <ProvideHeader className={silkscreen.className}>
          We Also <br />
          Provide...
        </ProvideHeader>
        <ProvideWrapper>
          <ProvideBlockWrapper>
            <ProvideSubTitle>
              <ProvideSubTitleText>FOOD</ProvideSubTitleText>
            </ProvideSubTitle>
            <ProvideBlock>
              <ProvideBody>
                We’ve got you completely covered, we even have midnight snacks.
                Besides, you can serve yourself with cafeteria snacks.
              </ProvideBody>
            </ProvideBlock>
          </ProvideBlockWrapper>
          <Divider
            src={images[currentImageIndex]}
            alt="divider icon"
            width={200}
            height={100}
          />
          <ProvideBlockWrapper>
            <ProvideSubTitle>
              <ProvideSubTitleText>SLEEPING</ProvideSubTitleText>
            </ProvideSubTitle>
            <ProvideBlock>
              <ProvideBody>
                We will provide air mattresses both nights so you can boost your
                energy levels. Check out the{" "}
                <BodyLinkStyled href={"#faqs"}>FAQs</BodyLinkStyled> for more
                info.
              </ProvideBody>
            </ProvideBlock>
          </ProvideBlockWrapper>
          <ProvideBlockWrapper>
            <ProvideSubTitle>
              <ProvideSubTitleText>NETWORKING</ProvideSubTitleText>
            </ProvideSubTitle>
            <ProvideBlock>
              <ProvideBody>
                You can also visit our sponsors’ stands or meet them remotely!
                They'll be available during the day and would love to talk to
                you! (you may even get some swag as well)
              </ProvideBody>
            </ProvideBlock>
            <div style={{ height: 40 }}>
              <FlipperIconLeft src="/pinball flipper2.png" alt="flipper 2" />
              <FlipperIconRight src="/pinball flipper2.png" alt="flipper 2" />
            </div>
          </ProvideBlockWrapper>
        </ProvideWrapper>
      </Section>
    </ProvideSectionWrapper>
  );
}
