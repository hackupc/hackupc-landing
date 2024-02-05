import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 48px;
  font-weight: 700;
  margin: auto;
`;

interface BoxInput {
  boxWidth: string;
  boxHeight: string;
}

const PackageBox = ({ boxWidth, boxHeight }: BoxInput) => styled.div`
  display: flex;
  justify-content: center;
  margin: 15px;
  width: ${boxWidth};
  height: ${boxHeight};
  overflow: hidden;
  background-color: #88a7b7;
  border-radius: 20px;
`;

const PetaBox = PackageBox({
  boxWidth: "math.div(100%, 3)",
  boxHeight: "8rem",
});
const TeraBox = PackageBox({
  boxWidth: "math.div(100%, 3)",
  boxHeight: "8rem",
});
const GigaBox = PackageBox({
  boxWidth: "100% * 0.25",
  boxHeight: "8rem * 0.85",
});
const MegaBox = PackageBox({
  boxWidth: "100% * 0.2",
  boxHeight: "8rem * 0.85 * 0.85",
});
const KiloBox = PackageBox({
  boxWidth: "math.div(100%, 6)",
  boxHeight: "8rem * 0.85 * 0.85 * 0.85",
});
const MiliBox = PackageBox({
  boxWidth: "math.div(100%, 7)",
  boxHeight: "8rem * 0.85 * 0.85 * 0.85 * 0.85",
});

const SponsorImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  box-sizing: border-box;
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
