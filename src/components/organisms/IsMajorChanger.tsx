import React, { ComponentProps } from 'react'

interface props extends ComponentProps<React.FC<JSX.IntrinsicElements['select']>> {
    isMajor: boolean
}

export const IsMajorChanger = ({ isMajor, ...props }: props) => {
    return (
        <select
            name="isMajor"
            value={isMajor ? "major" : "minor"}
            style={{ width: "50%", height: "50px" }}
            {...props}
        >
            <option value={"major"}>M</option>
            <option value={"minor"}>m</option>
        </select>
    )
}
