import * as React from 'react';
import ReactFlow, { Elements } from 'react-flow-renderer';

export interface ITemplateMapProps {
    elements: Elements
}

const TemplateMap = ({ elements }: ITemplateMapProps) => {

    return (
        <div>
            <ReactFlow elements={elements} />
        </div>
    );
}

export default TemplateMap