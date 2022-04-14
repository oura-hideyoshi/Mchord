import React, { useContext } from 'react'
import { Chord } from "@tonaljs/chord"
import { MchordContext } from '../../../components/pages/Top'
import { allAliases, defaultAliases } from '../../../components/propaties/defaultAliases'
import { chooseAliases } from '../../../components/libs/utils'

interface props {
    children: Chord
}

export const ChordView = ({ children, ...props }: props) => {
    const { isRomanNumeral } = useContext(MchordContext)
    return (
        <div>
            {children.tonic}{chooseAliases(children)}
        </div>
    )
}
