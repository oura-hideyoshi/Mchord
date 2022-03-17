import React from 'react'
import { Chord } from '@tonaljs/chord'
import { Node } from 'react-flow-renderer'
import { css } from '@emotion/css'
import { Key } from '@tonaljs/tonal'

export function makeChordNode(id: Node["id"], position: Node["position"], chord: Chord,): Node {

    return {
        id: id,
        position: position,
        data: { chord: chord },
        type: "ChordNode",
    }
}

export interface makeKeyNodeProps {
    id: Node["id"],
    position: Node["position"],
    key: string
}

export function makeKeyNode(id: makeKeyNodeProps["id"], position: makeKeyNodeProps["position"], key: makeKeyNodeProps["key"]): Node {

    return {
        id: id,
        position: position,
        data: { key: Key.majorKey(key) },
        type: "KeyNode",
    }
}