import React, { useState, useEffect, useCallback } from 'react';
import ReactFlow, { useNodesState, useEdgesState, addEdge, MiniMap, Controls, Position, useReactFlow, ReactFlowProvider } from 'react-flow-renderer';

import { makeKeyNode, makeChordNode } from '../libs/creator';
import { nodeTypes } from '../nodes';
import { Chord } from '@tonaljs/tonal';
import { ChordNodeData, KeyNodeData, keySignature } from '../libs/types';

const snapGrid: [number, number] = [20, 20];
const init = { sig: "#" as keySignature, isMajor: true }

const FlowView = () => {
    const [nodes, setNodes, onNodesChange] = useNodesState<KeyNodeData | ChordNodeData>([
        makeKeyNode("1", { x: 0, y: 0 }, { keySig: init.sig, isMajor: init.isMajor }),
        makeChordNode("2", { x: 200, y: 0 }, {
            chord: { typeName: "", optionalTonic: "C" }, keySig: '#', isMajor: true
        }),
        makeChordNode("3", { x: 400, y: 0 }, {
            chord: { typeName: "", optionalTonic: "D" }, keySig: '#', isMajor: true
        })
    ]);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);

    useEffect(() => {
        console.log('FlowView > useEffect(nodes) > nodes :', nodes)
    }, [nodes]);

    const onConnect = useCallback(
        (params) => setEdges((eds) => addEdge({ ...params, animated: true }, eds)),
        []
    );
    return (
        <>
            <ReactFlowProvider>
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
            </ReactFlowProvider>
        </>
    );
};


export default FlowView;
