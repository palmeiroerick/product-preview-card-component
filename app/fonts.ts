import type { NextFontWithVariable } from "next/dist/compiled/@next/font";
import { Fraunces, Montserrat } from "next/font/google";

export const montserrat: NextFontWithVariable = Montserrat({
  weight: ["500", "700"],
  style: "normal",
  subsets: ["latin"],
  variable: "--montserrat",
});

export const fraunces: NextFontWithVariable = Fraunces({
  weight: "700",
  style: "normal",
  subsets: ["latin"],
  variable: "--fraunces",
});
