import { css } from '@emotion/css'
import React from 'react'
import { color } from '../../../components/propaties/color'

export const RemoveNodeBtn: React.FC<JSX.IntrinsicElements['button']> = ({ hidden, ...props }) => {
    return (
        <button
            className={css(
                // position
                css({
                    position: "absolute",
                    top: 0,
                    right: 0,
                    transform: "translate(-50%, -50%)",
                    display: `${hidden ? "none" : "flex"}`,
                    justifyContent: "center",
                    alignItems: "center"
                }),
                // size
                css({
                    width: "20px",
                    height: "20px",
                    border: `1px solid ${color.gray}`,
                    borderRadius: "50px",
                    boxShadow: `0px 2px 3px ${color.gray}`,
                    ":hover": {
                        backgroundColor: "rgba(0,0,0,0.2)"
                    }
                })
            )}
            onTouchStart={props.onClick as React.TouchEventHandler<HTMLButtonElement> | undefined}
            {...props}
        >
            <span
                className={css({
                    fontSize: 1
                })}>X</span>
        </button>
    )
}
