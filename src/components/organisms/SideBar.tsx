import React from 'react'
import { useReactFlow } from 'react-flow-renderer'
import { makeKeyNode } from '../libs/creator';
import { keySignature } from '../libs/types';
import UUID from "uuidjs";
import { NodeChanger } from './NodeChanger';
import { IsRomanNumeralChanger } from './IsRomanNumeralChanger';
import { css } from '@emotion/css';
import { initDataSet } from '../libs/initDataSet';

export const SideBar = () => {
    const init = { sig: "" as keySignature, isMajor: true }
    const { setNodes, setEdges } = useReactFlow();
    const initialize = () => {
        setNodes(initDataSet.zero.nodes)
    }
    const canon = () => {
        setNodes(initDataSet.canon.nodes);
        setEdges(initDataSet.canon.edges);
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
                <button onClick={canon}>
                    canon
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
