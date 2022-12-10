import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import dummyData from "./dummyData";

import CommentTable from ".";

export default {
    title: "Components/organisms/CommentTable",
    component: CommentTable,
    argTypes: {},
} as ComponentMeta<typeof CommentTable>;

const Template: ComponentStory<typeof CommentTable> = (args) => (
    <div style={{ minHeight: "100vh", maxWidth: "400px" }}>
        <CommentTable {...args} />
    </div>
);

export const Primary = Template.bind({});
Primary.args = {
    dataComment: dummyData,
};

export const Secondary = Template.bind({});
Secondary.args = {};
