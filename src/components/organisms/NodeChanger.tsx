import React, { useContext, useState } from 'react'
import { useReactFlow } from 'react-flow-renderer';
import { ChordNodeData, KeyNodeData, MusicalNode } from '../libs/types';
import { NodeTypeNames } from '../nodes';
import { MchordContext } from '../pages/Top'

export const NodeChanger = () => {

    const { getNode } = useReactFlow<ChordNodeData | KeyNodeData>();
    const { selectedNodeId } = useContext(MchordContext);
    const selectedNode = getNode(selectedNodeId);

    const ChordNodeChanger = () => {
        return (
            <div>
                {selectedNode?.data.keySig}
            </div>
        )
    }
    const KeyNodeChanger = () => {
        return (
            <div>
                {selectedNode?.data.keySig}
            </div>
        )
    }

    return (
        <div>
            {selectedNode?.type == NodeTypeNames.ChordNode ? <ChordNodeChanger /> : null}
            {selectedNode?.type == NodeTypeNames.KeyNode ? <ChordNodeChanger /> : null}
        </div>
    )
}
