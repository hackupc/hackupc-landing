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
  boxWidth: "35%",
  boxHeight: "12rem",
});
const TeraBox = PackageBox({
  boxWidth: "33.33%",
  boxHeight: "8rem",
});
const GigaBox = PackageBox({
  boxWidth: "25%",
  boxHeight: "6.8rem",
});
const MegaBox = PackageBox({
  boxWidth: "20%",
  boxHeight: "5.78rem",
});
const KiloBox = PackageBox({
  boxWidth: "16.667%",
  boxHeight: "4.913rem",
});
const MiliBox = PackageBox({
  boxWidth: "14.285%",
  boxHeight: "4.17605rem",
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
      <a
        href="https://www.intel.com"
        target="_blank"
        rel="noopener noreferrer"
      ></a>
      <PetaBox>
        <SponsorImage src="/Intel.png" alt="Intel Logo" />
      </PetaBox>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gridTemplateColumns: "repeat(2, 1fr)",
        }}
      >
        <TeraBox>
          <SponsorImage src="/optiver.png" alt="Optiver Logo" />
        </TeraBox>
        <TeraBox>
          <SponsorImage src="/ESA.png" alt="Esa Logo" />
        </TeraBox>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gridTemplateColumns: "repeat(2, 1fr)",
        }}
      >
        <GigaBox>
          <SponsorImage src="/Optiver.png" alt="Optiver Logo" />
        </GigaBox>
        <GigaBox>
          <SponsorImage src="/ESA.png" alt="ESA Logo" />
        </GigaBox>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gridTemplateColumns: "repeat(4, 1fr)",
        }}
      >
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

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gridTemplateColumns: "repeat(3, 1fr)",
        }}
      >
        <KiloBox>
          <SponsorImage src="/vueling.png" alt="Vueling Logo" />
        </KiloBox>
        <KiloBox>
          <SponsorImage src="/Seidor.png" alt="Seidor Logo" />
        </KiloBox>
        <KiloBox>
          <SponsorImage src="/grafana.png" alt="Grafana Logo" />
        </KiloBox>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gridTemplateColumns: "repeat(2, 1fr)",
        }}
      >
        <MiliBox>
          <SponsorImage src="/vueling.png" alt="Vueling Logo" />
        </MiliBox>
        <MiliBox>
          <SponsorImage src="/Seidor.png" alt="Seidor Logo" />
        </MiliBox>
      </div>

      <Title>Partners</Title>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gridTemplateColumns: "repeat(6, 1fr)",
        }}
      >
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
