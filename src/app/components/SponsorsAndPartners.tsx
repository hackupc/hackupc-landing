import styled from "styled-components";
import { Section } from "@/app/genericComponents/General";
import { SectionTitle } from "@/app/genericComponents/Typography";
import {SpacingXXL, SpacingXL, SpacingL, SpacingM, SpacingS } from "@/app/genericComponents/tokens";
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

const Ball = styled.div`
  position: absolute;
  width: 30px;
  height: 30px; 
  background-color: white;
  border-radius: 50%; 
  top: 55%; 
  left: 30%; 
  transform: translate(-50%, -50%);
  z-index: 1;
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
  height: 50px;
  width: 5px;
  background-color: white;
  left: 50%;
  z-index: 1;
`;

const LeftLine = styled(SideLineBase)`
  left: 5%;
  top: 25%;
`;

const RightLine = styled(SideLineBase)`
  right: 5%;
  bottom: 25%;
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
      <SectionTitle>SPONSORS</SectionTitle>
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

      <SectionTitle>PARTNERS</SectionTitle>
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
