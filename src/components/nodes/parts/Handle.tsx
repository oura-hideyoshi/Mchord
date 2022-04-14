import { css } from '@emotion/css'
import React, { MouseEventHandler } from 'react'
import { Handle as OriginalHandle, HandleProps, Position } from 'react-flow-renderer'


export const Handle = ({ ...props }: React.ComponentProps<typeof OriginalHandle>) => {
    return (
        <OriginalHandle
            {...props}
        />
    )
}
