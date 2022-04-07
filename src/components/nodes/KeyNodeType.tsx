import React, { ChangeEvent, memo, useEffect, useState } from 'react';

import { getOutgoers, Handle, Position, useReactFlow, useStore, useStoreApi } from 'react-flow-renderer';
import { ChordType, Range } from "@tonaljs/tonal";
import { Key as IKey } from '@tonaljs/key';
import { Key } from "@tonaljs/tonal";
import { css } from '@emotion/css';
import { ChordNodeData, KeyNode, KeyNodeData, keySignature } from '../libs/types';
import { detectIsMajor, isChordNode, sig2MmKey, tonic2MmKey } from '../libs/utils';
import { makeChordNode, makeKeyNode } from '../libs/creator';

export default memo(({ id, data }: KeyNode) => {

    const [key, setKey] = useState(sig2MmKey(data.keySig, data.isMajor));
    const [isMajor, setIsMajor] = useState(data.isMajor);

    const { setNodes } = useReactFlow<KeyNodeData | ChordNodeData>()
    useEffect(() => {
        setNodes(nds =>
            nds.map(node => {
                if (isChordNode(node))
                    node.data = {
                        ...node.data,
                        keySig: key.keySignature as keySignature
                    }
                return node
            }))
        return () => {

        }
    }, [key, isMajor])


    return (
        <>
            <div className={css({
                border: "solid 1px black",
                padding: "10px"
            })}>
                <Handle
                    type="source"
                    position={Position.Right}
                    onConnect={(params) => console.log('handle onConnect', params)}
                    className={css({
                        width: "20px",
                        height: "20px",
                        transform: "translate(50%, -50%)",
                    })}
                />
                <select
                    name="key"
                    value={Key.majorKey(key.tonic).keySignature}
                    onChange={e => setKey(sig2MmKey(e.target.value as keySignature, isMajor))}>
                    <option value="">C</option>
                    <option value="##">D</option>
                    <option value="####">E</option>
                    <option value="b">F</option>
                    <option value="#">G</option>
                    <option value="###">A</option>
                    <option value="#####">B</option>
                </select>
                <select
                    name="isMajor"
                    value={key.type}
                    onChange={e => { const isM = e.target.value == "major" ? true : false; setIsMajor(isM); setKey(tonic2MmKey(key.tonic, isM)); }}>
                    <option value="major">M</option>
                    <option value="minor">m</option>
                </select>
                <span className={css({
                    marginLeft: "10px",
                })}>Key</span>
            </div>
        </>
    );
});

