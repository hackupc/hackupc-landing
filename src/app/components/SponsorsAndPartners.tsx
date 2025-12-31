//import styled from "styled-components";
import styled from "styled-components";
import { Section } from "@/app/genericComponents/General";
import { lora } from "@/app/genericComponents/fonts";
import {
  MaxScreenSize,
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
  TeraBox,
} from "@/app/genericComponents/Sponsors";
import { SectionTitle } from "../genericComponents/Typography";



const SponsorsAndPartnersContainer = styled(Section)`
  position: relative;
  padding: ${SpacingL} 0 ${SpacingL} 0;
  gap: ${SpacingM};
  max-width: 100%;
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



export default function SponsorsAndPartners() {
  return (
    <SponsorsAndPartnersContainer id="sponsors">
      <StyledSectionTitle className={lora.className}>
        SPONSORS
      </StyledSectionTitle>

      <SponsorsBlock>
        <SponsorRow>
          <TeraBox>
            <SponsorLogo
              imageSrc={"/Sponsors/seat.svg"}
              imageAlt={"seat"}
              sponsorLink={"https://www.seat.com/"}
              smallPadding
            />
          </TeraBox>
        </SponsorRow>

        <SponsorRow>
          <GigaBox>
            <SponsorLogo
              imageSrc={"/Sponsors/revolut.svg"}
              imageAlt={"revolut"}
              sponsorLink={"https://www.revolut.com/talent-programmes/"}
            />
          </GigaBox>
          <GigaBox>
            <SponsorLogo
              imageSrc={"/Sponsors/SiemensEnergy.png"}
              imageAlt={"SiemensEnergy"}
              sponsorLink={"https://www.siemens-energy.com/global/en/home.html"}
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
            <SponsorLogo
              imageSrc={"/Sponsors/vueling.svg"}
              imageAlt={"vueling"}
              sponsorLink={"https://www.vueling.com/ca?Currency=EUR"}
              smallPadding
            />
          </MegaBox>
          <MegaBox>
            <SponsorLogo
              imageSrc={"/Sponsors/inditex.svg"}
              imageAlt={"inditex"}
              sponsorLink={"https://xtend.inditex.com/"}
              smallPadding
            />
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

      <StyledSectionTitle className={lora.className}>
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
          <MiliBox>
            <SponsorLogo
              imageSrc={"/Partners/coeinf.png"}
              imageAlt={"coeinf"}
              sponsorLink={"https://enginyeriainformatica.cat/dones-coeinf/"}
            />
          </MiliBox>
          <MiliBox>
            <SponsorLogo
              imageSrc={"/Partners/tallerdeso.png"}
              imageAlt={"Taller De So"}
              sponsorLink={"https://www.instagram.com/tallerdeso"}
              smallPadding
            />
          </MiliBox>
          <MiliBox>
            <SponsorLogo
              imageSrc={"/Partners/ministerio.png"}
              imageAlt={"Ministerio"}
              sponsorLink={
                "https://www.www.siemens-energy.com/global/en/home.html"
              }
              smallPadding
            />
          </MiliBox>
        </SponsorRow>
        <SponsorRow>
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
            <SponsorLogo
              imageSrc={"/Partners/cocacola.png"}
              imageAlt={"Cocacola"}
              sponsorLink={"https://www.coca-cola.com/es/es"}
              smallPadding
            />
          </MiliBox>
        </SponsorRow>
      </PartnersBlock>
    </SponsorsAndPartnersContainer>
  );
}
