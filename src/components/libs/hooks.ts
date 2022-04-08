import { Edge, Node, ReactFlowInstance, useReactFlow } from "react-flow-renderer";
import { Chord } from "@tonaljs/chord";
import { makeChordNode } from "./creator";
import { keySignature, MusicalNode } from "./types";
import UUID from "uuidjs";

export function addChordNode(instance: ReactFlowInstance, baseNodeId: string) {
    const { getNode, addNodes, addEdges } = instance;
    const baseNode = getNode(baseNodeId) as MusicalNode;

    const newNode = makeChordNode(
        { x: baseNode.position.x + 150, y: baseNode.position.y },
        {
            chord: {
                typeName: '',
                optionalTonic: 'C',
            },
            keySig: baseNode.data.keySig,
            isMajor: baseNode.data.isMajor
        });
    const newEdge: Edge = {
        id: UUID.generate(),
        source: baseNode.id,
        target: newNode.id
    }
    addNodes(newNode);
    addEdges(newEdge);
}

export function changeChordNode(instance: ReactFlowInstance, targetNodeId: string, newChord: Chord) {
    const { setNodes } = instance;
    console.log("log")
    setNodes(nds =>
        nds.map(node => {
            if (node.id == targetNodeId) {
                node.data = {
                    ...node.data,
                    chord: { typeName: newChord.type, optionalTonic: newChord.tonic, optionalRoot: newChord.root }
                }
            }
            return node;
        })
    )
}

export function setNodeKey(instance: ReactFlowInstance, keySig: keySignature, isMajor: boolean) {
    const { setNodes } = instance;

    // TODO rootとなるkeyNodeから繋がっているもののみを変更
    setNodes(nds =>
        nds.map(node => {
            node.data = {
                ...node.data,
                keySig: keySig,
                isMajor: isMajor
            }
            return node
        }))
}