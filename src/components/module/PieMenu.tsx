import { css } from '@emotion/css'
import React, { JSXElementConstructor, ReactElement, ReactNode } from 'react'
import { color } from '../propaties/color'

export interface PieMenuProps {
    x: number,
    y: number,
    children: ReactElement<any, string | JSXElementConstructor<any>>[]
}

export const PieMenu = ({ x, y, children }: PieMenuProps): JSX.Element => {
    // skew : 図形を平行四辺形風に変形させる
    const len = children.length;
    const size = 150;
    const centerPieSize = 50;
    const oneRotateDeg = 360 / len; // 一つのピースの中心角
    const rotateOverHeadDeg = 90 - oneRotateDeg / 2 // 角のオーバーヘッド
    const oneSkewDeg = 90 - oneRotateDeg; // 90度からの過多角
    // const ceterRad = 360 /
    return (
        <div
            className={css({
                display: "inline-block",
                position: "absolute",
                left: `calc(${x}px - ${size}px)`,
                top: `calc(${y}px - ${size}px)`,
                borderRadius: "50%",
                overflow: "hidden",
                zIndex: 1000
            })}
        >
            <ul
                className={css({
                    position: "relative",
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    borderRadius: "50%",
                    width: `calc(2 * ${size}px)`,
                    height: `calc(2 * ${size}px)`
                })}>
                {children.map((item, idx) => {
                    const rotateDeg = rotateOverHeadDeg + oneRotateDeg * idx;
                    const skewDeg = oneSkewDeg;
                    const newItem = React.cloneElement(item, {
                        size: size,
                        rotateDeg: rotateDeg,
                        rotateOverHeadDeg: rotateOverHeadDeg,
                        skewDeg: skewDeg,
                        centerPieSize: centerPieSize,
                    })
                    return (
                        <>
                            {newItem}
                        </>
                    )
                })}
            </ul>
            <div className={css({
                position: "absolute",
                borderRadius: "50%",
                background: "transparent",
                top: `calc(50% - ${centerPieSize}px)`,
                left: `calc(50% - ${centerPieSize}px)`,
                width: `calc(2 * ${centerPieSize}px)`,
                height: `calc(2 * ${centerPieSize}px)`
            })} />
        </div >
    )
}
