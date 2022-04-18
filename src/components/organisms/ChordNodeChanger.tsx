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
import { ChordTypeSelector } from './ChordTypeSelector';
import { PieSelector } from '../module/PieSelector';

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
    const handleChangeChordType = (e: string) => {
        changeChordNode(instance, selectedNode.id, {
            typeName: e,
            optionalTonic: chord.tonic as string,
            optionalRoot: chord.root,
        });
        setChord(Chord.getChord(e, chord.tonic as string));
    }

    return (
        <div
            className={css({
                marginTop: "100px",
                display: "flex",
                flexDirection: "column"
            })}
        >
            <NoteSelector
                chord={chord}
                MKey={sig2MmKey(selectedNode.data.keySig, selectedNode.data.isMajor)}
                onSelect={handleChangeTonic}
            >
                <div
                    className={css({
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: `dotted 3px ${color.gray}`,
                        borderRadius: "40px",
                        minWidth: "80px",
                        height: "80px"
                    })}
                >
                    <ChordView MKey={sig2MmKey(selectedNode.data.keySig, selectedNode.data.isMajor)} scale={2.0}>{chord}</ChordView>
                </div>
            </NoteSelector>
            <ChordTypeSelector
                onSelect={handleChangeChordType}
            />

        </div>
    )
}
