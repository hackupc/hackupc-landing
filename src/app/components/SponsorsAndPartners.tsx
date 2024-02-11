import styled from "styled-components";
import { Section } from "@/app/genericComponents/General";
import { SectionTitle } from "@/app/genericComponents/Typography";
import {
  Neutral300,
  SpacingL,
  SpacingM,
  SpacingS,
  SpacingXS,
} from "@/app/genericComponents/tokens";

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

interface BoxInput {
  width: string;
  height: string;
}
const PackageBox = ({ width, height }: BoxInput) => styled.div`
  display: flex;
  justify-content: center;
  width: ${width};
  height: ${height};
  overflow: hidden;
  background-color: ${Neutral300};
  border-radius: ${SpacingXS};
`;

const PetaBox = PackageBox({
  width: "200px",
  height: "136px",
});
/*
const TeraBox = PackageBox({
  width: "144px",
  height: "104px",
});
*/
const GigaBox = PackageBox({
  width: "136px",
  height: "96px",
});
const MegaBox = PackageBox({
  width: "128px",
  height: "88px",
});
const KiloBox = PackageBox({
  width: "120px",
  height: "80px",
});
const MiliBox = PackageBox({
  width: "112px",
  height: "72px",
});

const SponsorImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  box-sizing: border-box;
  padding: ${SpacingS};

  &::before,
  &::after {
    position: absolute;
    content: "";
    opacity: 0;
    pointer-events: none;
  }

  &::before {
    z-index: 1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 1em;
    backdrop-filter: blur(0.5rem);
    background-color: rgb(255 255 255 / 25%);
    pointer-events: none;
    transition: opacity 400ms cubic-bezier(0.23, 0.96, 0.17, 1);
  }

  &::after {
    z-index: 2;
    top: 50%;
    right: 0;
    left: 0;
    content: "Go to website";
    font-size: 1.5em;
    font-weight: bold;
    letter-spacing: 0.03em;
    transform: translate(0, -50%) translateY(1em);
    transition:
      opacity 300ms $ease-quad,
      transform 200ms $ease-quad;
    // will-change: transform, opacity;
  }

  &:hover {
    &::before {
      opacity: 1;
    }

    &::after {
      opacity: 1;
      transform: translate(0, -50%) translateY(0);
    }
  }

  &:active {
    box-shadow: 0 1rem 1rem -0.5rem transparent;
    transform: scale(0.975) translateY(0.25rem);
  }
`;

const SponsorUnrevealed = styled(SponsorImage)`
  cursor: help;
  opacity: 0.5;

  &::after {
    color: $c-bg-dark;
    content: "Top secret";
    text-transform: uppercase;
  }
`;

export default function SponsorsAndPartners() {
  return (
    <Section>
      <SectionTitle>Sponsors</SectionTitle>
      <SponsorsBlock>
        <SponsorRow>
          <PetaBox>
            <SponsorUnrevealed src="/hackupc_unrevealed.svg" alt="Top Secret" />
          </PetaBox>
        </SponsorRow>

        <SponsorRow>
          <GigaBox>
            <SponsorImage src="/hackupc_unrevealed.svg" alt="Top Secret" />
          </GigaBox>
          <GigaBox>
            <SponsorImage src="/hackupc_unrevealed.svg" alt="Top Secret" />
          </GigaBox>
        </SponsorRow>

        <SponsorRow>
          <MegaBox>
            <SponsorImage src="/Sponsors/grafana.svg" alt="Grafana Logo" />
          </MegaBox>
          <MegaBox>
            <SponsorImage src="/hackupc_unrevealed.svg" alt="Top Secret" />
          </MegaBox>
          <MegaBox>
            <SponsorImage src="/hackupc_unrevealed.svg" alt="Top Secret" />
          </MegaBox>
          <MegaBox>
            <SponsorImage src="/hackupc_unrevealed.svg" alt="Top Secret" />
          </MegaBox>
        </SponsorRow>

        <SponsorRow>
          <KiloBox>
            <SponsorImage src="/hackupc_unrevealed.svg" alt="Top Secret" />
          </KiloBox>
          <KiloBox>
            <SponsorImage src="/hackupc_unrevealed.svg" alt="Top Secret" />
          </KiloBox>
          <KiloBox>
            <SponsorImage src="/hackupc_unrevealed.svg" alt="Top Secret" />
          </KiloBox>
        </SponsorRow>
      </SponsorsBlock>

      <SectionTitle>Partners</SectionTitle>
      <SponsorRow>
        <MiliBox>
          <SponsorImage src="/Partners/upc.svg" alt="UPC Logo" />
        </MiliBox>
        <MiliBox>
          <SponsorImage src="/Partners/fib.svg" alt="FIB Logo" />
        </MiliBox>
        <MiliBox>
          <SponsorImage src="/Partners/telecos.png" alt="Telecos Logo" />
        </MiliBox>
        <MiliBox>
          <SponsorImage src="/Partners/cfis.svg" alt="CFIS Logo" />
        </MiliBox>
        <MiliBox>
          <SponsorImage src="/hackupc_unrevealed.svg" alt="Top Secret" />
        </MiliBox>
        <MiliBox>
          <SponsorImage src="/hackupc_unrevealed.svg" alt="Top Secret" />
        </MiliBox>
        <MiliBox>
          <SponsorImage src="/hackupc_unrevealed.svg" alt="Top Secret" />
        </MiliBox>
        <MiliBox>
          <SponsorImage src="/hackupc_unrevealed.svg" alt="Top Secret" />
        </MiliBox>
      </SponsorRow>
    </Section>
  );
}
