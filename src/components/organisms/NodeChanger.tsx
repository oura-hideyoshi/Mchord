import { Key } from '@tonaljs/tonal';
import React, { useContext, useState } from 'react'
import { useReactFlow, Node } from 'react-flow-renderer';
import { ChordNodeData, KeyNodeData, keySignature, MusicalNode } from '../libs/types';
import { sig2MmKey } from '../libs/utils';
import { NodeTypeNames } from '../nodes';
import { MchordContext } from '../pages/Top'
import { setNodeKey } from "../libs/hooks";

export const NodeChanger = () => {

    const instance = useReactFlow<ChordNodeData | KeyNodeData>();
    const { selectedNodeId } = useContext(MchordContext);
    const selectedNode = instance.getNode(selectedNodeId) as Node<ChordNodeData | KeyNodeData>;

    const [keySig, setKeySig] = useState(selectedNode?.data.keySig);
    const [isMajor, setIsMajor] = useState(selectedNode?.data.isMajor);

    const ChordNodeChanger = () => {
        return (
            <div>
                {selectedNode?.data.keySig}
            </div>
        )
    }
    const KeyNodeChanger = () => {
        const handelChangeTonic = (e: any) => {
            setNodeKey(instance, e.target.value as keySignature, selectedNode?.data.isMajor as boolean);
            setKeySig(e.target.value as keySignature);
        }
        const handleChangeIsMajor = (e: any) => {
            console.log('e.target.value', Boolean(e.target.value))
            setNodeKey(instance, keySig, e.target.value == "major" ? true : false);
            setIsMajor(e.target.value == "major" ? true : false);
        }
        return (
            <div>
                <select
                    name="key"
                    value={selectedNode.data.keySig}
                    onChange={handelChangeTonic}
                >
                    <option value="">C</option>
                    <option value="##">D</option>
                    <option value="####">E</option>
                    <option value="b">F</option>
                    <option value="#">G</option>
                    <option value="###">A</option>
                    <option value="#####">B</option>
                </select>
                <select
                    name="isMajor"
                    value={selectedNode.data.isMajor ? "major" : "minor"}
                    onChange={handleChangeIsMajor}>
                    <option value={"major"}>M</option>
                    <option value={"minor"}>m</option>
                </select>
            </div>
        )
    }

    return (
        <>
            {selectedNode != undefined &&
                <div>
                    {selectedNode.id}
                    {selectedNode.type == NodeTypeNames.ChordNode ? <ChordNodeChanger /> : null}
                    {selectedNode.type == NodeTypeNames.KeyNode ? <KeyNodeChanger /> : null}
                </div>
            }
        </>
    )
}
