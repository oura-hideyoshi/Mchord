import React, { memo, useContext, useEffect, useState } from 'react';

import { Edge, Position, useReactFlow } from 'react-flow-renderer';
import { Chord, Interval, Progression } from '@tonaljs/tonal';
import { Range } from "@tonaljs/tonal";
import { css } from '@emotion/css';
import { ChordNode, ChordNodeData, ChordNodeProps, keySignature, MusicalNodeData } from '../libs/types';
import { sig2MmKey } from '../libs/utils';
import { Handle } from './view/Handle';
import { makeChordNode } from '../libs/creator';
import UUID from "uuidjs";
import { addChordNode } from '../libs/hooks';
import { MchordContext } from '../pages/Top';

export default memo(({ id, data, ...props }: ChordNodeProps) => {

    const instance = useReactFlow<MusicalNodeData>()

    const { setSelectedNodeId, isRomanNumeral } = useContext(MchordContext);
    const handleClick = () => {
        setSelectedNodeId(id);
    }

    const chord = Chord.getChord(data.getChordProps.typeName, data.getChordProps.optionalTonic, data.getChordProps.optionalRoot);
    const key = sig2MmKey(data.keySig, data.isMajor);
    const romanNumeral = Progression.toRomanNumerals(key.tonic, [data.getChordProps.optionalTonic])[0]

    return (
        <div
            onClick={handleClick}
            onTouchStart={handleClick}
            className={css({
                border: "solid 1px black",
                minWidth: "100px"
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
                {!isRomanNumeral &&
                    <div>
                        <span>
                            {chord.tonic}{chord.type}
                        </span>
                    </div>
                }
                {isRomanNumeral &&
                    <div>
                        <span>{romanNumeral}{chord.type}</span>
                    </div>
                }
            </div>
            <Handle
                type="source"
                position={Position.Right}
                onClick={() => addChordNode(instance, id)}
            />
        </div>
    );
});
