import React, { memo } from 'react';

import { Handle, Position } from 'react-flow-renderer';
import { Range } from "@tonaljs/tonal";
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
                position={Position.Left}
                onConnect={(params) => console.log('handle onConnect', params)}
                isConnectable={isConnectable}
                className={css({
                    width: "20px",
                    height: "20px",
                    transform: "translate(-50%, -50%)",
                })}
            />
            <span className={css({
                border: "solid 1px"
            })}>chord</span>
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
        </>
    );
});
