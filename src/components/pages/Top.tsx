import { css } from '@emotion/css'
import React from 'react'
import { ReactFlowProvider } from 'react-flow-renderer'
import FlowView from '../organisms/FlowView'
import { SideBar } from '../organisms/SideBar'

export const Top = () => {
    return (
        <div className={css({
            display: "flex"
        })}>
            <ReactFlowProvider>
                <div style={{ width: "80vw", height: "100vh" }}>
                    <FlowView />
                </div>
                <div style={{ width: "20vw", height: "100vh" }}>
                    <SideBar />
                </div>
            </ReactFlowProvider>
        </div>
    )
}
