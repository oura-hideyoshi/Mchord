import React from 'react'
import { useReactFlow } from 'react-flow-renderer'
import { makeKeyNode } from '../libs/creator';
import { keySignature } from '../libs/types';
import UUID from "uuidjs";
import { NodeChanger } from './NodeChanger';
import { IsRomanNumeralChanger } from './IsRomanNumeralChanger';
import { css } from '@emotion/css';

export const SideBar = () => {
    const init = { sig: "" as keySignature, isMajor: true }
    const { setNodes } = useReactFlow();
    const initialize = () => {
        setNodes([
            makeKeyNode({ x: 0, y: 0 }, { keySig: init.sig, isMajor: init.isMajor })
        ])
    }
    return (
        <div className={css({
            touchAction: "none",
        })}>
            <div>
                <button onClick={() => console.clear()}>
                    clear console
                </button>
                <button onClick={initialize}>
                    init
                </button>
            </div>
            <div>
                <IsRomanNumeralChanger />
            </div>
            <div>
                <NodeChanger />
            </div>
        </div>
    )
}
