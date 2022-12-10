import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import PinId from ".";

export default {
  title: "Components/molecules/PinId",
  component: PinId,
  argTypes: {},
} as ComponentMeta<typeof PinId>;

const Template: ComponentStory<typeof PinId> = (args) => <PinId {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const Secondary = Template.bind({});
Secondary.args = {};