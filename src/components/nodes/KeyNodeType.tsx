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
        border: "solid 1px black",
        padding: "10px",
        minWidth: "100px"
    }, selected && css({
        borderStyle: "dashed",
        animation: `${flashAnimation} 0.5s ease infinite alternate`
    }))
    return (
        <div
            className={style}>
            <Handle
                type="source"
                position={Position.Right}
            />
            <span>
                {key.tonic}
            </span>
            {data.isMajor ? "Major" : "minor"}
            <span className={css({
                marginLeft: "10px",
            })}>Key</span>
            {id == selectedNodeId &&
                <>
                    <AddChordNodeBtn
                        onClick={handleAddBtn}
                    />
                </>
            }
        </div>
    );
});

