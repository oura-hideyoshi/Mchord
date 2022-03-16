import React, { useState, useEffect, useCallback } from 'react';
import ReactFlow, { useNodesState, useEdgesState, addEdge, MiniMap, Controls } from 'react-flow-renderer';

import KeySelectorNode from '../atoms/KeySelectorNode';

const initBgColor = '#1A192B';

const snapGrid: [number, number] = [20, 20];
const nodeTypes = {
    KeySelectorNode: KeySelectorNode,
};

const FlowView = () => {
    const [nodes, setNodes, onNodesChange] = useNodesState([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);

    useEffect(() => {

        setNodes([
            {
                id: '1',
                type: 'KeySelectorNode',
                data: { initKey: "E" },
                style: { border: '1px solid #777', padding: 10 },
                position: { x: 300, y: 50 },
            },
        ]);

        setEdges([

        ]);
    }, []);

    const onConnect = useCallback(
        (params) => setEdges((eds) => addEdge({ ...params, animated: true, style: { stroke: '#fff' } }, eds)),
        []
    );
    return (
        <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            nodeTypes={nodeTypes}
            snapToGrid={true}
            snapGrid={snapGrid}
            defaultZoom={1.5}
            fitView
            attributionPosition="bottom-left"
        >
            <MiniMap />
            <Controls />
        </ReactFlow>
    );
};

export default FlowView;
