import { css } from '@emotion/css'
import React from 'react'

export const RemoveNodeBtn: React.FC<JSX.IntrinsicElements['button']> = ({ ...props }) => {
    return (
        <button
            className={css({
                position: "absolute",
                top: "-50%",
                right: "-50px",
                transform: "translate(-50%, -50%)",
                borderRadius: "50px",
                ":hover": {
                    backgroundColor: "rgba(0,0,0,0.2)"
                }
            })}
            onTouchStart={props.onClick as React.TouchEventHandler<HTMLButtonElement> | undefined}
            {...props}
        >x</button>
    )
}
