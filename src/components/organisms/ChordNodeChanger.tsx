import { Chord, Range } from '@tonaljs/tonal';
import React, { useState } from 'react'
import { changeChordNode } from '../libs/hooks';
import { ChordNodeData } from '../libs/types';
import { Node, useReactFlow } from "react-flow-renderer";
import { allMyAliases, chooseAliase, sig2MmKey } from '../libs/utils';
import { NoteSelector } from './NoteSelector';
import { ChordView } from '../nodes/parts/ChordView';
import { css } from '@emotion/css';
import { color } from '../propaties/color';

export const ChordNodeChanger = ({ selectedNode }: { selectedNode: Node<ChordNodeData> }) => {
    const instance = useReactFlow();
    const [chord, setChord] = useState(Chord.getChord(selectedNode.data.getChordProps.typeName, selectedNode.data.getChordProps.optionalTonic, selectedNode.data.getChordProps.optionalRoot));
    const handleChangeTonic = (e: string) => {
        changeChordNode(instance, selectedNode.id, {
            typeName: chord.type,
            optionalTonic: e,
            optionalRoot: chord.root,
        });
        setChord(Chord.getChord(chord.type, e));
    }
    const handleChangeChordType: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
        changeChordNode(instance, selectedNode.id, {
            typeName: e.target.value,
            optionalTonic: chord.tonic as string,
            optionalRoot: chord.root,
        });
        setChord(Chord.getChord(e.target.value, chord.tonic as string));
    }

    return (
        <div>
            <div>
                <NoteSelector
                    chord={chord}
                    MKey={sig2MmKey(selectedNode.data.keySig, selectedNode.data.isMajor)}
                    onSelected={handleChangeTonic}
                >
                    <div
                        className={css({
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            border: `dotted 3px ${color.gray}`,
                            borderRadius: "40px",
                            width: "80px",
                            height: "80px"
                        })}
                    >
                        <ChordView MKey={sig2MmKey(selectedNode.data.keySig, selectedNode.data.isMajor)} scale={2.0}>{chord}</ChordView>
                    </div>
                </NoteSelector>
                <select
                    name="type"
                    value={chooseAliase(chord)}
                    onChange={handleChangeChordType}
                    style={{ width: "50%", height: "50px" }}
                >
                    {allMyAliases().map(aliase => {
                        return (
                            <option key={aliase} value={aliase}>{aliase}</option>
                        )
                    })}
                </select>
            </div>
        </div>
    )
}
