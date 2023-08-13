import React from "react";
import { Meta, Story } from "@storybook/react";
import Button, { ButtonType } from "./Button.js";

export default {
    title: "Components/Button",
    component: Button,
} as Meta;

const Template: Story<ButtonType> = (args) => <Button {...args} />;

// Default Button
export const Default = Template.bind({});
Default.args = {
    children: "Default Button",
};

// Primary Button
export const Primary = Template.bind({});
Primary.args = {
    children: "Primary Button",
    variant: "primary",
};

// Secondary Button
export const Secondary = Template.bind({});
Secondary.args = {
    children: "Secondary Button",
    variant: "secondary",
};

// Grey Button
export const Grey = Template.bind({});
Grey.args = {
    children: "Grey Button",
    variant: "grey",
};

// Red Button
export const Red = Template.bind({});
Red.args = {
    children: "Red Button",
    variant: "red",
};

// Button with left element
export const WithLeftElement = Template.bind({});
WithLeftElement.args = {
    children: "Button with Left Element",
    leftElem: <span>👈</span>,
};

// Button with right element
export const WithRightElement = Template.bind({});
WithRightElement.args = {
    children: "Button with Right Element",
    rightElem: <span>👉</span>,
};

// Button with full width
export const FullWidth = Template.bind({});
FullWidth.args = {
    children: "Full Width Button",
    full: true,
};

// Button with custom class
export const WithCustomClass = Template.bind({});
WithCustomClass.args = {
    children: "Button with Custom Class",
    className: "custom-class",
};

// Button with additional props
export const WithAdditionalProps = Template.bind({});
WithAdditionalProps.args = {
    children: "Button with Additional Props",
    disabled: true,
    onClick: () => {
        alert("Button clicked!");
    },
};

// Button with different sizes
export const Sizes = Template.bind({});
Sizes.args = {
    children: "Button Sizes",
    size: "big",
};

export const MiniSize = Template.bind({});
MiniSize.args = {
    children: "Mini Button Size",
    size: "mini",
};

export const DefaultSize = Template.bind({});
DefaultSize.args = {
    children: "Default Button Size",
    size: "default",
};

// Button with different filled types
export const FilledTypes = Template.bind({});
FilledTypes.args = {
    children: "Button Filled Types",
    filledType: "filed",
};

export const BorderFilledType = Template.bind({});
BorderFilledType.args = {
    children: "Button Border Filled Type",
    filledType: "border",
};

export const EmptyFilledType = Template.bind({});
EmptyFilledType.args = {
    children: "Button Empty Filled Type",
    filledType: "empty",
};

// Button with absolute positioned elements
export const AbsolutePositionedElements = Template.bind({});
AbsolutePositionedElements.args = {
    children: "Button with Absolute Positioned Elements",
    elemAbsolute: true,
};

// Button with all variations
export const AllVariations = Template.bind({});
AllVariations.args = {
    children: "Button with All Variations",
    variant: "secondary",
    size: "big",
    filledType: "border",
    full: true,
    elemAbsolute: true,
    leftElem: <span>👈</span>,
    rightElem: <span>👉</span>,
    className: "custom-class",
};
