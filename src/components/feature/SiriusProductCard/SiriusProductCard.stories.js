import { SiriusProductCard } from "./SiriusProductCard";

export default {
  title: "Components/Feature/SiriusProductCard",
  component: SiriusProductCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
};

export const ProductCard = {
  args: {
    title: "Sirius Product Card",
    description: "This is a product card",
    productUrl: "https://a.co/d/afNx1yh",
    imageUrl: "https://m.media-amazon.com/images/I/71-D1xCuVwL._AC_SX679_.jpg",
  },
};