import React, { ChangeEvent, memo, useContext, useEffect, useState } from 'react';

import { Edge, getOutgoers, Position, useReactFlow, useStore, useStoreApi } from 'react-flow-renderer';
import { ChordType, Range } from "@tonaljs/tonal";
import { Key as IKey } from '@tonaljs/key';
import { Key } from "@tonaljs/tonal";
import { css } from '@emotion/css';
import { ChordNodeData, KeyNode, KeyNodeData, KeyNodeProps, keySignature } from '../libs/types';
import { detectIsMajor, isChordNode, sig2MmKey, tonic2MmKey } from '../libs/utils';
import { makeChordNode, makeKeyNode } from '../libs/creator';
import { Handle } from './view/Handle';
import UUID from "uuidjs";
import { addChordNode, setNodeKey } from '../libs/hooks';
import { MchordContext } from '../pages/Top';

export default memo(({ id, data, ...props }: KeyNodeProps) => {

    const instance = useReactFlow();
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

