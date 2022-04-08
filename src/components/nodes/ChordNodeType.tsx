import React, { memo, useEffect, useState } from 'react';

import { Position, useReactFlow } from 'react-flow-renderer';
import { Chord, Progression } from '@tonaljs/tonal';
import { Range } from "@tonaljs/tonal";
import { css } from '@emotion/css';
import { ChordNode, ChordNodeData, ChordNodeProps, keySignature } from '../libs/types';
import { sig2MmKey } from '../libs/utils';
import { Handle } from './view/Handle';
import { makeChordNode } from '../libs/creator';

export default memo(({ id, data, ...props }: ChordNodeProps) => {

    console.log("log")
    const key = sig2MmKey(data.keySig, data.isMajor);
    const isMajor = data.isMajor;
    const [chord, setChord] = useState(Chord.getChord(data.chord.typeName, data.chord.optionalTonic, data.chord.optionalRoot));
    const romanNumeral = Progression.toRomanNumerals(key.tonic, [chord.name])[0]

    const { addNodes } = useReactFlow()
    const addChordNode = () => {
        let newNodeId = Number(id.split("_")[1]) + 1
        const newNode = makeChordNode(
            `chord_${newNodeId}`,
            { x: props.xPos + 100, y: props.yPos },
            {
                chord: {
                    typeName: '',
                    optionalTonic: 'C',
                },
                keySig: key.keySignature as keySignature,
                isMajor: true
            })
        addNodes(newNode);
    }

    console.log(Chord.getChord(data.chord.typeName, data.chord.optionalTonic, data.chord.optionalRoot))
    return (
        <div className={css({
            border: "solid 1px black",
            // padding: "10px",
        })}>
            <Handle
                type="target"
                position={Position.Left}
            />
            <div className={css({
                paddingLeft: 10,
                paddingRight: 10
            })}>
                <div>
                    <select
                        name="tonic"
                        value={chord.tonic as string}
                        onChange={e => setChord(Chord.getChord(chord.type, e.target.value, chord.root))}>
                        <option value="C">C</option>
                        <option value="D">D</option>
                        <option value="E">E</option>
                        <option value="F">F</option>
                        <option value="G">G</option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                    </select>
                    <span>
                        {chord.type}
                    </span>
                </div>
                <div>
                    <span>{romanNumeral}</span>
                    <span>{data.keySig}</span>
                </div>
            </div>
            <Handle
                type="source"
                position={Position.Right}
                onClick={addChordNode}
            />
        </div>
    );
});