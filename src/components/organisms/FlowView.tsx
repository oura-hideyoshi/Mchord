import React, { useState, useEffect, useCallback } from 'react';
import ReactFlow, { useNodesState, useEdgesState, addEdge, MiniMap, Controls, Position, useReactFlow } from 'react-flow-renderer';

import { makeKeyNode, makeChordNode } from '../libs/creator';
import { nodeTypes } from '../nodes';
import { Chord } from '@tonaljs/tonal';
import { keySignature } from '../libs/types';

const snapGrid: [number, number] = [20, 20];
const init = { sig: "#" as keySignature, isMajor: true }

const FlowView = () => {
    const [nodes, setNodes, onNodesChange] = useNodesState([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);

    useEffect(() => {

        setNodes([
            makeKeyNode("1", { x: 0, y: 0 }, { sig: init.sig, isMajor: init.isMajor }),
            makeChordNode("2", { x: 200, y: 0 }, {
                chord: { typeName: "", optionalTonic: "C" }, sig: '#', isMajor: false
            })
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
