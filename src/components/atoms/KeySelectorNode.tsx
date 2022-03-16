import React, { memo } from 'react';

import { Handle, Position } from 'react-flow-renderer';
import { Note } from "@tonaljs/tonal";
import { css } from '@emotion/css';

interface props {
    data: any,
    isConnectable: boolean
}

export default memo(({ data, isConnectable }: props) => {

    return (
        <>
            <Handle
                type="target"
                position={Position.Right}
                onConnect={(params) => console.log('handle onConnect', params)}
                isConnectable={isConnectable}
            />
            <select name="pets" id="pet-select" defaultValue={data.initKey} className={css({

            })}>
                <option value="C">C</option>
                <option value="D">D</option>
                <option value="E">E</option>
                <option value="F">F</option>
                <option value="G">G</option>
                <option value="A">A</option>
                <option value="B">B</option>
            </select>
            <label className={css({
                marginLeft: "10px"
            })}>Key</label>
        </>
    );
});
