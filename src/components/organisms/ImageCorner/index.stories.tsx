import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ImageCorner from ".";

export default {
  title: "Components/organisms/ImageCorner",
  component: ImageCorner,
  argTypes: {},
} as ComponentMeta<typeof ImageCorner>;

const Template: ComponentStory<typeof ImageCorner> = (args) => <div style={{ minHeight:"200vh" }}><ImageCorner {...args} /></div>;

export const Primary = Template.bind({});
Primary.args = {};

export const Secondary = Template.bind({});
Secondary.args = {};