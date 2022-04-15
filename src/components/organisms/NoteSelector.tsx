import React, { ReactNode, useState } from 'react'
import PieMenu, { Slice } from "react-pie-menu";
import { Chord } from "@tonaljs/chord";
import { Range } from "@tonaljs/tonal";
import { ChordView } from '../nodes/parts/ChordView';
import { MmKey } from '../libs/types';
import { css } from '@emotion/css';
import { color } from '../propaties/color';

export interface NoteSelectorProps {
    chord: Chord,
    MKey: MmKey,
    onSelected: (val: string) => void,
    children: ReactNode
}

const EVENT_CODES = [0, 1];

export const NoteSelector = ({ chord, MKey, onSelected, children, ...props }: NoteSelectorProps): JSX.Element => {
    const [pos, setPos] = useState({ x: "0px", y: "0px" });
    const [showMenu, setShowMenu] = useState(false);
    const captureStartPosition = (e: any) => {
        if (EVENT_CODES.includes(e.nativeEvent.which)) {
            setPos({
                x: `${e.pageX || e.touches && e.touches[0].clientX}px`,
                y: `${e.pageY || e.touches && e.touches[0].clientY}px`,
            });
            setShowMenu(true);
        }
    }

    const clearPositions = (e: any) => {
        if (EVENT_CODES.includes(e.nativeEvent.which)) {
            setShowMenu(false);
        }
    }

    const allNotes = Range.chromatic(["C1", "B1"], { pitchClass: true, sharps: true });
    return (
        <div
            role="presentation"
            onTouchStart={captureStartPosition}
            onTouchEnd={clearPositions}
            onMouseDown={captureStartPosition}
            onMouseUp={clearPositions}
            className={css({
                display: "inline-block",
            })}
        >
            {children}
            {showMenu && (
                <PieMenu
                    radius="125px"
                    centerRadius="30px"
                    centerX={pos.x}
                    centerY={pos.y}
                >
                    {allNotes.map(note =>
                        <Slice key={note} onSelect={() => { onSelected(note), setShowMenu(false) }}>{note}</Slice>
                    )}
                </PieMenu>
            )}
        </div>
    )
}
