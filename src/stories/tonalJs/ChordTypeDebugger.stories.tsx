import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ChordTypeDebugger } from './ChordTypeDebugger';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'TonalJS/ChordType',
    component: ChordTypeDebugger,
} as ComponentMeta<typeof ChordTypeDebugger>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ChordTypeDebugger> = (args) => <ChordTypeDebugger {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    name: ""
};
