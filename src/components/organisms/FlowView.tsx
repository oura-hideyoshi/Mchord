import React, { useState, useEffect, useCallback } from 'react';
import ReactFlow, { useNodesState, useEdgesState, addEdge, MiniMap, Controls, Position } from 'react-flow-renderer';

import KeyNode from '../nodes/KeyNode';
import ChordNode from '../nodes/ChordNode';
import { makeKeyNode, makeChordNode } from '../libs/creator';
import { Chord, Key } from '@tonaljs/tonal';

const snapGrid: [number, number] = [20, 20];
const nodeTypes = {
    KeyNode: KeyNode,
    ChordNode: ChordNode
};

const FlowView = () => {
    const [nodes, setNodes, onNodesChange] = useNodesState([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);

    useEffect(() => {

        setNodes([
            makeKeyNode("1", { x: 0, y: 0 }, "D"),
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
