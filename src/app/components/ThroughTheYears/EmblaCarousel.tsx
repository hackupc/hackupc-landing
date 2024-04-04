import React, { useState, useEffect, useCallback, useRef } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  EmblaEventType,
  EmblaOptionsType,
} from "embla-carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faStop } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import useEmblaCarousel from "embla-carousel-react";

type Edition = {
  url: string;
  img: string;
  name: string;
  date: string;
};

type PropType = {
  slides: Edition[];
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

const EmblaControls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.8rem;

  @media (max-width: 767px) {
    display: none;
  }
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

const EmblaCarousel: React.FC<PropType> = ({ slides, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    AutoScroll({ playOnInit: true, speed: 0.5 }),
  ]);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  useCallback(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll;
    if (!autoScroll) return;

    const options = autoScroll.options as { stopOnInteraction?: boolean };
    const stopOnInteraction = options?.stopOnInteraction ?? false;

    const reset =
      typeof autoScroll.reset === "function" ? autoScroll.reset : undefined;
    const stop =
      typeof autoScroll.stop === "function" ? autoScroll.stop : undefined;

    if (stopOnInteraction && reset) {
      reset();
    } else if (stop) {
      stop();
    }
  }, [emblaApi]);

  const toggleAutoplay = useCallback(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll;
    if (!autoScroll) return;

    if (typeof autoScroll.isPlaying === "function") {
      const playOrStop = autoScroll.isPlaying()
        ? (autoScroll.stop as () => void)
        : (autoScroll.play as () => void);
      playOrStop?.();
    }
  }, [emblaApi]);

  const isMounted = useRef<boolean>(false);

  useEffect(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll;
    if (!autoScroll) return;

    const isAutoScrollPlaying = autoScroll.isPlaying as () => boolean;
    setIsPlaying(!!isAutoScrollPlaying());

    const eventHandlers = {
      "autoScroll:play": () => setIsPlaying(true),
      "autoScroll:stop": () => setIsPlaying(false),
      reInit: () => setIsPlaying(false),
    };

    Object.entries(eventHandlers).forEach(([event, handler]) => {
      emblaApi.on(event as EmblaEventType, handler);
    });

    isMounted.current = true;

    return () => {
      if (isMounted.current) {
        Object.entries(eventHandlers).forEach(([event, handler]) => {
          emblaApi.off(event as EmblaEventType, handler);
        });
      }
    };
  }, [emblaApi]);

  return (
    <Embla>
      <EmblaViewport ref={emblaRef}>
        <EmblaContainer>
          {slides.map((edition, index) => (
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
              onClick={() => {
                onDotButtonClick(index);
                const autoScroll = emblaApi?.plugins()?.autoScroll;
                if (autoScroll && typeof autoScroll.stop === "function") {
                  autoScroll.stop();
                }
              }}
              selectedIndex={selectedIndex === index}
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
