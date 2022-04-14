import React from 'react'
import { Chord } from "@tonaljs/chord"

interface props {
    children: Chord
}

export const ChordView = ({ children, ...props }: props) => {
    return (
        <div>{children.symbol}</div>
    )
}
