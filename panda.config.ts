import { defineConfig } from "@pandacss/dev";
import {
  colors,
  radius,
  fontSizes,
  semanticTokens,
  spacing,
  sizes
} from "./src/tokens";

export default defineConfig({
  preflight: true,
  include: ["./src/**/*.{js,jsx,ts,tsx,vue}", "./pages/**/*.{js,jsx,ts,tsx}", "./stories/**/*.{js,jsx,ts,tsx}"],
  exclude: [],
  theme: {
    tokens: {
      /* make this more readable... */
      colors: {
        ...colors,
      },
      radii: {
        ...radius,
      },
      fontSizes: {
        ...fontSizes
      },
      spacing: {
        ...spacing
      },
      sizes: {
        ...sizes
      }
    },
    semanticTokens: {
      colors: {
        ...semanticTokens,
      }

    },
  },
  outdir: "styled-system",
});
