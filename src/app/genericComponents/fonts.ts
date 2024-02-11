import { Montserrat } from "next/font/google";
import localFont from "next/font/local";

export const montserrat = Montserrat({ subsets: ["latin"] });
export const silom = localFont({
  src: "Silom.ttf",
});
