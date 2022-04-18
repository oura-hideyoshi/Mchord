import { css } from '@emotion/css'
import React, { ReactNode } from 'react'
import { color } from '../propaties/color'

interface props {
    children: ReactNode
}

const itemList = [1, 2, 3, 4, 5, 6]
export const PieMenu = ({ }: props): JSX.Element => {
    // skew : 図形を平行四辺形風に変形させる
    const len = itemList.length;
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
                position: "relative",
                borderRadius: "50%",
                overflow: "hidden",
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
                {itemList.map((item, idx) => {
                    const rotateDeg = rotateOverHeadDeg + oneRotateDeg * idx;
                    const skewDeg = oneSkewDeg;
                    return (
                        <li
                            className={css({
                                width: "100%",
                                height: "100%",
                                bottom: "50%",
                                right: "50%",
                                position: "absolute",
                                transform: `rotate(${rotateDeg}deg) skew(${oneSkewDeg}deg)`,
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
                                backgroundColor: "gray",
                                outline: "none",
                                ":hover": {
                                    backgroundColor: color.darkgray,
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
                                        {item}
                                    </div>
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
            <div className={css({
                position: "absolute",
                borderRadius: "50%",
                background: "white",
                top: `calc(50% - ${centerPieSize}px)`,
                left: `calc(50% - ${centerPieSize}px)`,
                width: `calc(2 * ${centerPieSize}px)`,
                height: `calc(2 * ${centerPieSize}px)`
            })} />
        </div >
    )
}
