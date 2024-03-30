import { React, useState, useEffect, useCallback } from "react";
import { EmblaOptionsType } from "embla-carousel";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";
import AutoScroll from "embla-carousel-auto-scroll";

import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faStop } from "@fortawesome/free-solid-svg-icons";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const Embla = styled.section`
  margin: auto;
  max-width: 100%;
  --slide-spacing: 1rem;
  --slide-size: 100%;
  --slide-spacing-sm: 10rem;
  --slide-size-sm: 20%;
  --slide-spacing-lg: 2rem;
  --slide-size-lg: calc(100% / 4);
`;

const EmblaViewport = styled.div`
  overflow: hidden;
`;

const EmblaContainer = styled.div`
  backface-visibility: hidden;
  display: flex;
  touch-action: pan-y;
  margin-left: calc(var(--slide-spacing) * -1);

  @media (min-width: 300px) {
    margin-left: calc(var(--slide-spacing-sm) * -1);
  }

  @media (min-width: 750px) {
    margin-left: calc(var(--slide-spacing-lg) * -1);
  }
`;

const EmblaSlide = styled.div`
  min-width: 0;
  flex: 0 0 var(--slide-size);
  padding-left: var(--slide-spacing);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media (min-width: 300px) {
    flex: 0 0 var(--slide-size-sm);
    padding-left: var(--slide-spacing-sm);
  }

  @media (min-width: 750px) {
    padding-left: var(--slide-spacing-sm);
  }

  @media (min-width: 1200px) {
    flex: 0 0 var(--slide-size-lg);
    padding-left: var(--slide-spacing-lg);
  }
`;

const EmblaSlideNumber = styled.div`
  border-radius: 1.8rem;
  font-size: 4rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  height: var(--slide-height);
`;

const EmblaControls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.8rem;

  @media (max-width: 767px) {
    display: none;
  }
`;

const EmblaButtons = styled.div`
  display: flex;
  gap: 0.6rem;
  align-items: center;
`;

const EmblaButton = styled.button`
  -webkit-appearance: none;
  appearance: none;
  background-color: transparent;
  touch-action: manipulation;
  display: inline-flex;
  text-decoration: none;
  cursor: pointer;
  border: 0;
  padding: 0;
  margin: 0;
  width: 3.6rem;
  height: 3.6rem;
  z-index: 1;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const EmblaButtonSvg = styled.svg`
  width: 35%;
  height: 35%;
`;

const EmblaDots = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const EmblaPlay = styled.button`
  -webkit-appearance: none;
  text-decoration: none;
  cursor: url("/rocket-fire.png"), auto;
  display: flex;
  font-size: 1.5rem;
  background-color: black;
  border: none;
  margin: 0px 0px 0px 10px;
`;

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    AutoScroll({ playOnInit: true }),
  ]);
  const [isPlaying, setIsPlaying] = useState(false);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const onButtonAutoplayClick = useCallback(
    (callback: () => void) => {
      const autoScroll = emblaApi?.plugins()?.autoScroll;
      if (!autoScroll) return;

      const resetOrStop =
        autoScroll.options.stopOnInteraction === false
          ? autoScroll.reset
          : autoScroll.stop;

      resetOrStop();
      callback();
    },
    [emblaApi],
  );

  const toggleAutoplay = useCallback(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll;
    if (!autoScroll) return;

    const playOrStop = autoScroll.isPlaying()
      ? autoScroll.stop
      : autoScroll.play;
    playOrStop();
  }, [emblaApi]);

  useEffect(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll;
    if (!autoScroll) return;

    setIsPlaying(autoScroll.isPlaying());
    emblaApi
      .on("autoScroll:play", () => setIsPlaying(true))
      .on("autoScroll:stop", () => setIsPlaying(false))
      .on("reInit", () => setIsPlaying(false));
  }, [emblaApi]);

  return (
    <Embla>
      <EmblaViewport ref={emblaRef}>
        <EmblaContainer>
          {slides.map((edition, index, currentIndex) => (
            <EmblaSlide key={index}>
              <Link href={edition.url} target="_blank">
                <Image
                  src={edition.img}
                  alt="altText"
                  width="150"
                  height="150"
                />
                <h3>{edition.name}</h3>
                <p>{edition.date}</p>
              </Link>
            </EmblaSlide>
          ))}
        </EmblaContainer>
      </EmblaViewport>
      <EmblaControls>
        <EmblaDots>
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              selected={selectedIndex === index}
            />
          ))}
        </EmblaDots>
        <EmblaPlay onClick={toggleAutoplay} type="button">
          <FontAwesomeIcon
            icon={isPlaying ? faStop : faPlay}
            color={"orangered"}
          />
        </EmblaPlay>
      </EmblaControls>
    </Embla>
  );
};

export default EmblaCarousel;
