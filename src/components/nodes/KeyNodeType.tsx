import React, { ChangeEvent, memo, useContext, useEffect, useState } from 'react';

import { Position, useReactFlow } from 'react-flow-renderer';
import { Key } from "@tonaljs/tonal";
import { css } from '@emotion/css';
import { KeyNodeProps, MusicalNodeData } from '../libs/types';
import { Handle } from './parts/Handle';
import { addChordNode, setNodeKey } from '../libs/hooks';
import { MchordContext } from '../pages/Top';
import { NodeEditButton } from './parts/NodeEditButton';

export default memo(({ id, data, ...props }: KeyNodeProps) => {

    const instance = useReactFlow<MusicalNodeData>();

    const handleClickHandle = () => {
        addChordNode(instance, id)
    }

    const { selectedNodeId } = useContext(MchordContext);

    const majorKeyfromKeySig = Key.majorTonicFromKeySignature(data.keySig) || "C";
    const key = data.isMajor ? Key.majorKey(majorKeyfromKeySig as string) : Key.minorKey(majorKeyfromKeySig as string);

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
            <span>
                {key.tonic}
            </span>
            {data.isMajor ? "Major" : "minor"}
            <span className={css({
                marginLeft: "10px",
            })}>Key</span>
            {id == selectedNodeId &&
                <NodeEditButton
                    onClick={setEditable}
                />}
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
        <>
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
                    onClick={handleClickHandle}
                />
                {isEditable ? <EditMode /> : <NomalMode />}
            </div>
        </>
    );
});

