import { SiriusTitle } from "./SiriusTitle";
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Components/Base/SiriusTitle",
  component: SiriusTitle,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
};

export const h2 = {
  args: {
    title: "Sirius Title",
    level: 2,
  },
};

export const h3 = {
  args: {
    title: "Sirius Title",
    level: 3,
  },
};

export const h4 = {
  args: {
    title: "Sirius Title",
    level: 4,
  },
};

export const h5 = {
  args: {
    title: "Sirius Title",
    level: 5,
  },
};

