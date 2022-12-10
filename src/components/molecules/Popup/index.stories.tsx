import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Popup from ".";

export default {
    title: "Components/molecules/Popup",
    component: Popup,
    argTypes: {},
} as ComponentMeta<typeof Popup>;

const Template: ComponentStory<typeof Popup> = (args) => (
    <div style={{ background: "black", minHeight: "100vh" }}>
        <div
            style={{
                position: "fixed",
                left: "50%",
                top: "10%",
                transform: "translateX(-50%)",
            }}
        >
            <Popup {...args} />
        </div>

        <div className='my-10'>
            <div
                style={{
                    position: "fixed",
                    left: "50%",
                    top: "70%",
                    transform: "translateX(-50%)",
                }}
            >
                <Popup variant="edit" id={1} description='gfergerdnhethet' />
            </div>
        </div>
    </div>
);

export const Primary = Template.bind({});
Primary.args = {
    inputProps: {
        placeholder: "Add a comment...",
    },
    id: 1,
};

export const Secondary = Template.bind({});
Secondary.args = {};
