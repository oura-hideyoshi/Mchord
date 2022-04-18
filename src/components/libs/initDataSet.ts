import React from 'react'
import { makeChordNode, makeKeyNode } from './creator'

export const initDataSet = {
    zero: {
        nodes: [makeKeyNode({ x: -100, y: 0 }, { keySig: "", isMajor: true }, "key_1"),],
        edges: []
    },
    canon: {
        nodes: [
            makeKeyNode({ x: -100, y: 0 }, { keySig: "", isMajor: true }, "key_1"),
            makeChordNode({ x: 100, y: 0 }, {
                keySig: "", isMajor: true, getChordProps: {
                    typeName: '',
                    optionalTonic: 'C',
                    optionalRoot: undefined
                }
            }, false, "chord_1"),
            makeChordNode({ x: 200, y: 0 }, {
                keySig: "", isMajor: true, getChordProps: {
                    typeName: '',
                    optionalTonic: 'G',
                    optionalRoot: undefined
                }
            }, false, "chord_2"),
            makeChordNode({ x: 300, y: 0 }, {
                keySig: "", isMajor: true, getChordProps: {
                    typeName: 'minor',
                    optionalTonic: 'A',
                    optionalRoot: undefined
                }
            }, false, "chord_3"),
            makeChordNode({ x: 400, y: 0 }, {
                keySig: "", isMajor: true, getChordProps: {
                    typeName: 'minor',
                    optionalTonic: 'E',
                    optionalRoot: undefined
                }
            }, false, "chord_4"),
            makeChordNode({ x: 500, y: 0 }, {
                keySig: "", isMajor: true, getChordProps: {
                    typeName: '',
                    optionalTonic: 'F',
                    optionalRoot: undefined
                }
            }, false, "chord_5"),
            makeChordNode({ x: 600, y: 0 }, {
                keySig: "", isMajor: true, getChordProps: {
                    typeName: '',
                    optionalTonic: 'C',
                    optionalRoot: undefined
                }
            }, false, "chord_6"),
            makeChordNode({ x: 700, y: 0 }, {
                keySig: "", isMajor: true, getChordProps: {
                    typeName: 'minor',
                    optionalTonic: 'D',
                    optionalRoot: undefined
                }
            }, false, "chord_7"),
            makeChordNode({ x: 800, y: 0 }, {
                keySig: "", isMajor: true, getChordProps: {
                    typeName: '7',
                    optionalTonic: 'G',
                    optionalRoot: undefined
                }
            }, false, "chord_8"),
            makeChordNode({ x: 200, y: 100 }, {
                keySig: "", isMajor: true, getChordProps: {
                    typeName: '7',
                    optionalTonic: 'B',
                    optionalRoot: undefined
                }
            }, false, "chord_9"),
            makeChordNode({ x: 250, y: 100 }, {
                keySig: "", isMajor: true, getChordProps: {
                    typeName: '7',
                    optionalTonic: 'E',
                    optionalRoot: undefined
                }
            }, false, "chord_10"),
            makeChordNode({ x: 200, y: 200 }, {
                keySig: "", isMajor: true, getChordProps: {
                    typeName: 'aug',
                    optionalTonic: 'C',
                    optionalRoot: undefined
                }
            }, false, "chord_11"),
            makeChordNode({ x: 400, y: 100 }, {
                keySig: "", isMajor: true, getChordProps: {
                    typeName: '6',
                    optionalTonic: 'G',
                    optionalRoot: undefined
                }
            }, false, "chord_12"),
            makeChordNode({ x: 600, y: 100 }, {
                keySig: "", isMajor: true, getChordProps: {
                    typeName: 'm',
                    optionalTonic: 'F',
                    optionalRoot: undefined
                }
            }, false, "chord_13"),
            makeChordNode({ x: 800, y: 100 }, {
                keySig: "", isMajor: true, getChordProps: {
                    typeName: 'aug',
                    optionalTonic: 'G',
                    optionalRoot: undefined
                }
            }, false, "chord_14"),
        ],
        edges: [
            { id: 'edge_0_1', source: 'key_1', target: 'chord_1' },
            { id: 'edge_1_2', source: 'chord_1', target: 'chord_2' },
            { id: 'edge_2_3', source: 'chord_2', target: 'chord_3' },
            { id: 'edge_3_4', source: 'chord_3', target: 'chord_4' },
            { id: 'edge_4_5', source: 'chord_4', target: 'chord_5' },
            { id: 'edge_5_6', source: 'chord_5', target: 'chord_6' },
            { id: 'edge_6_7', source: 'chord_6', target: 'chord_7' },
            { id: 'edge_7_8', source: 'chord_7', target: 'chord_8' },
            { id: 'edge_1_9', source: 'chord_1', target: 'chord_9' },
            { id: 'edge_9_10', source: 'chord_9', target: 'chord_10' },
            { id: 'edge_10_3', source: 'chord_10', target: 'chord_3' },
            { id: 'edge_1_11', source: 'chord_1', target: 'chord_11' },
            { id: 'edge_11_3', source: 'chord_11', target: 'chord_3' },
            { id: 'edge_3_12', source: 'chord_3', target: 'chord_12' },
            { id: 'edge_12_5', source: 'chord_12', target: 'chord_5' },
            { id: 'edge_5_13', source: 'chord_5', target: 'chord_13' },
            { id: 'edge_13_7', source: 'chord_13', target: 'chord_7' },
            { id: 'edge_7_14', source: 'chord_7', target: 'chord_14' },
        ]
    }
}
