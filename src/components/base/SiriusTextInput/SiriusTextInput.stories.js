import { fn } from "@storybook/test";
import { SiriusTextInput } from "./SiriusTextInput";
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Components/Base/SiriusTextInput",
  component: SiriusTextInput,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onChange: fn() },
};

export const Text = {
  args: {
    placeholder: "This is a text input",
    type: "text",
  },
};

export const Password = {
  args: {
    placeholder: "This is a password input",
    type: "password",
  },
};