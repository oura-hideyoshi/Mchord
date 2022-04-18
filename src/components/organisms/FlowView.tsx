import React, { useState, useEffect, useCallback, useContext } from 'react';
import ReactFlow, { useNodesState, useEdgesState, addEdge, MiniMap, Controls, Position, useReactFlow, ReactFlowProvider, Background, Connection } from 'react-flow-renderer';

import { makeKeyNode, makeChordNode } from '../libs/creator';
import { nodeTypes } from '../nodes';
import { Chord } from '@tonaljs/tonal';
import { ChordNodeData, KeyNodeData, keySignature } from '../libs/types';
import UUID from "uuidjs";
import { MchordContext } from '../pages/Top';
import { initDataSet } from '../libs/initDataSet';

const snapGrid: [number, number] = [20, 20];
const init = { sig: "" as keySignature, isMajor: true }

const FlowView = () => {
    const [nodes, setNodes, onNodesChange] = useNodesState<KeyNodeData | ChordNodeData>(initDataSet.canon.nodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initDataSet.canon.edges);
    const { selectedNodeId, setSelectedNodeId } = useContext(MchordContext);

    useEffect(() => {
        console.log('FlowView > useEffect(nodes) > nodes :', nodes);

        // 唯一選択しているとき
        const selectedNodes = nodes.filter(node => node.selected);
        setSelectedNodeId(selectedNodes.length == 1 ? selectedNodes[0].id : "");
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
            className={"touchdevice-flow"}
        >
            <MiniMap />
            <Controls />
            <Background />
        </ReactFlow>
    );
};


export default FlowView;
