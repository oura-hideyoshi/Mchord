import React, { ComponentProps, useState } from 'react'

interface props extends ComponentProps<React.FC<JSX.IntrinsicElements['select']>> {
    isMajor: boolean
    onChangeIsMajor: (val: boolean) => void
}

export const IsMajorChanger = ({ isMajor: _isMajor, onChangeIsMajor, ...props }: props) => {

    const [isMajor, setIsMajor] = useState(_isMajor);
    const handleOnChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
        const val = e.target.value == "major";
        setIsMajor(val)
        onChangeIsMajor(val);
    }

    return (
        <select
            name="isMajor"
            value={isMajor ? "major" : "minor"}
            style={{ width: "50%", height: "50px" }}
            onChange={handleOnChange}
            {...props}
        >
            <option value={"major"}>M</option>
            <option value={"minor"}>m</option>
        </select>
    )
}
