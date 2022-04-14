import { css } from '@emotion/css'
import React, { MouseEventHandler } from 'react'
import { Handle as OriginalHandle, HandleProps, Position } from 'react-flow-renderer'

interface Props extends HandleProps {
    onClick?: MouseEventHandler
}

export const Handle = (props: Props) => {
    return (
        <OriginalHandle
            {...props}
            className={css({
                width: "10px",
                height: "100%",
                borderRadius: 0,
                backgroundColor: "lightgray",
                transform: "translate(0%, -50%)",
            })}
        />
    )
}
