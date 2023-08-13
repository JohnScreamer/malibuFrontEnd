import { Meta, Story } from "@storybook/react";
import Toggle, { ToggleType } from "./Toggle.js";

export default {
    title: "Toggle",
    component: Toggle,
} as Meta;

const Template: Story<ToggleType> = (args) => <Toggle {...args} />;

export const Default = Template.bind({});
Default.args = {
    checked: false,
    onChange: () => {},
    label: "Toggle",
};

export const Checked = Template.bind({});
Checked.args = {
    checked: true,
    onChange: () => {},
    label: "Toggle",
};

export const Disabled = Template.bind({});
Disabled.args = {
    checked: false,
    onChange: () => {},
    label: "Toggle",
    disabled: true,
};
