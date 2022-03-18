import React, { useState, useEffect, useCallback } from 'react';
import ReactFlow, { useNodesState, useEdgesState, addEdge, MiniMap, Controls, Position } from 'react-flow-renderer';

import { makeKeyNodeObj, makeChordNode } from '../libs/creator';
import { nodeTypes } from '../nodes';
import { Chord } from '@tonaljs/tonal';

const snapGrid: [number, number] = [20, 20];

const FlowView = () => {
    const [nodes, setNodes, onNodesChange] = useNodesState([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);

    useEffect(() => {

        setNodes([
            makeKeyNodeObj("1", { x: 0, y: 0 }, "#", true),
            makeChordNode("2", { x: 200, y: 0 }, Chord.get("C"))
        ]);

        setEdges([

        ]);
    }, []);

    const onConnect = useCallback(
        (params) => setEdges((eds) => addEdge({ ...params, animated: true }, eds)),
        []
    );
    return (
        <>
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
        </>
    );
};

export default FlowView;
