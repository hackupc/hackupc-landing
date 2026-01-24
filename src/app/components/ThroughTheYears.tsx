import React from "react";
import Image from "next/image";

import { Section } from "@/app/genericComponents/General";
import { SectionTitle } from "@/app/genericComponents/Typography";
import styled from "styled-components";
import { lora } from "@/app/genericComponents/fonts";
import {
  MobileBreakpoint,
  SpacingL,
  SpacingS,
  SpacingXL,
  SpacingXXL,
} from "../genericComponents/tokens";
import Link from "next/link";
import EmblaCarousel from "../genericComponents/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";

const GrassImageXDesktopDisplacement = "-10px";
const GrassImageXPhoneDisplacement = "480px";
const FlowerImageHeight = "150px";
const FlowerImageWidthWithExtra = "100px";

const StyledSectionTitle = styled(SectionTitle)`
  margin-bottom: ${SpacingXXL};

  .break {
    display: none; // por defecto en pantallas grandes
  }

  @media (max-width: ${MobileBreakpoint}) {
    .break {
      display: inline; // en pantallas pequeñas, se fuerza salto de línea
    }
  }
`;

export const StyledCarouselSection = styled(Section)`
  padding: 0;
  padding-top: ${SpacingL};
  margin: 0;
  flex-direction: column;
  max-width: 100%;
`;

export const StyledSection = styled(Section)`
  padding: 0;
  padding-top: ${SpacingL};
`;

const GrassContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  position: relative;
  background-color: #65936d;
  width: 100vw;
  height: 100%;

  @media (max-width: ${MobileBreakpoint}) {
    display: flex;
    margin-top: ${SpacingXL};
    padding-bottom: ${SpacingXL};
    height: calc(${FlowerImageHeight} * 4 + ${SpacingS});
  }
`;

const GrassImageSection = styled.div`
  position: absolute;
  width: 100%;
  height: 50px;
  margin-bottom: ${GrassImageXDesktopDisplacement};

  background-image: url("/ThroughTheYears/grass.svg");
  background-repeat: repeat-x;
  background-position: center bottom;
  background-size: 200px 50px;

  @media (max-width: ${MobileBreakpoint}) {
    margin-bottom: ${GrassImageXPhoneDisplacement};
  }
`;

const SwordSection = styled.div`
  align-content: right;
  position: absolute;
  justify-content: right;
  right: 0;
  z-index: -1;
  margin-bottom: 50px;

  @media (max-width: ${MobileBreakpoint}) {
    margin-bottom: 600px;
  }
`;

const FlowersImageSection = styled.div`
  position: relative;
  align-content: space-between;
  display: flex;
  justify-content: center;
  width: 100%;
  height: ${FlowerImageHeight};
`;

const Flower2025Section = styled(FlowersImageSection)`
  @media (max-width: ${MobileBreakpoint}) {
    display: block;
    position: absolute;
    top: -70px;
    left: calc(40% - ${FlowerImageWidthWithExtra});
  }
`;

const Flower2024Section = styled(FlowersImageSection)`
  @media (max-width: ${MobileBreakpoint}) {
    display: block;
    position: absolute;
    top: -70px;
    left: calc(40%);
  }
`;

const Flower2023Section = styled(FlowersImageSection)`
  @media (max-width: ${MobileBreakpoint}) {
    display: block;
    position: absolute;
    left: calc(50% - ${FlowerImageWidthWithExtra});
    top: calc(-70px + ${FlowerImageHeight});
  }
`;

const Flower2022Section = styled(FlowersImageSection)`
  @media (max-width: ${MobileBreakpoint}) {
    display: block;
    position: absolute;
    left: calc(50%);
    top: calc(-70px + ${FlowerImageHeight});
  }
`;

const Flower2021Section = styled(FlowersImageSection)`
  @media (max-width: ${MobileBreakpoint}) {
    display: block;
    position: absolute;
    left: calc(40% - ${FlowerImageWidthWithExtra});
    top: calc(-70px + 2 * ${FlowerImageHeight});
  }
