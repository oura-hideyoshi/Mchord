import { Chord, Key } from '@tonaljs/tonal';
import React, { useContext, useState } from 'react'
import { useReactFlow, Node } from 'react-flow-renderer';
import { ChordNodeData, KeyNodeData, keySignature, MusicalNode } from '../libs/types';
import { isChordNode, isKeyNode, sig2MmKey } from '../libs/utils';
import { NodeTypeNames } from '../nodes';
import { MchordContext } from '../pages/Top'
import { changeChordNode, setNodeKey } from "../libs/hooks";

export const NodeChanger = () => {

    const instance = useReactFlow<ChordNodeData | KeyNodeData>();
    const { selectedNodeId } = useContext(MchordContext);
    const selectedNode = instance.getNode(selectedNodeId) as Node<ChordNodeData | KeyNodeData>;

    const KeyNodeChanger = ({ selectedNode }: { selectedNode: Node<KeyNodeData> }) => {
        const [keySig, setKeySig] = useState(selectedNode.data.keySig);
        const [isMajor, setIsMajor] = useState(selectedNode.data.isMajor);
        const handelChangeTonic = (e: any) => {
            setNodeKey(instance, e.target.value as keySignature, selectedNode.data.isMajor as boolean);
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

    const ChordNodeChanger = ({ selectedNode }: { selectedNode: Node<ChordNodeData> }) => {
        const [chord, setChord] = useState(Chord.getChord(selectedNode.data.chord.typeName, selectedNode.data.chord.optionalTonic, selectedNode.data.chord.optionalRoot));
        const handleChangeChordTonic = (e: any) => {
            changeChordNode(instance, selectedNode.id, Chord.getChord(chord.type, e.target.value));
            setChord(Chord.getChord(chord.type, e.target.value));
        }
        return (
            <select
                name="tonic"
                value={chord.tonic as string}
                onChange={handleChangeChordTonic}>
                <option value="C">C</option>
                <option value="D">D</option>
                <option value="E">E</option>
                <option value="F">F</option>
                <option value="G">G</option>
                <option value="A">A</option>
                <option value="B">B</option>
            </select>
        )
    }

    return (
        <>
            {selectedNode != undefined &&
                <div>
                    {selectedNode.id}
                    {isKeyNode(selectedNode) ? <KeyNodeChanger selectedNode={selectedNode} /> : null}
                    {isChordNode(selectedNode) ? <ChordNodeChanger selectedNode={selectedNode} /> : null}
                </div>
            }
        </>
    )
}
