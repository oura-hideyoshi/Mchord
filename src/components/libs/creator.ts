import React from 'react'
import { Chord } from '@tonaljs/chord'
import { Node, XYPosition } from 'react-flow-renderer'
import { css } from '@emotion/css'
import { Key } from '@tonaljs/tonal'
import { ChordNodeObj, KeyNodeObj, keySignature, minorVariant } from './types'

export function makeChordNode(id: Node["id"], position: Node["position"], data: ChordNodeObj["data"],): ChordNodeObj {

    return {
        id: id,
        position: position,
        data: data,
        type: "ChordNode",
    }
}


export function makeKeyNode(id: string, position: XYPosition, data: KeyNodeObj["data"]): KeyNodeObj {

    return {
        id: id,
        position: position,
        data: { sig: data.sig, isMajor: data.isMajor, minorVariant: data.minorVariant || "natural" },
        type: "KeyNode",
    }
}