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
  display: inline-flex;
  text-decoration: none;
  cursor: url("/rocket-fire.png"), auto;
  border: 0;
  padding: 0;
  margin: 0.1rem;
  width: 1rem;
  height: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  position: relative;
  background-color: ${(props) => {
    return props.selectedIndex ? "orangered" : "slategray";
  }}; 



  &::after {
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const DotButton: React.FC<PropType> = ({
  selectedIndex,
  children,
  ...restProps
}) => {
  // Extract the selectedIndex prop and pass the rest of the props to the styled component
  return (
    <EmblaDot selectedIndex={selectedIndex} {...restProps}>
      {children}
    </EmblaDot>
  );
};
