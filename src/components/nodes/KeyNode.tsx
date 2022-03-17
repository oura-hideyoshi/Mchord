import React, { memo } from 'react';

import { Handle, Position } from 'react-flow-renderer';
import { Range } from "@tonaljs/tonal";
import { Key } from '@tonaljs/key';
import { css } from '@emotion/css';

interface KeyNodeData {
    key: Key
}

export interface KeyNodeProps {
    data: KeyNodeData,
    isConnectable: boolean
}

export default memo(({ data, isConnectable }: KeyNodeProps) => {


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
                <select name="pets" id="pet-select" defaultValue={data.key.tonic}>
                    <option value="C">C</option>
                    <option value="D">D</option>
                    <option value="E">E</option>
                    <option value="F">F</option>
                    <option value="G">G</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                </select>
                <label className={css({
                    marginLeft: "10px",
                })}>Key</label>
            </div>
        </>
    );
});
