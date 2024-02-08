import styled from "styled-components";
import { Section } from "@/app/genericComponents/General";
import { SectionTitle } from "@/app/genericComponents/Fonts";
import { SpacingL } from "@/app/genericComponents/tokens";

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
`;

interface BoxInput {
  width: string;
  height: string;
}
const PackageBox = ({ width, height }: BoxInput) => styled.div`
  display: flex;
  justify-content: center;
  margin: 15px;
  width: ${width};
  height: ${height};
  overflow: hidden;
  background-color: #88a7b7;
  border-radius: 20px;
`;

const PetaBox = PackageBox({
  width: "160px",
  height: "144px",
});
/*
const TeraBox = PackageBox({
  width: "128px",
  height: "112px",
});
*/
const GigaBox = PackageBox({
  width: "120px",
  height: "104px",
});
const MegaBox = PackageBox({
  width: "112px",
  height: "96px",
});
const KiloBox = PackageBox({
  width: "104px",
  height: "88px",
});
/*
const MiliBox = PackageBox({
  width: "96px",
  height: "80px",
});
*/
const SponsorImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  box-sizing: border-box;
  padding: 10px;
`;

export default function SponsorsAndPartners() {
  return (
    <Section>
      <SectionTitle>Sponsors</SectionTitle>
      <SponsorsBlock>
        <SponsorRow>
          <PetaBox>
            <SponsorImage src="/hackupc_unrevealed.svg" alt="Top Secret" />
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
            <SponsorImage src="/Sponsors/grafana.png" alt="Grafana Logo" />
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
        <KiloBox>
          <SponsorImage src="/Partners/upc.svg" alt="UPC Logo" />
        </KiloBox>
        <KiloBox>
          <SponsorImage src="/Partners/fib.svg" alt="FIB Logo" />
        </KiloBox>
        <KiloBox>
          <SponsorImage src="/Partners/telecos.png" alt="Telecos Logo" />
        </KiloBox>
        <KiloBox>
          <SponsorImage src="/Partners/cfis.svg" alt="CFIS Logo" />
        </KiloBox>
        <KiloBox>
          <SponsorImage src="/hackupc_unrevealed.svg" alt="Top Secret" />
        </KiloBox>
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
    </Section>
  );
}
