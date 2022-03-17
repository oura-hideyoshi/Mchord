import React from 'react'
import { Chord } from '@tonaljs/chord'
import { Key } from '@tonaljs/key'
import { Node } from 'react-flow-renderer'
import { css } from '@emotion/css'

export function makeChordNode(id: Node["id"], position: Node["position"], chord: Chord,): Node {

    return {
        id: id,
        position: position,
        data: { chord: chord },
        type: "ChordNode",
    }
}
export function makeKeyNode(id: Node["id"], position: Node["position"], key: Key): Node {

    return {
        id: id,
        position: position,
        data: { key: key },
        type: "KeyNode",
    }
}