`;

const Flower2020Section = styled(FlowersImageSection)`
  @media (max-width: ${MobileBreakpoint}) {
    display: block;
    position: absolute;
    left: calc(40%);
    top: calc(-70px + 2 * ${FlowerImageHeight});
  }
`;

const Flower2019Section = styled(FlowersImageSection)`
  @media (max-width: ${MobileBreakpoint}) {
    display: block;
    position: absolute;
    left: calc(40% + ${FlowerImageWidthWithExtra});
    top: calc(-70px + 2 * ${FlowerImageHeight});
  }
`;

const Flower2018Section = styled(FlowersImageSection)`
  @media (max-width: ${MobileBreakpoint}) {
    display: block;
    position: absolute;
    left: calc(50% - ${FlowerImageWidthWithExtra});
    top: calc(-70px + 3 * ${FlowerImageHeight});
  }
`;

const Flower2017wSection = styled(FlowersImageSection)`
  @media (max-width: ${MobileBreakpoint}) {
    display: block;
    position: absolute;
    left: calc(50%);
    top: calc(-70px + 3 * ${FlowerImageHeight});
  }
`;

const Flower2017fSection = styled(FlowersImageSection)`
  @media (max-width: ${MobileBreakpoint}) {
    display: block;
    position: absolute;
    left: calc(40% - ${FlowerImageWidthWithExtra});
    top: calc(-70px + 4 * ${FlowerImageHeight});
  }
`;

const Flower2016wSection = styled(FlowersImageSection)`
  @media (max-width: ${MobileBreakpoint}) {
    display: block;
    position: absolute;
    left: calc(40%);
    top: calc(-70px + 4 * ${FlowerImageHeight});
  }
`;

const Flower2016sSection = styled(FlowersImageSection)`
  @media (max-width: ${MobileBreakpoint}) {
    display: block;
    position: absolute;
    left: calc(40% + ${FlowerImageWidthWithExtra});
    top: calc(-70px + 4 * ${FlowerImageHeight});
  }
