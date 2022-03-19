import React, { memo, useState } from 'react';

import { Handle, Position } from 'react-flow-renderer';
import { Chord, Progression } from '@tonaljs/tonal';
import { Range } from "@tonaljs/tonal";
import { css } from '@emotion/css';
import { ChordNodeObj } from '../libs/types';
import { sig2MmKey } from '../libs/utils';

export interface ChordNodeProps {
    data: ChordNodeObj["data"],
    isConnectable: boolean
}

export default memo(({ data, isConnectable }: ChordNodeProps) => {

    const [key, setKey] = useState(sig2MmKey(data.sig, data.isMajor));
    const [isMajor, setIsMajor] = useState(data.isMajor);
    const [chord, setChord] = useState(Chord.getChord(data.chord.typeName, data.chord.optionalTonic, data.chord.optionalRoot));
    const romanNumeral = Progression.toRomanNumerals(key.tonic, [chord.name])[0]

    return (
        <div className={css({
            border: "solid 1px black",
            padding: "10px"
        })}>
            <Handle
                type="target"
                position={Position.Left}
                onConnect={(params) => console.log('handle onConnect', params)}
                isConnectable={isConnectable}
                className={css({
                    width: "20px",
                    height: "20px",
                    transform: "translate(-50%, -50%)",
                })}
            />
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
            </div>
            <Handle
                type="source"
                position={Position.Right}
                onConnect={(params) => console.log('handle onConnect', params)}
                isConnectable={isConnectable}
                className={css({
                    width: "20px",
                    height: "20px",
                    transform: "translate(50%, -50%)",
                })}
            />
        </div>
    );
});
