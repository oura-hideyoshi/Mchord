import React, { memo } from 'react';

import { Handle, Position } from 'react-flow-renderer';
import { Chord } from '@tonaljs/chord';
import { Range } from "@tonaljs/tonal";
import { css } from '@emotion/css';

interface ChordNodeData {
    chord: Chord,
}
export interface ChordNodeProps {
    data: ChordNodeData,
    isConnectable: boolean
}

export default memo(({ data, isConnectable }: ChordNodeProps) => {

    return (
        <div className={css({
            border: "solid 1px black"
        })}>
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
            })}>
                {data.chord.name}
            </span>
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
        </div>
    );
});
