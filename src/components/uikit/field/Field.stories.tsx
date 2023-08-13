import React from "react";
import { Meta, Story } from "@storybook/react";
import Field, { FieldType } from "./Field.js";

export default {
    title: "Components/Field",
    component: Field,
} as Meta;

const Template: Story<FieldType> = (args) => <Field {...args} />;

// Default Field
export const Default = Template.bind({});
Default.args = {
    label: "Default Field",
};

// Field with left element
export const WithLeftElement = Template.bind({});
WithLeftElement.args = {
    label: "Field with Left Element",
    leftElem: <span>👈</span>,
};

// Field with right element
export const WithRightElement = Template.bind({});
WithRightElement.args = {
    label: "Field with Right Element",
    rightElem: <span>👉</span>,
};

// Field with small size
export const SmallSize = Template.bind({});
SmallSize.args = {
    label: "Field with Small Size",
    sizeType: "small",
};

// Field with passSvg
export const WithPassSvg = Template.bind({});
WithPassSvg.args = {
    label: "Field with Pass Svg",
    passSvg: true,
};

// Field with custom class
export const WithCustomClass = Template.bind({});
WithCustomClass.args = {
    label: "Field with Custom Class",
    className: "custom-class",
};

// Field with additional props
export const WithAdditionalProps = Template.bind({});
WithAdditionalProps.args = {
    label: "Field with Additional Props",
    disabled: true,
    onChange: () => {
        console.log("Field changed");
    },
};

// Field with all variations
export const AllVariations = Template.bind({});
AllVariations.args = {
    label: "Field with All Variations",
    sizeType: "small",
    rightElem: <span>👉</span>,
    leftElem: <span>👈</span>,
    passSvg: true,
    className: "custom-class",
    disabled: true,
};
