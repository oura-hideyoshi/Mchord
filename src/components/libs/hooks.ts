import { Edge, Node, ReactFlowInstance, useReactFlow } from "react-flow-renderer";
import { Chord } from "@tonaljs/chord";
import { makeChordNode } from "./creator";
import { keySignature, MusicalNode, MusicalNodeData, ChordNodeData } from "./types";
import UUID from "uuidjs";

export function addChordNode(instance: ReactFlowInstance<MusicalNodeData>, baseNodeId: string) {
    const { getNode, addNodes, addEdges } = instance;
    const baseNode = getNode(baseNodeId);

    if (baseNode == undefined)
        return

    const { id, position, data: { keySig, isMajor } } = baseNode;
    const newNode = makeChordNode(
        { x: position.x + 150, y: position.y },
        {
            getChordProps: {
                typeName: '',
                optionalTonic: 'C',
            },
            keySig: keySig,
            isMajor: isMajor
        });
    const newEdge: Edge = {
        id: UUID.generate(),
        source: id,
        target: newNode.id
    }
    addNodes(newNode);
    addEdges(newEdge);
}

export function changeChordNode(instance: ReactFlowInstance<MusicalNodeData>, targetNodeId: string, newChordProps: ChordNodeData["getChordProps"]) {
    const { setNodes } = instance;
    setNodes(nds =>
        nds.map(node => {
            if (node.id == targetNodeId) {
                node.data = {
                    ...node.data,
                    getChordProps: { ...newChordProps }
                }
            }
            return node;
        })
    )
}

export function setNodeKey(instance: ReactFlowInstance, keySig: keySignature, isMajor: boolean, isDraggable: boolean = true) {
    const { setNodes } = instance;

    // TODO rootとなるkeyNodeから繋がっているもののみを変更
    setNodes(nds =>
        nds.map(node => {
            node.data = {
                ...node.data,
                keySig: keySig,
                isMajor: isMajor,
            }
            node.draggable = isDraggable;
            return node
        }))
}