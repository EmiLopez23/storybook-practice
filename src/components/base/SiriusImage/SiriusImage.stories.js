import { fn } from "@storybook/test";
import { SiriusImage } from "./SiriusImage";
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Components/Base/SiriusImage",
  component: SiriusImage,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
};

export const Default = {
  args: {
    width: 150,
    height: 150,
    alt: "Placeholder Image",
  },
};