import { Gilda_Display } from "next/font/google";

const gilda = Gilda_Display({ subsets: ["latin"], weight: "400" });

export const fontVariables = `${gilda.style}`;
