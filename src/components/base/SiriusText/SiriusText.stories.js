import { fn } from "@storybook/test";
import { SiriusText } from "./SiriusText";
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Components/Base/SiriusText",
  component: SiriusText,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
};

export const Default = {
  args: {
    children: "Sirius Text",
    variant: "default",
    type: "text",
  },
};

export const Secondary = {
  args: {
    children: "Sirius Text",
    variant: "secondary",
    type: "text",
  },
};

export const Warning = {
  args: {
    children: "Sirius Text",
    variant: "warning",
    type: "text",
  },
};

export const Danger = {
  args: {
    children: "Sirius Text",
    variant: "danger",
    type: "text",
  },
};

export const Link = {
  args: {
    children: "Sirius Text",
    type: "link",
    href: "https://www.youtube.com/watch?v=35XFAkwmU4c",
    target: "_blank",
    variant: "default",
  },
};
