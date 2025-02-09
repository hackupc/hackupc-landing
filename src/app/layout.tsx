import type { Metadata } from "next";
import "./globals.css";
import StyledComponentsRegistry from "@/app/lib/registry";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { montserrat } from "@/app/genericComponents/fonts";
import Script from "next/script";
import { Clarity } from "@/app/metrics/Clarity";
import { GoogleAnalytics } from "@next/third-parties/google";
import { EventStructuredData } from "@/app/metrics/EventStructuredData";

config.autoAddCss = false;
export const metadata: Metadata = {
  title: "HackUPC 2025 | May 2-4 | Student hackathon in Barcelona",
  description: "Student hackathon in Barcelona on May 2-4 for 36 hours",
  authors: { name: "Hackers@UPC", url: "https://hackersatupc.org/" },
  keywords: [
    "Hackathon, Hacker, Student, University, College, Programming, Technology, UPC, Barcelona, Spain",
  ],
  twitter: {
    site: "@hackupc",
    card: "summary_large_image",
    creator: "@hackupc",
    title: "HackUPC 2025 | May 2-4 | Student hackathon Barcelona",
    description:
      "36 hours student hackathon in Barcelona in May starting on the 2nd ending the 4th",
    images: {
      url: "https://hackupc.com/ogimage.png?v=2024",
      secureUrl: "https://hackupc.com/ogimage.png?v=2024",
      alt: "HackUPC 2025 | May 2-4 | Student hackathon in Barcelona",
    },
  },
  openGraph: {
    title: "HackUPC 2025 | May 2-4 | Student hackathon Barcelona",
    type: "website",
    siteName: "HackUPC",
    locale: "en_GB",
    description:
      "36 hours student hackathon in Barcelona in May starting on the 2nd ending the 4th",
    url: "https://hackupc.com",
    images: {
      url: "https://hackupc.com/ogimage.png?v=2024",
      secureUrl: "https://hackupc.com/ogimage.png?v=2024",
      alt: "HackUPC landing page screenshot",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <StyledComponentsRegistry>
        <body className={montserrat.className}>
          <a
            id="mlh-trust-badge"
            style={{
              display: "block",
              maxWidth: 100,
              minWidth: 60,
              position: "fixed",
              right: 50,
              top: 0,
              width: "10%",
              zIndex: 10000,
            }}
            href="https://mlh.io/eu?utm_source=eu-hackathon&utm_medium=TrustBadge&utm_campaign=2025-season&utm_content=black"
            target="_blank"
            rel="noreferrer"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://s3.amazonaws.com/logged-assets/trust-badge/2025/mlh-trust-badge-2025-black.svg"
              alt="Major League Hacking 2025 Hackathon Season"
              style={{ width: "100%" }}
            />
          </a>
          <Script
            id="cookieyes"
            type="text/javascript"
            src="https://cdn-cookieyes.com/client_data/f0da360b52ebfbe361cbc559/script.js"
          />
          {children}
          <Clarity />
          <EventStructuredData />
          <GoogleAnalytics gaId="G-WFBH19BZ64" />
        </body>
      </StyledComponentsRegistry>
      <Script async src="https://easter-egg.hackupc.com/index.js"></Script>
    </html>
  );
}
