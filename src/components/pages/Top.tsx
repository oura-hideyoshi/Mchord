import { css } from '@emotion/css'
import React, { createContext, useContext, useState } from 'react'
import { ReactFlowProvider } from 'react-flow-renderer'
import { MchordContextValue } from '../libs/types'
import FlowView from '../organisms/FlowView'
import { SideBar } from '../organisms/SideBar'

export const MchordContext = createContext<MchordContextValue>({
    selectedNodeId: "",
    setSelectedNodeId: () => { },

});
export const Top = () => {
    const [selectedNodeId, setSelectedNodeId] = useState("");
    const mchordValue = {
        selectedNodeId: selectedNodeId,
        setSelectedNodeId: setSelectedNodeId
    }
    return (
        <div className={css({
            display: "flex"
        })}>
            <ReactFlowProvider>
                <MchordContext.Provider value={mchordValue}>
                    <div style={{ width: "80vw", height: "100vh" }}>
                        <FlowView />
                    </div>
                    <div style={{ width: "20vw", height: "100vh" }}>
                        <SideBar />
                    </div>
                </MchordContext.Provider>
            </ReactFlowProvider>
        </div>
    )
}
