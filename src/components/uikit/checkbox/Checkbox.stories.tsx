import { Meta, Story } from "@storybook/react";
import Checkbox, { CheckboxType } from "./Checkbox.js";

export default {
    title: "Checkbox",
    component: Checkbox,
} as Meta;

const Template: Story<CheckboxType> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
    checked: false,
    onChange: () => {},
    label: "Checkbox",
};

export const Checked = Template.bind({});
Checked.args = {
    checked: true,
    onChange: () => {},
    label: "Checkbox",
};

export const Disabled = Template.bind({});
Disabled.args = {
    checked: false,
    onChange: () => {},
    label: "Checkbox",
    disabled: true,
};
