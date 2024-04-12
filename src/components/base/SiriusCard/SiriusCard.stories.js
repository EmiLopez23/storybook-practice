import { fn } from "@storybook/test";
import { SiriusCard } from "./SiriusCard";
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Components/Base/SiriusCard",
  component: SiriusCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
};

export const Bordered = {
  args: {
    title: "Sirius Card",
    bordered: true,
    children: "lorem ipsum dolor sit amet",
  },
};

export const Borderless = {
  args: {
    title: "Sirius Card",
    bordered: false,
    children: "lorem ipsum dolor sit amet",
  },
};

export const Styled = {
  args: {
    title: "Sirius Card",
    bordered: true,
    style: { width: 300, backgroundColor: "#fafafa", borderColor:"red" },
    children: "lorem ipsum dolor sit amet",
  },
}
