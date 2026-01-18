import styled from "styled-components";
import { SpacingL, SpacingM } from "@/app/genericComponents/tokens";
import {
  Body,
  BodyLink,
  SectionTitle,
} from "@/app/genericComponents/Typography";
import { lora, montserrat } from "@/app/genericComponents/fonts";
import { Section } from "@/app/genericComponents/General";

const ProvideBreakpoint = "1080px";

const ProvideSectionWrapper = styled.div`
  padding-top: ${SpacingL};
  padding-bottom: ${SpacingL};
  background-size: cover;
  background-position: center;
  background-repeat: repeat;
`;

const ProvideHeader = styled(SectionTitle)`
  text-transform: uppercase;
  text-align: center;
  color: #000000;
  font-size: 36px;
  font-weight: 400;
  line-height: 1.2;
  margin-bottom: 40px;

  @media (max-width: ${ProvideBreakpoint}) {
    font-size: 30px;
  }
`;

const ProvideWrapper = styled.div`
  display: flex;
  gap: calc(${SpacingM} + 10px);
  justify-content: center;
  align-items: flex-end;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${SpacingM};

  @media (max-width: ${ProvideBreakpoint}) {
    flex-direction: column;
    align-items: center;
    gap: ${SpacingL};
  }
`;

const ProvideCard = styled.div`
  position: relative;
  width: 100%;
  max-width: 360px;

  @media (max-width: ${ProvideBreakpoint}) {
    max-width: 300px;
  }
`;

const ProvideBackground = styled.img`
  width: 105%;
  height: auto;
  display: block;
  margin-left: -2.5%;
`;

const ProvideContent = styled.div`
  position: absolute;
  top: 10%;
  left: 7%;
  right: 7%;
  bottom: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 25px;
  text-align: center;

  @media (max-width: ${ProvideBreakpoint}) {
    top: 6%;
    bottom: 18%;
    padding: 0 28px;
  }
`;

const ProvideLabel = styled.div<{
  $isSponsors?: boolean;
  $isSleeping?: boolean;
}>`
  position: absolute;
  bottom: ${(props) =>
    props.$isSponsors ? "-3px" : props.$isSleeping ? "14%" : "0"};
  left: 0;
  right: 0;
  height: 15.7%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000000;
  font-size: 20px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;

  @media (max-width: ${ProvideBreakpoint}) {
    font-size: 16px;
    height: 16%;
  }
`;

const ProvideBody = styled(Body)`
  font-size: 14px;
  line-height: 1.5;
  color: #000000;
  margin: 0;

  @media (max-width: ${ProvideBreakpoint}) {
    font-size: 13px;
  }
`;

const BodyLinkStyled = styled(BodyLink)`
  color: #000000;
  text-decoration: underline;
`;

export default function Provide() {
  return (
    <ProvideSectionWrapper id="provide">
      <Section>
        <ProvideHeader className={lora.className}>
          We Also Provide
        </ProvideHeader>
        <ProvideWrapper>
          <ProvideCard>
            <ProvideBackground src="/Provide/food.svg" alt="Food" />
            <ProvideContent>
              <ProvideBody className={montserrat.className}>
                We've got you covered, we even have midnight snacks. Throughout
                the event there will be snacks, drinks, and coffee to revive
                your energy.
              </ProvideBody>
            </ProvideContent>
            <ProvideLabel className={montserrat.className}>Food</ProvideLabel>
          </ProvideCard>

          <ProvideCard>
            <ProvideBackground src="/Provide/sleeping.svg" alt="Sleeping" />
            <ProvideContent>
              <ProvideBody className={montserrat.className}>
                We will provide some air mattresses both nights so you may
                descend into a deep slumber. While supplies last! Check out the{" "}
                <BodyLinkStyled href={"#faqs"}>FAQs</BodyLinkStyled> for more
                info.
              </ProvideBody>
            </ProvideContent>
            <ProvideLabel className={montserrat.className} $isSleeping>
              Sleeping
            </ProvideLabel>
          </ProvideCard>

          <ProvideCard>
            <ProvideBackground src="/Provide/sponsors.svg" alt="Sponsors" />
            <ProvideContent>
              <ProvideBody className={montserrat.className}>
                You can also visit our sponsors' stands or meet them remotely!
                They'll be available during the day and would love to talk to
                you! (You might get some swag as well)
              </ProvideBody>
            </ProvideContent>
            <ProvideLabel className={montserrat.className} $isSponsors>
              Sponsors
            </ProvideLabel>
          </ProvideCard>
        </ProvideWrapper>
      </Section>
    </ProvideSectionWrapper>
  );
}
