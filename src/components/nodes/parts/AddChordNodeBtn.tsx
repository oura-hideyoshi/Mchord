import { css } from '@emotion/css'
import React from 'react'
import { color } from '../../../components/propaties/color'

export const AddChordNodeBtn: React.FC<JSX.IntrinsicElements['button']> = ({ ...props }) => {
    return (
        <button
            className={css(
                // position
                css({
                    position: "absolute",
                    top: "50%",
                    right: "-50px",
                    transform: "translate(-50%, -50%)",
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
        >+</button>
    )
}
