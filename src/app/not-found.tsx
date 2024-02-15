"use client";

import { Background, Section } from "@/app/genericComponents/General";
import {
  BlockTitle,
  BodyLink,
  SectionTitle,
} from "@/app/genericComponents/Typography";
import { Secondary500 } from "@/app/genericComponents/tokens";

export default function NotFound() {
  return (
    <Section>
      <Background />
      <SectionTitle>404 Page not found</SectionTitle>
      <BlockTitle color={Secondary500} haveMargin>
        The URL you are looking for does not exist
      </BlockTitle>
      <BodyLink href="/">Return Home</BodyLink>
    </Section>
  );
}
