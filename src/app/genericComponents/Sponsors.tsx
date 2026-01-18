import styled from "styled-components";
import {
  Neutral300,
  SpacingS,
  SpacingXS,
} from "@/app/genericComponents/tokens";
import { BodyBold } from "@/app/genericComponents/Typography";

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
  background-color: #BFB39A;
  border-radius: ${SpacingXS};
`;

export const PetaBox = PackageBox({
  width: "200px",
  height: "136px",
});

export const TeraBox = PackageBox({
  width: "170px",
  height: "130px",
});
export const GigaBox = PackageBox({
  width: "144px",
  height: "104px",
});
export const MegaBox = PackageBox({
  width: "128px",
  height: "88px",
});

export const KiloBox = PackageBox({
  width: "120px",
  height: "80px",
});

export const MiliBox = PackageBox({
  width: "112px",
  height: "72px",
});

const BoxContainer = styled.a`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  text-align: center;
`;

const BoxContainerUnrevealed = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  text-align: center;
  cursor: help;
`;

const SponsorImage = styled.img<{ smallPadding?: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: ${(props) => (props.smallPadding ? SpacingXS : SpacingS)};
`;

const HoverText = styled(BodyBold)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  opacity: 0;
  transition: opacity 0.3s ease;
  background-color: rgba(0, 0, 0, 0.5);

  &:hover {
    opacity: 1;
  }
`;

interface SponsorLogoProps {
  imageSrc: string;
  imageAlt: string;
  sponsorLink: string;
  smallPadding?: boolean;
}

export function SponsorLogo(props: SponsorLogoProps) {
  const { imageSrc, imageAlt, sponsorLink, smallPadding } = props;

  return (
    <BoxContainer href={sponsorLink} target="_blank" rel="noopener noreferrer">
      <SponsorImage src={imageSrc} alt={imageAlt} smallPadding={smallPadding} />
      <HoverText>Go to website</HoverText>
    </BoxContainer>
  );
}

export function SponsorUnrevealed() {
  return (
    <BoxContainerUnrevealed>
      <SponsorImage src={"/hackupcLogoWhite.svg"} alt={"Top Secret"} />
      <HoverText>Top Secret</HoverText>
    </BoxContainerUnrevealed>
  );
}
