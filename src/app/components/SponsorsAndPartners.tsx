//import styled from "styled-components";
import styled, { keyframes } from "styled-components";
import { Section } from "@/app/genericComponents/General";
import {silkscreen} from "@/app/genericComponents/fonts";
//import { SectionTitle } from "@/app/genericComponents/Typography";
import {
  MobileBreakpoint,
  TitleXL, 
  MobileTitleL,
  SpacingXXL, 
  SpacingXL, 
  SpacingL, 
  SpacingM, 
  SpacingS 
} from "@/app/genericComponents/tokens";

import {
  GigaBox,
  KiloBox,
  MegaBox,
  MiliBox,
  SponsorLogo,
  SponsorUnrevealed
} from "@/app/genericComponents/Sponsors";

const Colors = {
  Background: "#000000",
  Elements: "#FFFFFF", 
  Rectangles: "#D9D9D9", 
};

const SponsorsAndPartnersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: ${SpacingXL} 0 ${SpacingXXL} 0;
  gap: ${SpacingM};
  width: 100vw;
  background-color: ${Colors.Background};
  position: relative;
  z-index: 0;
`;

export const SectionTitle = styled.div`
  font-size: ${TitleXL};
  text-align: center;
  font-weight: bold;
  width: fit-content;
  margin: 0;
  padding-bottom: ${SpacingM};

  @media (max-width: ${MobileBreakpoint}) {
    font-size: ${MobileTitleL};
  }
`;

const SponsorsBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  align-content: center;
  margin-bottom: ${SpacingL};
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

const Ball = styled.div`
  position: absolute;
  width: 30px;
  height: 30px; 
  background-color: white;
  border-radius: 50%; 
  transform: translate(-50%, -50%);
  z-index: 1;
  animation: ${moveBall} 30s linear infinite;
`;

const SideLineBase = styled.div`
  position: absolute;
  height: 250px;
  width: 20px;
  background-color: white;
  z-index: 1;
`;

const MiddleLineBase = styled.div`
  position: absolute;
  height: 75px;
  width: 5px;
  background-color: white;
  left: 50%;
  z-index: 1;
`;

const LeftLine = styled(SideLineBase)`
  left: 5%;
  animation: ${moveLeftLine} 30s ease-in-out infinite;
`;

const RightLine = styled(SideLineBase)`
  right: 5%;
  animation: ${moveRightLine} 30s ease-in-out infinite;
`;

const TopLine = styled(MiddleLineBase)`
  top: 0;
`;

const BottomLine = styled(MiddleLineBase)`
  bottom: 0;
