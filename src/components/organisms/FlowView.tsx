import React, { useState, useEffect, useCallback } from 'react';
import ReactFlow, { useNodesState, useEdgesState, addEdge, MiniMap, Controls, Position, useReactFlow, ReactFlowProvider, Background, Connection } from 'react-flow-renderer';

import { makeKeyNode, makeChordNode } from '../libs/creator';
import { nodeTypes } from '../nodes';
import { Chord } from '@tonaljs/tonal';
import { ChordNodeData, KeyNodeData, keySignature } from '../libs/types';
import UUID from "uuidjs";

const snapGrid: [number, number] = [20, 20];
const init = { sig: "" as keySignature, isMajor: true }

const FlowView = () => {
    const [nodes, setNodes, onNodesChange] = useNodesState<KeyNodeData | ChordNodeData>([
        makeKeyNode({ x: 0, y: 0 }, { keySig: init.sig, isMajor: init.isMajor }),
    ]);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);

    useEffect(() => {
        console.log('FlowView > useEffect(nodes) > nodes :', nodes)
    }, [nodes]);

    const onConnect = useCallback(
        (connection: Connection) => setEdges((eds) => addEdge(connection, eds)),
        [setEdges]
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
            <Background />
        </ReactFlow>
    );
};


export default FlowView;
