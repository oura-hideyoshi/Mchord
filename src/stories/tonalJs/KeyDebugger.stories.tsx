import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { KeyDebugger } from './KeyDebugger';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'TonalJS/Key',
    component: KeyDebugger,
    argTypes: {
        tonicKey: { control: 'text' },
        minorVariant: { control: 'radio' },
    },
} as ComponentMeta<typeof KeyDebugger>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof KeyDebugger> = (args) => <KeyDebugger {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    tonicKey: "C",
    minorVariant: 'natural',
    keySignature: "#"
};
