import { DM_Serif_Display, Inter, Roboto } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const dm_serif_display = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  style: "italic",
  display: "swap",
});
