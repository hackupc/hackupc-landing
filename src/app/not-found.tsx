"use client";

import { Section } from "@/app/genericComponents/General";
import {
  BlockTitle,
  BodyLink,
  SectionTitle,
} from "@/app/genericComponents/Typography";
import { Secondary500 } from "@/app/genericComponents/tokens";

export default function NotFound() {
  return (
    <Section>
      <SectionTitle>Not Found</SectionTitle>
      <BlockTitle color={Secondary500} haveMargin>
        Could not find requested resource
      </BlockTitle>
      <BodyLink href="/">Return Home</BodyLink>
    </Section>
  );
}
