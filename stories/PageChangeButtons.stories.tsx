import type { Meta, StoryObj } from "@storybook/react";
import PageChangeButtons from "../app/components/PageChangeButtons";

const meta: Meta<typeof PageChangeButtons> = {
  component: PageChangeButtons,
};

export default meta;
type Story = StoryObj<typeof PageChangeButtons>;
export const Default: Story = {
  render: () => <PageChangeButtons/>,
};
