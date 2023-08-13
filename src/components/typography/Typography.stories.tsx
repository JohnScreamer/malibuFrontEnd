import { Story, Meta } from "@storybook/react";
import Typography, { TypographyType } from "./Typography.js";

export default {
    title: "Typography",
    component: Typography,
} as Meta;

const Template: Story<TypographyType> = (args) => <Typography {...args} />;

export const BigTitle = Template.bind({});
BigTitle.args = {
    tag: "bigTitle",
    children: "Big Title",
};

export const Title = Template.bind({});
Title.args = {
    tag: "title",
    children: "Title",
};

export const Text = Template.bind({});
Text.args = {
    tag: "text",
    children: "Text",
};

export const Span = Template.bind({});
Span.args = {
    tag: "span",
    children: "Span",
};

export const CustomStyle = Template.bind({});
CustomStyle.args = {
    children: "Custom Style",
};

export const VariantXS = Template.bind({});
VariantXS.args = {
    children: "Variant XS",
    variant: "XS",
};

export const VariantXL = Template.bind({});
VariantXL.args = {
    children: "Variant XL",
    variant: "XL",
};

export const FontBold = Template.bind({});
FontBold.args = {
    children: "Font Bold",
};
