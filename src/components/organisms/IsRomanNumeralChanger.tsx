import { css } from '@emotion/css';
import React, { useContext, useState } from 'react'
import { MchordContext } from '../pages/Top'

export const IsRomanNumeralChanger = () => {

    const { isRomanNumeral, setIsRomanNumeral } = useContext(MchordContext);
    const [isRoman, setIsRoman] = useState(isRomanNumeral)
    const handleOnChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        const is = e.target.value == "true" ? true : false
        setIsRomanNumeral(is);
        setIsRoman(is)
    }
    return (
        <div className={css({
            display: "flex"
        })}>
            <div
                className={css({
                    display: "flex"
                })}
            >
                <input type={"radio"} name="isRomanNumeral" value={"false"} onChange={handleOnChange} checked={!isRoman}
                    className={css({
                        width: "30px",
                        height: "30px"
                    })}
                />
                <label htmlFor="isRomanNumeral">
                    <span
                        className={css({
                            position: "relative",
                            fontSize: "20px"
                        })}
                    >C♯
                        <span
                            className={css({
                                position: "absolute",
                                fontSize: "0.8em",
                                bottom: "-18px",
                                left: "50%",
                                transform: "translate(-50%, 0%)"
                            })}
                        >
                            #I
                        </span>
                    </span>
                </label>
            </div>
            <div
                className={css({
                    display: "flex"
                })}
            >
                <input type={"radio"} name="isRomanNumeral" value={"true"} onChange={handleOnChange} checked={!isRoman}
                    className={css({
                        width: "30px",
                        height: "30px"
                    })}
                />
                <label htmlFor="isRomanNumeral">
                    <span
                        className={css({
                            position: "relative",
                            fontSize: "20px"
                        })}
                    >I♯
                        <span
                            className={css({
                                position: "absolute",
                                fontSize: "0.8em",
                                bottom: "-18px",
                                left: "50%",
                                transform: "translate(-50%, 0%)"
                            })}
                        >
                            #C
                        </span>
                    </span>
                </label>
            </div>
        </div>
    )
}
