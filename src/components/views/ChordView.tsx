import React from 'react'
import { Chord } from "@tonaljs/chord";

interface props {
    chord: Chord
}

export const ChordView = ({ chord }: props) => {
    return (
        <span>
            {chord.root}
        </span>
    )
}
