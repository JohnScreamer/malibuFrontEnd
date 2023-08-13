import { Meta, Story } from "@storybook/react";
import Tooltips, { TooltipsType } from "./Tooltips.js";

export default {
    title: "Tooltips",
    component: Tooltips,
} as Meta;

const Template: Story<TooltipsType> = (args) => <Tooltips {...args} />;

export const Default = Template.bind({});
Default.args = {
    withSvg: true,
    children: "Tooltip text",
    arrowSide: "t",
    variant: "info",
};

export const ErrorVariant = Template.bind({});
ErrorVariant.args = {
    withSvg: true,
    children: "Error tooltip",
    arrowSide: "b",
    variant: "error",
};

export const NoSvg = Template.bind({});
NoSvg.args = {
    withSvg: false,
    children: "Tooltip without SVG",
    arrowSide: "r",
    variant: "info",
};

export const CustomClassName = Template.bind({});
CustomClassName.args = {
    withSvg: true,
    children: "Custom classname tooltip",
    arrowSide: "l",
    variant: "info",
    className: "custom-tooltip",
};
