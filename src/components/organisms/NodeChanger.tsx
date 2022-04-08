import { Chord, Key, Note, Range } from '@tonaljs/tonal';
import React, { useContext, useState } from 'react'
import { useReactFlow, Node } from 'react-flow-renderer';
import { ChordNodeData, KeyNodeData, keySignature, MusicalNode } from '../libs/types';
import { isChordNode, isKeyNode, isNodeChordNodeData, isNodeKeyNodeData, sig2MmKey } from '../libs/utils';
import { NodeTypeNames } from '../nodes';
import { MchordContext } from '../pages/Top'
import { changeChordNode, setNodeKey } from "../libs/hooks";

export const NodeChanger = () => {

    const instance = useReactFlow<ChordNodeData | KeyNodeData>();
    const { selectedNodeId } = useContext(MchordContext);
    const selectedNode = instance.getNode(selectedNodeId);

    const KeyNodeChanger = ({ selectedNode }: { selectedNode: Node<KeyNodeData> }) => {
        const [keySig, setKeySig] = useState(selectedNode.data.keySig);
        const [isMajor, setIsMajor] = useState(selectedNode.data.isMajor);
        const handelChangeTonic = (e: any) => {
            setNodeKey(instance, e.target.value as keySignature, selectedNode.data.isMajor as boolean);
            setKeySig(e.target.value as keySignature);
        }
        const handleChangeIsMajor: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
            setNodeKey(instance, keySig, e.target.value == "major" ? true : false);
            setIsMajor(e.target.value == "major" ? true : false);
        }
        return (
            <div>
                <select
                    name="key"
                    value={keySig}
                    onChange={handelChangeTonic}
                    style={{ width: "50%", height: "50px" }}
                >
                    <option value="">C</option>
                    <option value="#">G</option>
                    <option value="##">D</option>
                    <option value="###">A</option>
                    <option value="####">E</option>
                    <option value="#####">B</option>
                    <option value="######">Gb / F#</option>
                    <option value="b">F</option>
                    <option value="bb">Bb</option>
                    <option value="bbb">Eb</option>
                    <option value="bbbb">Ab</option>
                    <option value="bbbbb">Db</option>
                </select>
                <select
                    name="isMajor"
                    value={isMajor ? "major" : "minor"}
                    onChange={handleChangeIsMajor}
                    style={{ width: "50%", height: "50px" }}>
                    <option value={"major"}>M</option>
                    <option value={"minor"}>m</option>
                </select>
            </div>
        )
    }

    const ChordNodeChanger = ({ selectedNode }: { selectedNode: Node<ChordNodeData> }) => {
        const [chord, setChord] = useState(Chord.getChord(selectedNode.data.getChordProps.typeName, selectedNode.data.getChordProps.optionalTonic, selectedNode.data.getChordProps.optionalRoot));
        const handleChangeChordTonic: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
            changeChordNode(instance, selectedNode.id, {
                typeName: chord.type,
                optionalTonic: e.target.value,
                optionalRoot: chord.root,
            });
            setChord(Chord.getChord(chord.type, e.target.value));
        }

        return (
            <select
                name="tonic"
                value={chord.tonic as string}
                onChange={handleChangeChordTonic}
                style={{ width: "50%", height: "50px" }}>
                {Range.chromatic(["C1", "B1"], { pitchClass: true, sharps: true }).map(note => {
                    return (
                        <option key={note} value={note}>{note}</option>
                    )
                })}
            </select>
        )
    }

    return (
        <>
            {selectedNode != undefined &&
                <div>
                    {isNodeKeyNodeData(selectedNode) ? <KeyNodeChanger selectedNode={selectedNode} /> : null}
                    {isNodeChordNodeData(selectedNode) ? <ChordNodeChanger selectedNode={selectedNode} /> : null}
                </div>
            }
        </>
    )
}
