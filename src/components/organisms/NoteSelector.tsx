import React, { ReactNode, useState } from 'react'
import { Chord } from "@tonaljs/chord";
import { Range } from "@tonaljs/tonal";
import { ChordView } from '../nodes/parts/ChordView';
import { MmKey } from '../libs/types';
import { css } from '@emotion/css';
import { color } from '../propaties/color';
import { PieMenu } from '../module/PieMenu';
import { Slice } from '../module/Slice';

export interface NoteSelectorProps {
    chord: Chord,
    MKey: MmKey,
    onSelected: (val: string) => void,
    children: ReactNode
}

const EVENT_CODES = [0, 1];

export const NoteSelector = ({ chord, MKey, onSelected, children, ...props }: NoteSelectorProps): JSX.Element => {
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const [showMenu, setShowMenu] = useState(false);
    const captureStartPositionMb: React.TouchEventHandler<HTMLDivElement> = (e) => {
        if (EVENT_CODES.includes(e.nativeEvent.which)) {
            setPos({
                x: e.touches[0].clientX,
                y: e.touches[0].clientY,
            });
            setShowMenu(true);
        }
    }
    const captureStartPositionPC: React.MouseEventHandler<HTMLDivElement> = (e) => {
        if (EVENT_CODES.includes(e.nativeEvent.which)) {
            setPos({
                x: e.pageX,
                y: e.pageY,
            });
            setShowMenu(true);
        }
    }

    const clearPositionsMb: React.TouchEventHandler<HTMLDivElement> = (e) => {
        if (EVENT_CODES.includes(e.nativeEvent.which)) {
            setShowMenu(false);
        }
    }
    const clearPositionsPC: React.MouseEventHandler<HTMLDivElement> = (e) => {
        if (EVENT_CODES.includes(e.nativeEvent.which)) {
            setShowMenu(false);
        }
    }

    const allNotes = Range.chromatic(["C1", "B1"], { pitchClass: true, sharps: true });
    return (
        <div
            role="presentation"
            onTouchStart={captureStartPositionMb}
            onTouchEnd={clearPositionsMb}
            onMouseDown={captureStartPositionPC}
            onMouseUp={clearPositionsPC}
            className={css({
                display: "inline-block",
            })}
        >
            {showMenu &&
                <>
                    <PieMenu
                        x={pos.x}
                        y={pos.y}
                    >
                        {allNotes.map(item =>
                            <Slice
                                onSelect={() => onSelected(item)}
                            >
                                {item}
                            </Slice>
                        )}
                    </PieMenu>
                </>
            }
            {children}
        </div>
    )
}
