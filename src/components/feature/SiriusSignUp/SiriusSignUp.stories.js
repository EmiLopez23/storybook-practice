import { SiriusSignUp } from "./SiriusSignUp";
import { userEvent, within, expect } from "@storybook/test";
export default {
  title: "Components/Feature/SiriusSignUp",
  component: SiriusSignUp,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
};

export const SignUp = {
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step("Enter full name", async () => {
      const FullNameinput = canvas.getByPlaceholderText(/Full name/);
      await expect(FullNameinput).toBeInTheDocument();
      await userEvent.type(FullNameinput, "John Doe");
      await expect(FullNameinput).toHaveValue("John Doe");
    });

    await step("Enter email", async () => {
      const Emailinput = canvas.getByPlaceholderText(/Email/);
      await expect(Emailinput).toBeInTheDocument();
      await userEvent.type(Emailinput, "john_doe@gmail.com");
      await expect(Emailinput).toHaveValue("john_doe@gmail.com");
    });

    await step("Enter password", async () => {
      const Passwordinput = canvas.getByPlaceholderText(/Password/, {
        exact: true,
      });
      await expect(Passwordinput).toBeInTheDocument();
      await userEvent.type(Passwordinput, "password");
      await expect(Passwordinput).toHaveValue("password");
    });

    await step("Enter confirm password", async () => {
      const ConfirmPasswordinput = canvas.getByPlaceholderText(
        /Confirm password/,
        { exact: true }
      );
      await expect(ConfirmPasswordinput).toBeInTheDocument();
      await userEvent.type(ConfirmPasswordinput, "password");
      await expect(ConfirmPasswordinput).toHaveValue("password");
    });

    await step("Submit form", async () => {
      const loginButton = canvas.getByRole("button", { name: /Sign up/i });
      await expect(loginButton).toBeInTheDocument();
      await userEvent.click(loginButton);
    });
  },
};

// export const LoggedIn = {
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     const loginButton = canvas.getByRole('button', { name: /Log in/i });
//     await expect(loginButton).toBeInTheDocument();
//     await userEvent.click(loginButton);
//     await expect(loginButton).not.toBeInTheDocument();

//     const logoutButton = canvas.getByRole('button', { name: /Log out/i });
//     await expect(logoutButton).toBeInTheDocument();
//   },
// };
