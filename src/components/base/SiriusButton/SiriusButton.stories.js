import { fn } from "@storybook/test";
import { SiriusButton } from "./SiriusButton";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Components/Base/SiriusButton",
  component: SiriusButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],

  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { 
    onClick: fn()   
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    type: "primary",
    children: "Button",
  },
};

export const Default = {
  args: {
    type: "default",
    children: "Button",
  },
};

export const Dashed = {
  args: {
    type: "dashed",
    children: "Button",
  },
};

export const Text = {
  args: {
    type: "text",
    children: "Button",
  },
};

export const Link = {
  args: {
    type: "link",
    children: "Button",
  },
};

export const Loading = {
  args: {
    ...Default.args,
    loading: true,
  },
};

export const Disabled = {
  args: {
    ...Default.args,
    disabled: true,
  },
};

export const Small = {
  args: {
    ...Default.args,
    size: "small",
  },
};

export const Middle = {
  args: {
    ...Default.args,
    size: "middle",
  },
};

export const Large = {
  args: {
    ...Default.args,
    size: "large",
  },
};

