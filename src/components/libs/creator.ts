import React from 'react'
import { Chord } from '@tonaljs/chord'
import { Node, XYPosition } from 'react-flow-renderer'
import { css } from '@emotion/css'
import { Key } from '@tonaljs/tonal'
import { ChordNode, ChordNodeData, KeyNode, KeyNodeData, keySignature, minorVariant } from './types'
import UUID from "uuidjs";

export function makeChordNode(position: Node["position"], data: ChordNodeData, selected = false, id?: string,): ChordNode {

    return {
        id: id || UUID.generate(),
        position: position,
        data: data,
        type: "ChordNode",
        selected: selected,
    }
}


export function makeKeyNode(position: XYPosition, data: KeyNodeData, id?: string): KeyNode {

    return {
        id: id || UUID.generate(),
        position: position,
        data: { keySig: data.keySig, isMajor: data.isMajor, minorVariant: data.minorVariant || "natural" },
        type: "KeyNode",
    }
}