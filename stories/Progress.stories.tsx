import type { Meta, StoryObj } from "@storybook/react";
import Progress from "../app/components/progress/Progress";

const meta: Meta<typeof Progress> = {
  component: Progress,
};

export default meta;
type Story = StoryObj<typeof Progress>;
export const Default: Story = {
  render: () => <Progress/>,
};
