import React, { memo, useContext, useEffect, useState } from 'react';

import { Edge, Position, useReactFlow } from 'react-flow-renderer';
import { Chord, Interval, Progression } from '@tonaljs/tonal';
import { Range } from "@tonaljs/tonal";
import { css } from '@emotion/css';
import { ChordNode, ChordNodeData, ChordNodeProps, keySignature, MusicalNodeData } from '../libs/types';
import { sig2MmKey } from '../libs/utils';
import { Handle } from './parts/Handle';
import { addChordNode, setNodeKey } from '../libs/hooks';
import { MchordContext } from '../pages/Top';
import { NodeEditButton } from './parts/NodeEditButton';

export default memo(({ id, data, ...props }: ChordNodeProps) => {

    const instance = useReactFlow<MusicalNodeData>()

    const { selectedNodeId, isRomanNumeral } = useContext(MchordContext);

    const chord = Chord.getChord(data.getChordProps.typeName, data.getChordProps.optionalTonic, data.getChordProps.optionalRoot);
    const key = sig2MmKey(data.keySig, data.isMajor);
    const romanNumeral = Progression.toRomanNumerals(key.tonic, [data.getChordProps.optionalTonic])[0]

    const [isEditable, setIsEditable] = useState(false);
    // 編集モード中はドラッグできなくなる
    const setEditable = () => {
        setIsEditable(true);
        setNodeKey(instance, data.keySig, data.isMajor, false);
    }
    // 他のものを選択したら編集モード解除
    useEffect(() => {
        if (id != selectedNodeId) {
            setIsEditable(false)
            setNodeKey(instance, data.keySig, data.isMajor, true);
        }
    }, [selectedNodeId])

    const NomalMode = () =>
        <>
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
                {id == selectedNodeId &&
                    <NodeEditButton
                        onClick={setEditable}
                        onTouchStart={setEditable}
                    />}
            </div>
        </>
    const EditMode = () =>
        <>
            <span>
                <button
                    onClick={() => {
                        setNodeKey(instance, "b", true)
                    }}
                >
                    btn
                </button>
            </span>
        </>

    return (
        <div
            className={css({
                backgroundColor: "white",
                border: "solid 1px black",
                padding: "10px",
                minWidth: "100px"
            })}>
            <Handle
                type="target"
                position={Position.Left}
            />
            {isEditable ? <EditMode /> : <NomalMode />}
            <Handle
                type="source"
                position={Position.Right}
                onClick={() => addChordNode(instance, id)}
            />
        </div>
    );
});
