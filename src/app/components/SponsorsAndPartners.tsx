import styled from "styled-components";
import { Section } from "@/app/genericComponents/General";
import { SectionTitle } from "@/app/genericComponents/Typography";
import { SpacingL, SpacingM, SpacingS } from "@/app/genericComponents/tokens";
import {
  GigaBox,
  KiloBox,
  MegaBox,
  MiliBox,
  SponsorLogo,
} from "@/app/genericComponents/Sponsors";

const SponsorsBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  align-content: center;
  margin-bottom: ${SpacingL};
`;

const SponsorRow = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${SpacingS};
  margin-bottom: ${SpacingM};
`;

export default function SponsorsAndPartners() {
  return (
    <Section id="sponsors">
      <SectionTitle>Sponsors</SectionTitle>
      <SponsorsBlock>
        <SponsorRow>
          <GigaBox>
            <SponsorLogo
              imageSrc={"/Sponsors/intersystems.svg"}
              imageAlt={"instersystems"}
              sponsorLink={"https://www.intersystems.com/"}
            />
          </GigaBox>
        </SponsorRow>

        <SponsorRow>
          <MegaBox>
            <SponsorLogo
              imageSrc={"/Sponsors/grafana.svg"}
              imageAlt={"grafana"}
              sponsorLink={"https://grafana.com/"}
            />
          </MegaBox>
          <MegaBox>
            <SponsorLogo
              imageSrc={"/Sponsors/inditex.svg"}
              imageAlt={"inditex"}
              sponsorLink={"https://www.zaratalent.com/es/tech/"}
              smallPadding
            />
          </MegaBox>
          <MegaBox>
            <SponsorLogo
              imageSrc={"/Sponsors/travelperk.svg"}
              imageAlt={"travelperk"}
              sponsorLink={"https://www.travelperk.com/"}
              smallPadding
            />
          </MegaBox>
          <MegaBox>
            <SponsorLogo
              imageSrc={"/Sponsors/vueling.svg"}
              imageAlt={"vueling"}
              sponsorLink={"https://www.vueling.com/ca"}
              smallPadding
            />
          </MegaBox>
        </SponsorRow>
        <SponsorRow>
          <MegaBox>
            <SponsorLogo
              imageSrc={"/Sponsors/seidor.svg"}
              imageAlt={"seidor"}
              sponsorLink={"https://www.seidor.com"}
            />
          </MegaBox>
          <MegaBox>
            <SponsorLogo
              imageSrc={"/Sponsors/esa.svg"}
              imageAlt={"esa"}
              sponsorLink={"https://www.esa.int/"}
            />
          </MegaBox>
        </SponsorRow>

        <SponsorRow>
          <KiloBox>
            <SponsorLogo
              imageSrc={"/Sponsors/github.svg"}
              imageAlt={"github"}
              sponsorLink={"https://education.github.com/"}
            />
          </KiloBox>
          <KiloBox>
            <SponsorLogo
              imageSrc={"/Sponsors/flanks.svg"}
              imageAlt={"flanks"}
              sponsorLink={"https://www.flanks.io/"}
              smallPadding
            />
          </KiloBox>
          <KiloBox>
            <SponsorLogo
              imageSrc={"/Sponsors/bluetab.png"}
              imageAlt={"bluetab"}
              sponsorLink={"https://www.bluetab.net/es/"}
              smallPadding
            />
          </KiloBox>
        </SponsorRow>

        <SponsorRow>
          <MiliBox>
            <SponsorLogo
              imageSrc={"/Sponsors/ithinkupc.svg"}
              imageAlt={"ithinkupc"}
              sponsorLink={"https://www.ithinkupc.com/es"}
            />
          </MiliBox>
        </SponsorRow>
      </SponsorsBlock>

      <SectionTitle>Partners</SectionTitle>
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
            imageAlt={"cfis"}
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
            smallPadding
          />
        </MiliBox>
      </SponsorRow>
      <SponsorRow>
        <MiliBox>
          <SponsorLogo
            imageSrc={"/Partners/nissin.svg"}
            imageAlt={"nissin"}
            sponsorLink={"https://www.nissinfoods.com/"}
          />
        </MiliBox>
        <MiliBox>
          <SponsorLogo
            imageSrc={"/Partners/frit_ravich.png"}
            imageAlt={"fritravich"}
            sponsorLink={"https://www.fritravich.com/en/"}
            smallPadding
          />
        </MiliBox>
        <MiliBox>
          <SponsorLogo
            imageSrc={"/Partners/cocacola.png"}
            imageAlt={"cocacola"}
            sponsorLink={"https://www.coca-cola.com/"}
            smallPadding
          />
        </MiliBox>
        <MiliBox>
          <SponsorLogo
            imageSrc={"/Partners/nestle.svg"}
            imageAlt={"nestle"}
            sponsorLink={"https://www.nestle.com/"}
          />
        </MiliBox>
        <MiliBox>
          <SponsorLogo
            imageSrc={"/Partners/incapto.svg"}
            imageAlt={"incapto"}
            sponsorLink={"https://incapto.com/profesional/"}
          />
        </MiliBox>
        <MiliBox>
          <SponsorLogo
            imageSrc={"/Partners/cacaolat.png"}
            imageAlt={"cacaolat"}
            sponsorLink={"https://www.cacaolat.es/en"}
            smallPadding
          />
        </MiliBox>
      </SponsorRow>
    </Section>
  );
}
