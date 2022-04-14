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
        />
    )
}
