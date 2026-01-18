"use client";

import { Section } from "@/app/genericComponents/General";
import { lora } from "@/app/genericComponents/fonts";
import {
  BlockTitle,
  BodyLink,
  SectionTitle,
} from "@/app/genericComponents/Typography";
import { Secondary500 } from "@/app/genericComponents/tokens";

export default function NotFound() {
  return (
    <Section>
      <SectionTitle className={lora.className}>404 Page not found</SectionTitle>
      <BlockTitle color={Secondary500} haveMargin>
        The URL you are looking for does not exist
      </BlockTitle>
      <BodyLink href="/">Return Home</BodyLink>
    </Section>
  );
}
