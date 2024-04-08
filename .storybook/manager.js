import { addons } from "@storybook/manager-api";
import { create } from "@storybook/theming";

// pink: #ea41fe, turquesa: #0ff2fe, lila: #8493FE, blue:#172157, lighter blue: #0e2839

addons.setConfig({
  theme: create({
    base: "dark",
    // brand logo
    brandTitle: "Sirius Software",
    brandUrl: "https://sirius.com.ar/",
    brandImage: "/SiriusLogo.png",

    // files logo colors
    colorPrimary: "#CD65DE",
    colorSecondary: "#8493FE",

    // UI
    appBg: "#081924",
    appContentBg: "#102133",
    appPreviewBg: "#fafafa",
    appBorderColor: "#8392fb73",
    appBorderRadius: 4,

    // Text colors
    textColor: "#ffffff",
    textInverseColor: "#ffffff",

    // Toolbar default and active colors
    barTextColor: "#798186",
    barSelectedColor: "#8493FE",
    barHoverColor: "#8493FE",
    barBg: "#102133",

    // Form colors
    inputBg: "transparent",
    inputBorder: "#585C6D",
    inputTextColor: "#ffffff",
    inputBorderRadius: 2,
  }),
});
