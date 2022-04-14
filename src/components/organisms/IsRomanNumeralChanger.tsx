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
        <div>
            <input type={"radio"} name="isRomanNumeral" value={"false"} onChange={handleOnChange} checked={!isRoman} style={{ margin: "20px", transform: "scale(3,3)" }} />
            <label htmlFor="isRomanNumeral">C♯</label>
            <input type={"radio"} name="isRomanNumeral" value={"true"} onChange={handleOnChange} checked={isRoman} style={{ margin: "20px", transform: "scale(3,3)" }} />
            <label htmlFor="isRomanNumeral">I♯</label>
        </div>
    )
}