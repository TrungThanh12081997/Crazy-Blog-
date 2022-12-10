import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import TemplateBanicBear from ".";

export default {
  title: "Components/templates/TemplateBanicBear",
  component: TemplateBanicBear,
  argTypes: {},
} as ComponentMeta<typeof TemplateBanicBear>;

const Template: ComponentStory<typeof TemplateBanicBear> = (args) => <TemplateBanicBear {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const Secondary = Template.bind({});
Secondary.args = {};