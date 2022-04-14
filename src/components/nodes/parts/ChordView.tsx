import React, { useContext } from 'react'
import { Chord } from "@tonaljs/chord"
import { MchordContext } from '../../../components/pages/Top'

interface props {
    children: Chord
}

export const ChordView = ({ children, ...props }: props) => {
    const { isRomanNumeral } = useContext(MchordContext)
    return (
        <div>
            {children.symbol}
        </div>
    )
}
