import { css } from '@emotion/css'
import React, { ReactNode } from 'react'
import { color } from '../propaties/color'
import { PieMenuProps } from './PieMenu'

export interface SliceProps {
    size?: number,
    rotateDeg?: number,
    rotateOverHeadDeg?: number,
    skewDeg?: number,
    centerPieSize?: number,
    onSelect?: () => void,
    bgColor?: string,
    hoverBgColor?: string,
    children: ReactNode
}

export const Slice = ({
    rotateDeg = 0,
    skewDeg = 0,
    rotateOverHeadDeg = 0,
    size = 100,
    centerPieSize = 50,
    onSelect,
    bgColor = "rgba(100, 100, 100, 0.7)",
    hoverBgColor = "rgba(100, 100, 100, 0.9)",
    children,
    ...props }: SliceProps) => {
    return (
        <>
            <li
                onMouseUp={(e) => { onSelect && onSelect() }}
                onTouchEnd={(e) => { onSelect && onSelect() }}
                className={css({
                    width: "100%",
                    height: "100%",
                    bottom: "50%",
                    right: "50%",
                    position: "absolute",
                    transform: `rotate(${rotateDeg}deg) skew(${skewDeg}deg)`,
                    transformOrigin: "bottom right",
                    overflow: "hidden"
                })}>
                <div className={css({
                    display: "block",
                    width: "200%",
                    height: "200%",
                    transformOrigin: "50% 50%",
                    borderRadius: "50%",
                    transform: `skew(${-skewDeg}deg) rotate(${-rotateOverHeadDeg}deg) `,
                    color: "black",
                    backgroundImage: `radial-gradient(transparent 50px,${bgColor} 50px)`,
                    outline: "none",
                    ":hover": {
                        color: "white",
                        backgroundImage: `radial-gradient(transparent 50px,${hoverBgColor} 50px)`,
                    }
                })}>
                    <div className={css({
                        position: "absolute",
                        width: "100%",
                        textAlign: "center",
                        top: `calc((50% + ${size}px - ${centerPieSize}px) / 2 - 2em / 2)`
                    })}>
                        <div className={css({
                            display: "inline-block",
                            transform: `rotate(${rotateOverHeadDeg - rotateDeg}deg)`,
                        })}
                        >
                            {children}
                        </div>
                    </div>
                </div>
            </li>
        </>
    )
}
