import { css } from '@emotion/css';
import React, { MouseEventHandler } from 'react'

const EditButton = ({ onClick }: { onClick?: MouseEventHandler }): JSX.Element => {
    return (
        <button
            onClick={onClick}
        >
            edit
        </button>
    )
}

export const NodeEditButton = (): JSX.Element => {
    return (
        <span className={css({
            position: "absolute",
            top: -50,
            left: "50%",
            transform: "translate(-50%, -50%)"
        })}>
        </span>
    )
}
