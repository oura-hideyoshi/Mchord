import { css } from '@emotion/css'
import React, { ReactNode } from 'react'

interface props {
    children: ReactNode
}

const itemList = ["a", "b", "c", "d", "e"]
export const PieMenu = ({ }: props): JSX.Element => {
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
                    width: "calc(2 * 150px)",
                    height: "calc(2 * 150px)"
                })}>
                {itemList.map(item => {
                    return (
                        <li
                            className={css({
                                width: "100%",
                                height: "100%",
                                bottom: "50%",
                                right: "50%",
                                position: "absolute",
                                transform: "rotate(30deg) skew(-30deg)",
                                transformOrigin: "bottom right",
                                overflow: "hidden"
                            })}>
                            <div className={css({
                                display: "block",
                                width: "200%",
                                height: "200%",
                                transformOrigin: "50% 50%",
                                borderRadius: "50%",
                                transform: "skew(30deg) rotate(-30deg)",
                                color: "black",
                                backgroundColor: "gray",
                                outline: "none"
                            })}>
                                <div className={css({
                                    position: "absolute",
                                    width: "100%",
                                    textAlign: "center",
                                    top: "calc((50% + 150px - 50px) / 2 - 2em / 2)"
                                })}>
                                    <div className={css({
                                        display: "inline-block",
                                        transform: "rotate(-0deg)",

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
        </div >
    )
}
