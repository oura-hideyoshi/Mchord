import { Chord, Key, Note, Range } from '@tonaljs/tonal';
import React, { useContext, useState } from 'react'
import { useReactFlow, Node } from 'react-flow-renderer';
import { ChordNodeData, KeyNodeData, keySignature, MusicalNode } from '../libs/types';
import { isChordNode, isKeyNode, isNodeChordNodeData, isNodeKeyNodeData, sig2MmKey } from '../libs/utils';
import { NodeTypeNames } from '../nodes';
import { MchordContext } from '../pages/Top'
import { changeChordNode, setNodeKey } from "../libs/hooks";
import { ChordNodeChanger } from './ChordNodeChanger';
import { KeyNodeChanger } from './KeyNodeChanger';

export const NodeChanger = () => {

    const instance = useReactFlow<ChordNodeData | KeyNodeData>();
    const { selectedNodeId } = useContext(MchordContext);
    const selectedNode = instance.getNode(selectedNodeId);

    return (
        <>
            {selectedNode != undefined &&
                <>
                    {isNodeKeyNodeData(selectedNode) ? <KeyNodeChanger selectedNode={selectedNode} /> : null}
                    {isNodeChordNodeData(selectedNode) ? <ChordNodeChanger selectedNode={selectedNode} /> : null}
                </>
            }
        </>
    )
}
