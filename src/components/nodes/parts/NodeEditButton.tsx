import { css } from '@emotion/css';
import React, { MouseEventHandler } from 'react'

export const NodeEditButton: React.FC<JSX.IntrinsicElements['button']> = ({ ...props }) => {
    return (
        <span className={css({
            position: "absolute",
            top: -50,
            left: "50%",
            transform: "translate(-50%, -50%)"
        })}>
            <button
                {...props}
            >edit</button>
        </span>
    )
}
