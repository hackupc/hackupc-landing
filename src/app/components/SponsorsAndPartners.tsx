import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  margin-top: 20px;
`;

interface BoxInput {
  box_width: number;
  box_height: number;
}

const PackageBox = ({ box_width, box_height }: BoxInput) => styled.div`
  display: flex;
  justify-content: center;
  margin: 15px;
  width: ${box_width}px;
  height: ${box_height}px;
  overflow: hidden;
  background-color: #88a7b7;
  border-radius: 20px;
`;

const PetaBox = PackageBox({ box_width: 250, box_height: 150 });
const TeraBox = PackageBox({ box_width: 200, box_height: 120 });
const GigaBox = PackageBox({ box_width: 175, box_height: 100 });
const MegaBox = PackageBox({ box_width: 150, box_height: 80 });
const KiloBox = PackageBox({ box_width: 125, box_height: 65 });
const MiliBox = PackageBox({ box_width: 100, box_height: 50 });

const SponsorImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 10px;
`;

export default function SponsorsAndPartners() {
  return (
    <Container>
      <Title>Sponsors</Title>
      <a href="https://www.intel.com" target="_blank" rel="noopener noreferrer">
        <PetaBox>
          <SponsorImage src="/Intel.png" alt="Intel Logo" />
        </PetaBox>
      </a>

      <div style={{ display: "flex", gridTemplateColumns: "repeat(2, 1fr)" }}>
        <GigaBox>
          <SponsorImage src="/optiver.png" alt="Optiver Logo" />
        </GigaBox>
        <GigaBox>
          <SponsorImage src="/ESA.png" alt="ESA Logo" />
        </GigaBox>
      </div>

      <div style={{ display: "flex", gridTemplateColumns: "repeat(4, 1fr)" }}>
        <MegaBox>
          <SponsorImage src="/vueling.png" alt="Vueling Logo" />
        </MegaBox>
        <MegaBox>
          <SponsorImage src="/Seidor.png" alt="Seidor Logo" />
        </MegaBox>
        <MegaBox>
          <SponsorImage src="/grafana.png" alt="Grafana Logo" />
        </MegaBox>
        <MegaBox>
          <SponsorImage src="/Restb.png" alt="Restb.ai Logo" />
        </MegaBox>
      </div>

      <Title>Partners</Title>
      <div style={{ display: "flex", gridTemplateColumns: "repeat(6, 1fr)" }}>
        <KiloBox>
          <SponsorImage src="/kitkat.png" alt="KitKat Logo" />
        </KiloBox>
        <KiloBox>
          <SponsorImage src="/kitkat.png" alt="KitKat Logo" />
        </KiloBox>
        <KiloBox>
          <SponsorImage src="/kitkat.png" alt="KitKat Logo" />
        </KiloBox>
        <KiloBox>
          <SponsorImage src="/kitkat.png" alt="KitKat Logo" />
        </KiloBox>
        <KiloBox>
          <SponsorImage src="/kitkat.png" alt="KitKat Logo" />
        </KiloBox>
        <KiloBox>
          <SponsorImage src="/kitkat.png" alt="KitKat Logo" />
        </KiloBox>
      </div>
    </Container>
  );
}
