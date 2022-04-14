import React, { ChangeEvent, memo, useContext, useEffect, useState } from 'react';

import { Position, useReactFlow } from 'react-flow-renderer';
import { Key } from "@tonaljs/tonal";
import { css, keyframes } from '@emotion/css';
import { KeyNodeProps, MusicalNodeData } from '../libs/types';
import { Handle } from './parts/Handle';
import { addChordNode, removeNode, setNodeKey } from '../libs/hooks';
import { MchordContext } from '../pages/Top';
import { AddChordNodeBtn } from './parts/AddChordNodeBtn';
import { RemoveNodeBtn } from './parts/RemoveNodeBtn';
import { color } from '../propaties/color';

export default memo(({ id, data, selected, ...props }: KeyNodeProps) => {

    const instance = useReactFlow<MusicalNodeData>();
    const { selectedNodeId } = useContext(MchordContext);

    const handleAddBtn = () => {
        addChordNode(instance, id)
    }

    const majorKeyfromKeySig = Key.majorTonicFromKeySignature(data.keySig) || "C";
    const key = data.isMajor ? Key.majorKey(majorKeyfromKeySig as string) : Key.minorKey(majorKeyfromKeySig as string);

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
        borderRadius: "5px",
        padding: "0px",
        width: "75px"
    }, selected && css({
        borderStyle: "dashed",
        animation: `${flashAnimation} 0.5s ease infinite alternate`
    }))
    return (
        <div
            className={style}>
            <div className={css({
                padding: 5,
                fontSize: 1
            })}>
                <span >
                    {"KEY"}
                </span>
            </div>
            <hr className={css({
                borderTop: "1px solid #8c8b8b"
            })} />
            <div className={css({
                padding: 5,
                fontSize: 12
            })}>
                <span>
                    {key.tonic} {data.isMajor ? "Major" : "minor"}
                </span>
                <Handle
                    type="source"
                    position={Position.Right}
                />
            </div>
            <AddChordNodeBtn
                onClick={handleAddBtn}
                hidden={id != selectedNodeId}
            />
        </div>
    );
});

