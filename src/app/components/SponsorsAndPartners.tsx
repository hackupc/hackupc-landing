//import styled from "styled-components";
import styled, { keyframes } from "styled-components";
import { Section } from "@/app/genericComponents/General";
import { silkscreen } from "@/app/genericComponents/fonts";
import {
  MaxScreenSize,
  MobileBreakpoint,
  SpacingL,
  SpacingM,
  SpacingS,
} from "@/app/genericComponents/tokens";

import {
  GigaBox,
  KiloBox,
  MegaBox,
  MiliBox,
  SponsorLogo,
  SponsorUnrevealed,
  TeraBox,
} from "@/app/genericComponents/Sponsors";
import { SectionTitle } from "../genericComponents/Typography";

const Colors = {
  Background: "#000000",
  Elements: "#FFFFFF",
  Rectangles: "#D9D9D9",
};

const SponsorsAndPartnersContainer = styled(Section)`
  position: relative;
  padding: ${SpacingL} 0 ${SpacingL} 0;
  gap: ${SpacingM};
  max-width: 100%;
  background-color: ${Colors.Background};
  z-index: 0;
`;

export const StyledSectionTitle = styled(SectionTitle)`
  z-index: 2;
`;

const SponsorsBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  align-content: center;
  margin-bottom: ${SpacingL};
  max-width: ${MaxScreenSize};
  padding: 0 ${SpacingM};
  z-index: 2;
`;

const PartnersBlock = styled.div`
  padding: 0 ${SpacingM};
  max-width: ${MaxScreenSize};
  z-index: 2;
`;

const SponsorRow = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${SpacingS};
  margin-bottom: ${SpacingM};
  z-index: 2;
`;

const moveBall = keyframes`
  0% {top: 75%; left: 7%;}
  10% {top: 50%; left: 93%;}
  20% {top: 92%; left: 7%;}
  30% {top: 75%; left: 93%;}
  40% {top: 50%; left: 7%;}
  50% {top: 25%; left: 93%;}
  60% {top: 15%; left: 7%;}
  70% {top: 25%; left: 93%;}
  80% {top: 60%; left: 7%;}
  90% {top: 50%; left: 93%;}
  100% {top: 75%; left: 7%;}
`;

const moveBallMobile = keyframes`
  0% {top: 75%; left: 11%;}
  10% {top: 50%; left: 89%;}
  20% {top: 92%; left: 11%;}
  30% {top: 75%; left: 89%;}
  40% {top: 50%; left: 11%;}
  50% {top: 25%; left: 89%;}
  60% {top: 15%; left: 11%;}
  70% {top: 25%; left: 89%;}
  80% {top: 60%; left: 11%;}
  90% {top: 50%; left: 89%;}
  100% {top: 75%; left: 11%;}
`;

const moveLeftLine = keyframes`
  0% {top: 70%;}
  10% {top: 65%;}
  20% {top: 78%;}
  30% {top: 60%;}
  40% {top: 38%;}
  50% {top: 45%;}
  60% {top: 10%;}
  70% {top: 45%;}
  80% {top: 52%;}
  90% {top: 45%;}
  100% {top: 70%;}
`;

const moveLeftLineMobile = keyframes`
  0% {top: 70%;}
  10% {top: 65%;}
  20% {top: 84%;}
  30% {top: 60%;}
  40% {top: 47%;}
  50% {top: 45%;}
  60% {top: 12%;}
  70% {top: 45%;}
  80% {top: 57%;}
  90% {top: 45%;}
  100% {top: 70%;}
`;

const moveRightLine = keyframes`
  0% {top: 60%;}
  10% {top: 43%;}
  20% {top: 50%;}
  30% {top: 70%;}
  40% {top: 45%;}
  50% {top: 20%;}
  60% {top: 50%;}
  70% {top: 20%;}
  80% {top: 55%;}
  90% {top: 38%;}
  100% {top: 60%;}
`;

const moveRightLineMobile = keyframes`
  0% {top: 60%;}
  10% {top: 45%;}
  20% {top: 55%;}
  30% {top: 71%;}
  40% {top: 45%;}
  50% {top: 16%;}
  60% {top: 50%;}
  70% {top: 18%;}
  80% {top: 55%;}
  90% {top: 47%;}
  100% {top: 60%;}
`;

const Ball = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  background-color: white;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  animation: ${moveBall} 30s linear infinite;

  @media (max-width: ${MobileBreakpoint}) {
    animation: ${moveBallMobile} 30s linear infinite;
  }
`;

const SideLineBase = styled.div`
  position: absolute;
  height: 250px;
  width: 20px;
  background-color: white;
  z-index: 1;

  @media (max-width: ${MobileBreakpoint}) {
    width: 17px;
  }
`;

const MiddleLineBase = styled.div`
  position: absolute;
  height: 55px;
  width: 5px;
  background-color: white;
  left: 50%;
  z-index: 1;
`;

const LeftLine = styled(SideLineBase)`
  left: 5%;
  animation: ${moveLeftLine} 30s ease-in-out infinite;

  @media (max-width: ${MobileBreakpoint}) {
    animation: ${moveLeftLineMobile} 30s linear infinite;
  }
`;

const RightLine = styled(SideLineBase)`
  right: 5%;
  animation: ${moveRightLine} 30s ease-in-out infinite;

  @media (max-width: ${MobileBreakpoint}) {
    animation: ${moveRightLineMobile} 30s linear infinite;
  }
