import type { Meta, StoryObj } from "@storybook/react";
import Letter from "../app/components/Letter";

const meta: Meta<typeof Letter> = {
  component: Letter,
};

export default meta;
type Story = StoryObj<typeof Letter>;
export const Active: Story = {
  render: () => (
    <Letter letter={{ index: 0, character: "A", display: "" }} progress={0} />
  ),
};

export const NotActive: Story = {
	render: () => (
	  <Letter letter={{ index: 1, character: "A", display: "" }} progress={0} />
	),
  };