`;


export default function SponsorsAndPartners() {
  return (
    <Section id="sponsors">
    <SponsorsAndPartnersContainer>
      <SectionTitle className={silkscreen.className}>SPONSORS</SectionTitle>
      <LeftLine />
      <RightLine />
      <TopLine />
      <BottomLine />
      <Ball />
      <SponsorsBlock>
        <SponsorRow>
          <GigaBox>
            <SponsorUnrevealed
              // imageSrc={"/Sponsors/intersystems.svg"}
              // imageAlt={"instersystems"}
              // sponsorLink={"https://www.intersystems.com/"}
            />
          </GigaBox>
        </SponsorRow>

        <SponsorRow>
          <MegaBox>
            <SponsorUnrevealed
              // imageSrc={"/Sponsors/grafana.svg"}
              // imageAlt={"grafana"}
              // sponsorLink={"https://grafana.com/"}
            />
          </MegaBox>
          <MegaBox>
            <SponsorUnrevealed
              // imageSrc={"/Sponsors/inditex.svg"}
              // imageAlt={"inditex"}
              // sponsorLink={"https://www.zaratalent.com/es/tech/"}
              // smallPadding
            />
          </MegaBox>
          <MegaBox>
            <SponsorUnrevealed
              // imageSrc={"/Sponsors/travelperk.svg"}
              // imageAlt={"travelperk"}
              // sponsorLink={"https://www.travelperk.com/"}
              // smallPadding
            />
          </MegaBox>
          <MegaBox>
            <SponsorUnrevealed
              // imageSrc={"/Sponsors/vueling.svg"}
              // imageAlt={"vueling"}
              // sponsorLink={"https://www.vueling.com/ca"}
              // smallPadding
            />
          </MegaBox>
        </SponsorRow>
        <SponsorRow>
          <MegaBox>
            <SponsorUnrevealed
              // imageSrc={"/Sponsors/seidor.svg"}
              // imageAlt={"seidor"}
              // sponsorLink={"https://www.seidor.com"}
            />
          </MegaBox>
          <MegaBox>
            <SponsorUnrevealed
              // imageSrc={"/Sponsors/esa.svg"}
              // imageAlt={"esa"}
              // sponsorLink={"https://www.esa.int/"}
            />
          </MegaBox>
        </SponsorRow>

        <SponsorRow>
          <KiloBox>
            <SponsorUnrevealed
              // imageSrc={"/Sponsors/github.svg"}
              // imageAlt={"github"}
              // sponsorLink={"https://education.github.com/"}
            />
          </KiloBox>
          <KiloBox>
            <SponsorUnrevealed
              // imageSrc={"/Sponsors/flanks.svg"}
              // imageAlt={"flanks"}
              // sponsorLink={"https://www.flanks.io/"}
              // smallPadding
            />
          </KiloBox>
          <KiloBox>
            <SponsorUnrevealed
              // imageSrc={"/Sponsors/bluetab.png"}
              // imageAlt={"bluetab"}
              // sponsorLink={"https://www.bluetab.net/es/"}
              // smallPadding
            />
          </KiloBox>
        </SponsorRow>

        <SponsorRow>
          <MiliBox>
            <SponsorUnrevealed
              // imageSrc={"/Sponsors/ithinkupc.svg"}
              // imageAlt={"ithinkupc"}
              // sponsorLink={"https://www.ithinkupc.com/es"}
            />
          </MiliBox>
        </SponsorRow>
      </SponsorsBlock>

      <SectionTitle className={silkscreen.className}>PARTNERS</SectionTitle>
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
          <SponsorUnrevealed
            // imageSrc={"/Partners/cfis.svg"}
            // imageAlt={"cfis"}
            // sponsorLink={"https://cfis.upc.edu/"}
          />
        </MiliBox>
        <MiliBox>
          <SponsorUnrevealed
            // imageSrc={"/Partners/carisma_ciber_upc.png"}
            // imageAlt={"carismatica"}
            // sponsorLink={"https://carismatica.upc.edu/ca/"}
            // smallPadding
          />
        </MiliBox>
        <MiliBox>
          <SponsorUnrevealed
            // imageSrc={"/Partners/mlh.svg"}
            // imageAlt={"mlh"}
            // sponsorLink={"https://mlh.io/eu"}
          />
        </MiliBox>
        <MiliBox>
          <SponsorUnrevealed
            // imageSrc={"/Partners/coeinf.png"}
            // imageAlt={"coeinf"}
            // sponsorLink={"https://enginyeriainformatica.cat/dones-coeinf/"}
            // smallPadding
          />
        </MiliBox>
        <MiliBox>
          <SponsorUnrevealed
            // imageSrc={"/Partners/replexica.svg"}
            // imageAlt={"replexica"}
            // sponsorLink={"https://replexica.com/en"}
            // smallPadding
          />
        </MiliBox>
      </SponsorRow>
      <SponsorRow>
        <MiliBox>
          <SponsorUnrevealed
            // imageSrc={"/Partners/nissin.svg"}
            // imageAlt={"nissin"}
            // sponsorLink={"https://www.nissinfoods.com/"}
          />
        </MiliBox>
        <MiliBox>
          <SponsorUnrevealed
            // imageSrc={"/Partners/frit_ravich.png"}
            // imageAlt={"fritravich"}
            // sponsorLink={"https://www.fritravich.com/en/"}
            // smallPadding
          />
        </MiliBox>
        <MiliBox>
          <SponsorUnrevealed
            // imageSrc={"/Partners/cocacola.png"}
            // imageAlt={"cocacola"}
            // sponsorLink={"https://www.coca-cola.com/"}
            // smallPadding
          />
        </MiliBox>
        <MiliBox>
          <SponsorUnrevealed
            // imageSrc={"/Partners/nestle.svg"}
            // imageAlt={"nestle"}
            // sponsorLink={"https://www.nestle.com/"}
          />
        </MiliBox>
        <MiliBox>
          <SponsorUnrevealed
            // imageSrc={"/Partners/incapto.svg"}
            // imageAlt={"incapto"}
            // sponsorLink={"https://incapto.com/profesional/"}
          />
        </MiliBox>
        <MiliBox>
          <SponsorUnrevealed
            // imageSrc={"/Partners/cacaolat.png"}
            // imageAlt={"cacaolat"}
            // sponsorLink={"https://www.cacaolat.es/en"}
            // smallPadding
          />
        </MiliBox>
        <MiliBox>
          <SponsorUnrevealed
            // imageSrc={"/Partners/risi.png"}
            // imageAlt={"risi"}
            // sponsorLink={"https://risi.es/es/"}
            // smallPadding
          />
        </MiliBox>
      </SponsorRow>
      </SponsorsAndPartnersContainer>
    </Section>
  );
}
