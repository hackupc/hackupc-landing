import styled from "styled-components";
import { Section } from "@/app/genericComponents/General";
import { SectionTitle } from "@/app/genericComponents/Typography";
import { SpacingL, SpacingM, SpacingS } from "@/app/genericComponents/tokens";
import {
  GigaBox,
  KiloBox,
  MegaBox,
  MiliBox,
  PetaBox,
  SponsorLogo,
  SponsorUnrevealed,
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
          <PetaBox>
            <SponsorUnrevealed />
          </PetaBox>
        </SponsorRow>

        <SponsorRow>
          <GigaBox>
            <SponsorUnrevealed />
          </GigaBox>
          <GigaBox>
            <SponsorUnrevealed />
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
            <SponsorUnrevealed />
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
            />
          </KiloBox>
          <KiloBox>
            <SponsorUnrevealed />
          </KiloBox>
        </SponsorRow>
      </SponsorsBlock>

      <SectionTitle>Partners</SectionTitle>
      <SponsorRow>
        <MiliBox>
          <SponsorLogo
            imageSrc={"/Partners/upc.svg"}
            imageAlt={"upc"}
            sponsorLink={"https://www.upc.edu/"}
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
          <SponsorUnrevealed />
        </MiliBox>
        <MiliBox>
          <SponsorUnrevealed />
        </MiliBox>
        <MiliBox>
          <SponsorUnrevealed />
        </MiliBox>
      </SponsorRow>
    </Section>
  );
}
