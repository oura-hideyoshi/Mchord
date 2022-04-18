import React, { ReactNode, useState } from 'react'
import { Chord } from "@tonaljs/chord";
import { Range } from "@tonaljs/tonal";
import { ChordView } from '../nodes/parts/ChordView';
import { MmKey } from '../libs/types';
import { css } from '@emotion/css';
import { color } from '../propaties/color';
import { PieMenu } from '../module/PieMenu';
import { Slice } from '../module/Slice';
import { PieSelector } from '../module/PieSelector';

export interface NoteSelectorProps {
    chord: Chord,
    MKey: MmKey,
    onSelect: (val: string) => void,
    children: ReactNode
}

export const NoteSelector = ({ chord, MKey, onSelect, children, ...props }: NoteSelectorProps): JSX.Element => {
    const allNotes = Range.chromatic(["C1", "B1"], { pitchClass: true, sharps: true });
    return (
        <PieSelector
            onSelect={onSelect}
            values={allNotes}
        >
            {children}
        </PieSelector>
    )
}