`;

const TopLine = styled(MiddleLineBase)`
  top: 0;
`;

const BottomLine = styled(MiddleLineBase)`
  bottom: 0;
`;

export default function SponsorsAndPartners() {
  return (
    <SponsorsAndPartnersContainer id="sponsors">
      <StyledSectionTitle className={silkscreen.className}>
        SPONSORS
      </StyledSectionTitle>
      <LeftLine />
      <RightLine />
      <TopLine />
      <BottomLine />
      <Ball />
      <SponsorsBlock>
        <SponsorRow>
          <TeraBox>
            <SponsorUnrevealed />
          </TeraBox>
        </SponsorRow>

        <SponsorRow>
          <GigaBox>
            <SponsorLogo
              imageSrc={"/Sponsors/revolut.svg"}
              imageAlt={"revolut"}
              sponsorLink={"https://www.revolut.com/talent-programmes/"}
              smallPadding
            />
          </GigaBox>
        </SponsorRow>
        <SponsorRow>
          <MegaBox>
            <SponsorLogo
              imageSrc={"/Sponsors/skyscanner.svg"}
              imageAlt={"skyscanner"}
              sponsorLink={"https://www.skyscanner.es/"}
              smallPadding
            />
          </MegaBox>
          <MegaBox>
            <SponsorLogo
              imageSrc={"/Sponsors/grafana.svg"}
              imageAlt={"grafana"}
              sponsorLink={"https://grafana.com/"}
              smallPadding
            />
          </MegaBox>
          <MegaBox>
            <SponsorUnrevealed />
          </MegaBox>
          <MegaBox>
            <SponsorUnrevealed />
          </MegaBox>
        </SponsorRow>

        <SponsorRow>
          <KiloBox>
            <SponsorLogo
              imageSrc={"/Sponsors/jetbrains.svg"}
              imageAlt={"jetbrains"}
              sponsorLink={"https://www.jetbrains.com/"}
              smallPadding
            />
          </KiloBox>
          <KiloBox>
            <SponsorUnrevealed />
          </KiloBox>
        </SponsorRow>
        <SponsorRow>
          <MiliBox>
            <SponsorLogo
              imageSrc={"/Sponsors/ithink.png"}
              sponsorLink={"https://ithinkupc.com/"}
              imageAlt={"ithink"}
              smallPadding
            />
          </MiliBox>
        </SponsorRow>
      </SponsorsBlock>

      <StyledSectionTitle className={silkscreen.className}>
        PARTNERS
      </StyledSectionTitle>
      <PartnersBlock>
        <SponsorRow>
          <MiliBox>
            <SponsorLogo
              imageSrc={"/Partners/upc.svg"}
              imageAlt={"upc"}
              sponsorLink={"https://www.upc.edu/"}
              smallPadding
            />
          </MiliBox>
          <MiliBox>
            <SponsorLogo
              imageSrc={"/Partners/fib.svg"}
              imageAlt={"fib"}
              sponsorLink={"https://www.fib.upc.edu/"}
            />
          </MiliBox>
          <MiliBox>
            <SponsorLogo
              imageSrc={"/Partners/telecos.png"}
              imageAlt={"telecos"}
              sponsorLink={"https://telecos.upc.edu/"}
            />
          </MiliBox>
          <MiliBox>
            <SponsorLogo
              imageSrc={"/Partners/cfis.svg"}
              imageAlt={"CFIS"}
              sponsorLink={"https://cfis.upc.edu/"}
            />
          </MiliBox>
          <MiliBox>
            <SponsorLogo
              imageSrc={"/Partners/mlh.svg"}
              imageAlt={"mlh"}
              sponsorLink={"https://mlh.io/eu"}
            />
          </MiliBox>
        </SponsorRow>
        <SponsorRow>
          <MiliBox>
            <SponsorLogo
              imageSrc={"/Partners/nissin.png"}
              imageAlt={"nissin"}
              sponsorLink={"https://www.nissinfoods.com/"}
            />
          </MiliBox>
          <MiliBox>
            <SponsorLogo
              imageSrc={"/Partners/dominos_pizza.png"}
              imageAlt={"domino's pizza"}
              sponsorLink={"https://www.dominospizza.es/"}
              smallPadding
            />
          </MiliBox>
          <MiliBox>
            <SponsorLogo
              imageSrc={"/Partners/xurreria_manolo.png"}
              imageAlt={"Xurreria Manolo"}
              sponsorLink={"https://www.instagram.com/xurreriacalmanolo"}
              smallPadding
            />
          </MiliBox>
          <MiliBox>
            <SponsorLogo
              imageSrc={"/Partners/risi.png"}
              imageAlt={"RISI"}
              sponsorLink={"https://risi.es/es/"}
              smallPadding
            />
          </MiliBox>
          <MiliBox>
            <SponsorLogo
              imageSrc={"/Partners/frit.png"}
              imageAlt={"Frit Ravich"}
              sponsorLink={"https://www.fritravich.com/en/"}
              smallPadding
            />
          </MiliBox>
          <MiliBox>
            <SponsorUnrevealed />
          </MiliBox>
        </SponsorRow>
      </PartnersBlock>
    </SponsorsAndPartnersContainer>
  );
}
