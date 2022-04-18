import React, { ReactNode, useState } from 'react'
import { css } from '@emotion/css'
import { PieMenu } from './PieMenu'
import { Slice } from './Slice'

const EVENT_CODES = [0, 1];

interface props {
    onSelect: (val: string) => void,
    values: string[],
    children: ReactNode
}

export const PieSelector = ({ onSelect: onSelected, values, children }: props) => {
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
            const elements = document.elementsFromPoint(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
            const element = elements.find(element => element.id.startsWith("slice_"));
            const value = element?.getAttribute("value")
            value && onSelected(value);
        }
    }
    const clearPositionsPC: React.MouseEventHandler<HTMLDivElement> = (e) => {
        if (EVENT_CODES.includes(e.nativeEvent.which)) {
            setShowMenu(false);
            const elements = document.elementsFromPoint(e.pageX, e.pageY);
            const element = elements.find(element => element.id.startsWith("slice_"));
            const value = element?.getAttribute("value")
            value && onSelected(value);
        }
    }
    return (
        <>
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
                    <PieMenu
                        x={pos.x}
                        y={pos.y}
                    >
                        {values.map(value =>
                            <Slice
                                key={value}
                                onSelect={() => onSelected(value)}
                                value={value}
                            >
                                {value}
                            </Slice>
                        )}
                    </PieMenu>
                }
                {children}
            </div>
        </>
    )
}
