import React from "react";
import { Meta, Story } from "@storybook/react";
import CardExample from "./CardExample.js";

export default {
    title: "CardExample",
    component: CardExample,
} as Meta;

const Template: Story = (args) => <CardExample {...args} />;

export const Default = Template.bind({});
Default.args = {};

// Add more stories if needed
