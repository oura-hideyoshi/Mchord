import React from 'react'
import { Chord } from '@tonaljs/chord'
import { Node, XYPosition } from 'react-flow-renderer'
import { css } from '@emotion/css'
import { Key } from '@tonaljs/tonal'
import { KeyNodeObj, keySignature, minorVariant } from './types'

export function makeChordNode(id: Node["id"], position: Node["position"], chord: Chord,): Node {

    return {
        id: id,
        position: position,
        data: { chord: chord },
        type: "ChordNode",
    }
}


export function makeKeyNode(id: string, position: XYPosition, initSig: keySignature, isMajor: boolean, minorVariant: minorVariant = "natural"): KeyNodeObj {

    return {
        id: id,
        position: position,
        data: {
            sig: initSig,
            isMajor: isMajor,
            minorVariant: minorVariant
        },
        type: "KeyNode",
    }
}