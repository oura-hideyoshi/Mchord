import React, { memo, useContext, useEffect, useState } from 'react';

import { Edge, Position, useReactFlow } from 'react-flow-renderer';
import { Chord, Interval, Progression } from '@tonaljs/tonal';
import { Range } from "@tonaljs/tonal";
import { css, keyframes } from '@emotion/css';
import { ChordNode, ChordNodeData, ChordNodeProps, keySignature, MusicalNodeData } from '../libs/types';
import { sig2MmKey } from '../libs/utils';
import { Handle } from './parts/Handle';
import { addChordNode, removeNode, setNodeKey } from '../libs/hooks';
import { MchordContext } from '../pages/Top';
import { AddChordNodeBtn } from './parts/AddChordNodeBtn';
import { RemoveNodeBtn } from './parts/RemoveNodeBtn';
import { color } from '../propaties/color';
import { ChordView } from './parts/ChordView';

export default memo(({ id, data, selected, ...props }: ChordNodeProps) => {

    const instance = useReactFlow<MusicalNodeData>()
    const { selectedNodeId, isRomanNumeral } = useContext(MchordContext);

    const handleAddBtn = () => {
        addChordNode(instance, id)
    }
    const handleRemoveBtn = () => {
        removeNode(instance, id)
    }

    const chord = Chord.getChord(data.getChordProps.typeName, data.getChordProps.optionalTonic, data.getChordProps.optionalRoot);
    const key = sig2MmKey(data.keySig, data.isMajor);
    const romanNumeral = Progression.toRomanNumerals(key.tonic, [data.getChordProps.optionalTonic])[0]

    const flashAnimation = keyframes`
        0% {
            border: 1px dashed black;
        }
        100% {
            border: 1px dashed #efefef;
        }
    `
    const style = css({
        backgroundColor: "white",
        border: `solid 1px ${color.gray}`,
        borderRadius: "20px",
        padding: "0px",
        minWidth: "40px",
        height: "40px",
        position: "relative"
    }, selected && css({
        borderStyle: "dashed",
        animation: `${flashAnimation} 0.5s ease infinite alternate`
    }))

    return (
        <div
            className={style}>
            <div className={css({
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            })}>

                <ChordView>{chord}</ChordView>
            </div>

            <AddChordNodeBtn
                onClick={handleAddBtn}
                hidden={id != selectedNodeId}
            />
            <RemoveNodeBtn
                onClick={handleRemoveBtn}
                hidden={id != selectedNodeId}
            />
            <Handle
                type="source"
                position={Position.Right}
                className={css({
                    bottom: "20px"
                })}
            />
            <Handle
                type="target"
                position={Position.Left}
            />
        </div>
    );
});
