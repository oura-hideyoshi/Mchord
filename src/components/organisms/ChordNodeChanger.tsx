import { Chord, Range } from '@tonaljs/tonal';
import React, { useState } from 'react'
import { changeChordNode } from '../libs/hooks';
import { ChordNodeData } from '../libs/types';
import { Node, useReactFlow } from "react-flow-renderer";

export const ChordNodeChanger = ({ selectedNode }: { selectedNode: Node<ChordNodeData> }) => {
    const instance = useReactFlow();
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
