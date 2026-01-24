import React, { useCallback } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  EmblaEventType,
  EmblaOptionsType,
} from "embla-carousel";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";

type Edition = {
  url: string;
  img: string;
};

type PropType = {
  slides: Edition[];
  options?: EmblaOptionsType;
};

const Embla = styled.div`
  position: relative;
  display: flex;
  max-width: 100%;
  margin: 0 auto;
  padding-top: 20px;
  background-color: #65936d;
  --slide-spacing: 1rem;
  --slide-size: 100%;
  --slide-spacing-sm: 10rem;
  --slide-size-sm: 20%;
  --slide-spacing-lg: 2rem;
  --slide-size-lg: calc(100% / 8);
`;

const EmblaViewport = styled.div`
  overflow: hidden;
`;

const EmblaContainer = styled.div`
  backface-visibility: hidden;
  display: flex;
  touch-action: pan-y;
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

const ArrowButton = styled.button`
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const EmblaCarousel: React.FC<PropType> = ({ slides, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, []);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

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

  return (
    <Embla>
      <ArrowButton className="embla__prev" onClick={scrollPrev}>
        <Image
          src="/ThroughTheYears/LeftArrow.svg"
          alt="Previous"
          width="100"
          height="75"
        />
      </ArrowButton>
      <EmblaViewport ref={emblaRef}>
        <EmblaContainer>
          {slides.map((edition, index) => (
            <EmblaSlide key={index}>
              {edition.url ? (
                <Link href={edition.url} target="_blank">
                  <Image
                    src={edition.img}
                    alt="altText"
                    width="150"
                    height="150"
                  />
                </Link>
              ) : (
                <div>
                  <Image
                    src={edition.img}
                    alt="altText"
                    width="150"
                    height="150"
                  />
                </div>
              )}
            </EmblaSlide>
          ))}
        </EmblaContainer>
      </EmblaViewport>
      <ArrowButton className="embla__next" onClick={scrollNext}>
        <Image
          src="/ThroughTheYears/RightArrow.svg"
          alt="Next"
          width="100"
          height="75"
        />
      </ArrowButton>
    </Embla>
  );
};

export default EmblaCarousel;
