import React, { ChangeEvent, memo, useEffect, useState } from 'react';

import { Handle, Position } from 'react-flow-renderer';
import { Range } from "@tonaljs/tonal";
import { Key as IKey } from '@tonaljs/key';
import { Key } from "@tonaljs/tonal";
import { css } from '@emotion/css';
import { KeyNodeObj, keySignature } from '../libs/types';
import { detectIsMajor, sig2MmKey, tonic2MmKey } from '../libs/utils';

export interface KeyNodeProps {
    data: KeyNodeObj["data"],
    isConnectable: boolean
}

export default memo(({ data, isConnectable }: KeyNodeProps) => {

    const [key, setKey] = useState(sig2MmKey(data.sig, data.isMajor));
    const [isMajor, setIsMajor] = useState(data.isMajor);
    useEffect(() => {
        console.log("key :", key.tonic, isMajor ? "M" : "m");
    }, [key, isMajor]);


    return (
        <>
            <div className={css({
                border: "solid 1px black"
            })}>
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
                <select
                    name="key"
                    value={Key.majorKey(key.tonic).keySignature}
                    onChange={e => setKey(sig2MmKey(e.target.value as keySignature, isMajor))}>
                    <option value="">C</option>
                    <option value="##">D</option>
                    <option value="###">E</option>
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
