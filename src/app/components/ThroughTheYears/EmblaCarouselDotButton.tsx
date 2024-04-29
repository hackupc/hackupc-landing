import React, {
  PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { EmblaCarouselType } from "embla-carousel";
import styled from "styled-components";

type UseDotButtonType = {
  selectedIndex: number;
  scrollSnaps: number[];
  onDotButtonClick: (index: number) => void;
};

export const useDotButton = (
  emblaApi: EmblaCarouselType | undefined,
): UseDotButtonType => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi],
  );

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick,
  };
};

type PropType = PropsWithChildren<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > & {
    selectedIndex: boolean;
  }
>;

const EmblaDot = styled.button<{ selectedIndex: boolean }>`
  appearance: none;
  touch-action: manipulation;
  text-decoration: none;
  cursor: url("/rocket-fire.png"), auto;
  border: 0;
  padding: 0.6rem;
  margin: 0.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  position: relative;
  user-select: none;
  outline: none;

  background-color: ${(props) => {
    return props.selectedIndex ? "orangered" : "slategray";
  }};
`;

export const DotButton: React.FC<PropType> = ({
  selectedIndex,
  children,
  ...restProps
}) => {
  return (
    <EmblaDot selectedIndex={selectedIndex} {...restProps}>
      {children}
    </EmblaDot>
  );
};