`;

const PREVIOUS_EDITIONS = [
  {
    img: "/ThroughTheYears/2016s.svg",
    url: "https://s2016.hackupc.com/",
  },
  {
    img: "/ThroughTheYears/2016f.svg",
    url: "https://f2016.hackupc.com/",
  },
  {
    img: "/ThroughTheYears/2017f.svg",
    url: "https://f2017.hackupc.com/",
  },
  {
    img: "/ThroughTheYears/2017w.svg",
    url: "https://w2017.hackupc.com/",
  },
  {
    img: "/ThroughTheYears/2018.svg",
    url: "https://2018.hackupc.com/",
  },
  {
    img: "/ThroughTheYears/2019.svg",
    url: "https://2019.hackupc.com/",
  },
  {
    img: "/ThroughTheYears/2020.svg",
    url: "",
  },
  {
    img: "/ThroughTheYears/2021.svg",
    url: "https://2021.hackupc.com/",
  },
  {
    img: "/ThroughTheYears/2022.svg",
    url: "https://2022.hackupc.com/",
  },
  {
    img: "/ThroughTheYears/2023.svg",
    url: "https://2023.hackupc.com/",
  },
  {
    img: "/ThroughTheYears/2024.svg",
    url: "https://2024.hackupc.com/",
  },
  {
    img: "/ThroughTheYears/2025.svg",
    url: "https://2025.hackupc.com",
  },
];

const OPTIONS: EmblaOptionsType = {
  align: "start",
  loop: true,
  slidesToScroll: 2,
};

export default function ThroughTheYears() {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () =>
      setIsMobile(window.innerWidth <= parseInt(MobileBreakpoint));
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (!isMobile) {
    return (
      <StyledCarouselSection>
        <StyledSectionTitle className={lora.className}>
          THROUGHOUT{" "}
          <span className="break">
            <br />
          </span>
          THE YEARS
        </StyledSectionTitle>
        <SwordSection>
          <Image
            src="/ThroughTheYears/sword.svg"
            alt="Sword Image"
            width={144}
            height={366}
          />
        </SwordSection>
        <GrassImageSection />
        <EmblaCarousel slides={PREVIOUS_EDITIONS} options={OPTIONS} />
      </StyledCarouselSection>
    );
  }
  return (
    <div id="ThroughTheYears">
      <StyledSection>
        <StyledSectionTitle className={lora.className}>
          THROUGHOUT{" "}
          <span className="break">
            <br />
          </span>
          THE YEARS
        </StyledSectionTitle>
        <SwordSection>
          <Image
            src="/ThroughTheYears/sword.svg"
            alt="Sword Image"
            width={144}
            height={366}
          />
        </SwordSection>
        <GrassImageSection />
        <GrassContainer>
          <GrassContainer>
            <Flower2025Section>
              <Link href="https://2025.hackupc.com" passHref>
                <Image
                  src="/ThroughTheYears/2025.svg"
                  alt="2025 Image"
                  width={75}
                  height={150}
                />
              </Link>
            </Flower2025Section>
            <Flower2024Section>
              <Link href="https://2024.hackupc.com" passHref>
                <Image
                  src="/ThroughTheYears/2024.svg"
                  alt="2024 Image"
                  width={75}
                  height={150}
                />
              </Link>
            </Flower2024Section>
            <Flower2023Section>
              <Link href="https://2023.hackupc.com" passHref>
                <Image
                  src="/ThroughTheYears/2023.svg"
                  alt="2023 Image"
                  width={75}
                  height={150}
                />
              </Link>
            </Flower2023Section>
            <Flower2022Section>
              <Link href="https://2022.hackupc.com" passHref>
                <Image
                  src="/ThroughTheYears/2022.svg"
                  alt="2022 Image"
                  width={75}
                  height={150}
                />
              </Link>
            </Flower2022Section>
            <Flower2021Section>
              <Link href="https://2021.hackupc.com" passHref>
                <Image
                  src="/ThroughTheYears/2021.svg"
                  alt="2021 Image"
                  width={75}
                  height={150}
                />
              </Link>
            </Flower2021Section>
            <Flower2020Section>
              <Image
                src="/ThroughTheYears/2020.svg"
                alt="2020 Image"
                width={75}
                height={150}
              />
            </Flower2020Section>
            <Flower2019Section>
              <Link href="https://2019.hackupc.com" passHref>
                <Image
                  src="/ThroughTheYears/2019.svg"
                  alt="2019 Image"
                  width={75}
                  height={150}
                />
              </Link>
            </Flower2019Section>
            <Flower2018Section>
              <Link href="https://2018.hackupc.com" passHref>
                <Image
                  src="/ThroughTheYears/2018.svg"
                  alt="2018 Image"
                  width={75}
                  height={150}
                />
              </Link>
            </Flower2018Section>
            <Flower2017wSection>
              <Link href="https://f2017.hackupc.com" passHref>
                <Image
                  src="/ThroughTheYears/2017f.svg"
                  alt="2017f Image"
                  width={75}
                  height={150}
                />
              </Link>
            </Flower2017wSection>
            <Flower2017fSection>
              <Link href="https://w2017.hackupc.com" passHref>
                <Image
                  src="/ThroughTheYears/2017w.svg"
                  alt="2017w Image"
                  width={75}
                  height={150}
                />
              </Link>
            </Flower2017fSection>
            <Flower2016wSection>
              <Link href="https://w2016.hackupc.com" passHref>
                <Image
                  src="/ThroughTheYears/2016w.svg"
                  alt="2016w Image"
                  width={75}
                  height={150}
                />
              </Link>
            </Flower2016wSection>
            <Flower2016sSection>
              <Link href="https://s2016.hackupc.com" passHref>
                <Image
                  src="/ThroughTheYears/2016s.svg"
                  alt="2016s Image"
                  width={75}
                  height={150}
                />
              </Link>
            </Flower2016sSection>
          </GrassContainer>
        </GrassContainer>
      </StyledSection>
    </div>
  );
}
