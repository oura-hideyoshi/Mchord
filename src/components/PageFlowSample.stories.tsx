import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ReactFlowSample from './ReactFlowSample';

export interface ISReactFlowSampleProps {
}

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Example/ReactFlowSample',
    component: ReactFlowSample,

} as ComponentMeta<typeof ReactFlowSample>;

const Template: ComponentStory<typeof ReactFlowSample> = (args) => <ReactFlowSample {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};