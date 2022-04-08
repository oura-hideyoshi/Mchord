import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ChordDebugger } from "./ChordDebugger";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'TonalJS/Chord',
    component: ChordDebugger,
    argTypes: {
        chordName: { control: 'text' },
    },
} as ComponentMeta<typeof ChordDebugger>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ChordDebugger> = (args) => <ChordDebugger {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    chordName: "C",
    getChordName: ["maj7", "G4", "B4"],
    detectChordName: ["D", "F#", "A", "C"],
    extendedChordName: "Cmaj7",
    reducedChordName: "C7"
};
