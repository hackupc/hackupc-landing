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
  SponsorUnrevealed,
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

const ContentOverlay = styled.div`
  position: relative;
  background-color: rgba(255, 255, 255, 0.5);
  margin: 0 ${SpacingM};
  padding: ${SpacingL} 0;
  z-index: -3;
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
    <SponsorsAndPartnersContainer id="sponsors">
      <section>
        <ContentOverlay>
          <StyledSectionTitle className={lora.className}>
            S P O N S O R S
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
                <SponsorUnrevealed />
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
            <SponsorRow>
              <MiliBox>
                <SponsorUnrevealed />
              </MiliBox>
            </SponsorRow>
          </SponsorsBlock>

          <StyledSectionTitle className={lora.className}>
            P A R T N E R S
          </StyledSectionTitle>
          <PartnersBlock>
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
      </section>
    </SponsorsAndPartnersContainer>
  );
}
