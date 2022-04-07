import React from 'react'
import { Chord } from '@tonaljs/chord'
import { Node, XYPosition } from 'react-flow-renderer'
import { css } from '@emotion/css'
import { Key } from '@tonaljs/tonal'
import { ChordNode, ChordNodeData, KeyNode, KeyNodeData, keySignature, minorVariant } from './types'

export function makeChordNode(id: Node["id"], position: Node["position"], data: ChordNodeData,): ChordNode {

    return {
        id: id,
        position: position,
        data: data,
        type: "ChordNode",
    }
}


export function makeKeyNode(id: string, position: XYPosition, data: KeyNodeData): KeyNode {

    return {
        id: id,
        position: position,
        data: { keySig: data.keySig, isMajor: data.isMajor, minorVariant: data.minorVariant || "natural" },
        type: "KeyNode",
    }
}