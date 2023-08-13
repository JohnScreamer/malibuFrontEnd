import { Meta, Story } from "@storybook/react";
import RadioButton, { RadioButtonType } from "./Radiobutton.js";

export default {
    title: "RadioButton",
    component: RadioButton,
} as Meta;

const Template: Story<RadioButtonType> = (args) => <RadioButton {...args} />;

export const Default = Template.bind({});
Default.args = {
    checked: false,
    onChange: () => {},
    label: "RadioButton",
};

export const Checked = Template.bind({});
Checked.args = {
    checked: true,
    onChange: () => {},
    label: "RadioButton",
};

export const Disabled = Template.bind({});
Disabled.args = {
    checked: false,
    onChange: () => {},
    label: "RadioButton",
    disabled: true,
};
