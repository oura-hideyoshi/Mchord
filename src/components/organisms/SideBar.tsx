import React from 'react'
import { useReactFlow } from 'react-flow-renderer'
import { makeKeyNode } from '../libs/creator';
import { keySignature } from '../libs/types';

export const SideBar = () => {
    const init = { sig: "#" as keySignature, isMajor: true }
    const { setNodes } = useReactFlow();
    const initialize = () => {
        setNodes([
            makeKeyNode("key_1", { x: 0, y: 0 }, { keySig: init.sig, isMajor: init.isMajor })
        ])
    }
    return (
        <div>
            <button onClick={() => console.clear()}>
                clear console
            </button>
            <button onClick={initialize}>
                init
            </button>
        </div>
    )
}
