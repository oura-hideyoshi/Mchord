import React, { ChangeEvent, memo, useContext, useEffect, useState } from 'react';

import { Edge, getOutgoers, Position, useReactFlow, useStore, useStoreApi } from 'react-flow-renderer';
import { Key } from "@tonaljs/tonal";
import { css } from '@emotion/css';
import { KeyNodeProps, MusicalNodeData } from '../libs/types';
import { Handle } from './view/Handle';
import { addChordNode, setNodeKey } from '../libs/hooks';
import { MchordContext } from '../pages/Top';

export default memo(({ id, data, ...props }: KeyNodeProps) => {

    const instance = useReactFlow<MusicalNodeData>();
    const { setSelectedNodeId } = useContext(MchordContext)
    const handleClick = () => {
        setSelectedNodeId(id);
    }
    const handleClickHandle = () => {
        addChordNode(instance, id)
    }

    const majorKeyfromKeySig = Key.majorTonicFromKeySignature(data.keySig) || "C";
    const key = data.isMajor ? Key.majorKey(majorKeyfromKeySig as string) : Key.minorKey(majorKeyfromKeySig as string);

    return (
        <>
            <div
                onClick={handleClick}
                onTouchStart={handleClick}
                className={css({
                    border: "solid 1px black",
                    padding: "10px"
                })}>
                <Handle
                    type="source"
                    position={Position.Right}
                    onClick={handleClickHandle}
                />
                <span>
                    {key.tonic}
                </span>
                {data.isMajor ? "Major" : "minor"}
                <span className={css({
                    marginLeft: "10px",
                })}>Key</span>
            </div>
        </>
    );
});

