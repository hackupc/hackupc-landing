import styled from "styled-components";
import { Section, WhiteContainer } from "@/app/genericComponents/General";
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
  SponsorUnrevealed,
  TeraBox,
} from "@/app/genericComponents/Sponsors";
import { SectionTitle } from "../genericComponents/Typography";

const SponsorsAndPartnersContainer = styled(WhiteContainer)`
  z-index: 0;
`;

const ContentOverlay = styled.div`
  padding: ${SpacingL} 0;
`;

export const StyledSectionTitle = styled(SectionTitle)`
  position: relative;
  color: #000000;
  width: fit-content;
  margin: 0 auto 45px auto;
  padding: 8px 32px 8px 32px;
  font-size: 32px;
  background-color: rgba(161, 200, 168, 1);

  /* Left */
  &::before {
    content: "";
    position: absolute;
    top: 20%;
    left: -54px;
    width: 92px;
    height: 62px;
    background-color: #65936dff;
    z-index: -1;
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 20% 50%);
  }

  /* Right */
  &::after {
    content: "";
    position: absolute;
    top: 20%;
    right: -54px;
    width: 92px;
    height: 62px;
    background-color: #65936dff;
    z-index: -1;
    clip-path: polygon(0% 0%, 100% 0%, 80% 50%, 100% 100%, 0% 100%);
  }
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
    <Section id="sponsors">
      <SponsorsAndPartnersContainer>
        <ContentOverlay>
          <StyledSectionTitle className={lora.className}>
            SPONSORS
          </StyledSectionTitle>
          <SponsorsBlock>
            <SponsorRow>
              <TeraBox>
                <SponsorUnrevealed />
              </TeraBox>
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
                  imageSrc={"/Sponsors/jetbrains.svg"}
                  imageAlt={"jetbrains"}
                  sponsorLink={"https://www.jetbrains.com/"}
                  smallPadding
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
                <SponsorUnrevealed />
              </KiloBox>
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
                  imageSrc={"/Partners/fib50.svg"}
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
                  sponsorLink={
                    "https://enginyeriainformatica.cat/dones-coeinf/"
                  }
                />
              </MiliBox>
              <MiliBox>
                <SponsorLogo
                  imageSrc={"/Partners/nissin.png"}
                  imageAlt={"nissin"}
                  sponsorLink={"https://www.nissinfoods.com/"}
                />
              </MiliBox>
            </SponsorRow>
            <SponsorRow>
              <MiliBox>
                <SponsorUnrevealed />
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
              <MiliBox>
                <SponsorUnrevealed />
              </MiliBox>
            </SponsorRow>
          </PartnersBlock>
        </ContentOverlay>
      </SponsorsAndPartnersContainer>
    </Section>
  );
}
