import { Montserrat, Silkscreen } from "next/font/google";
import localFont from "next/font/local";

export const montserrat = Montserrat({ subsets: ["latin"] });
export const silom = localFont({
  src: "Silom.ttf",
});
export const silkscreen = Silkscreen({
  subsets: ["latin"],
  weight: "400",
});
