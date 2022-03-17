import React, { ChangeEvent, memo, useState } from 'react';

import { Handle, Position } from 'react-flow-renderer';
import { Range } from "@tonaljs/tonal";
import { Key as IKey } from '@tonaljs/key';
import { Key } from "@tonaljs/tonal";
import { css } from '@emotion/css';
import { KeyNodeObj, keySignature, minorVariant } from '../libs/types';
import { detectIsMajor, sig2MmKey } from '../libs/utils';

export interface KeyNodeProps {
    data: KeyNodeObj["data"],
    isConnectable: boolean
}

export default memo(({ data, isConnectable }: KeyNodeProps) => {

    const [key, setKey] = useState(sig2MmKey(data.sig, data.isMajor));
    const [isMajor, setIsMajor] = useState(data.isMajor);

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
                    value={key.keySignature}
                    onChange={e => setKey(sig2MmKey(e.target.value as keySignature, isMajor))}>
                    <option value="">C</option>
                    <option value="##">D</option>
                    <option value="###">E</option>
                    <option value="b">F</option>
                    <option value="#">G</option>
                    <option value="###">A</option>
                    <option value="#####">B</option>
                </select>
                <label className={css({
                    marginLeft: "10px",
                })}>Key</label>
            </div>
        </>
    );
});
