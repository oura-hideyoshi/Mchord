import React, { ChangeEvent, memo, useContext, useEffect, useState } from 'react';

import { Position, useReactFlow } from 'react-flow-renderer';
import { Key } from "@tonaljs/tonal";
import { css } from '@emotion/css';
import { KeyNodeProps, MusicalNodeData } from '../libs/types';
import { Handle } from './parts/Handle';
import { addChordNode, setNodeKey } from '../libs/hooks';
import { MchordContext } from '../pages/Top';
import { AddChordNodeBtn } from './parts/AddChordNodeBtn';

export default memo(({ id, data, ...props }: KeyNodeProps) => {

    const instance = useReactFlow<MusicalNodeData>();
    const { selectedNodeId } = useContext(MchordContext);

    const handleClickHandle = () => {
        addChordNode(instance, id)
    }

    const majorKeyfromKeySig = Key.majorTonicFromKeySignature(data.keySig) || "C";
    const key = data.isMajor ? Key.majorKey(majorKeyfromKeySig as string) : Key.minorKey(majorKeyfromKeySig as string);

    return (
        <div
            className={css({
                backgroundColor: "white",
                border: "solid 1px black",
                padding: "10px",
                minWidth: "100px"
            })}>
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
                <AddChordNodeBtn
                    onClick={handleClickHandle}
                />
            }
        </div>
    );
});

