import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import PinBar from ".";

export default {
    title: "Components/organisms/PinBar",
    component: PinBar,
    argTypes: {},
} as ComponentMeta<typeof PinBar>;

const Template: ComponentStory<typeof PinBar> = () => {
    const [percent, setPercent] = React.useState(100);
    const [active, setActive] = React.useState(false);
    console.log(active);

    return (
        <PinBar
            imageName='Flamingo-concept.png'
            handleDecrePercent={() => setPercent(percent - 1)}
            handleIncrePercent={() => setPercent(percent + 1)}
            percent={percent}
            active={active}
            handleChangeActive={() => setActive(!active)}
        />
    );
};

export const Primary = Template.bind({});
Primary.args = {};

export const Secondary = Template.bind({});
Secondary.args = {};
