import * as React from 'react';
import ReactFlow, { Elements, FlowElement, Node, NodeProps } from 'react-flow-renderer';

export interface IReactFlowSampleProps {
}

const node1: Node =
{
    id: '1',
    type: 'input', // input node
    data: { label: 'Node' },
    position: { x: 250, y: 25 },
}

const elements: FlowElement[] = [
    node1,
]

export default class ReactFlowSample extends React.Component<IReactFlowSampleProps> {
    public render() {
        return (
            <div style={{ height: 300 }}>
                <ReactFlow elements={elements} />
            </div>
        );
    }
}
