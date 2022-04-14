import { Edge, Node, ReactFlowInstance, useReactFlow } from "react-flow-renderer";
import { Chord } from "@tonaljs/chord";
import { makeChordNode } from "./creator";
import { keySignature, MusicalNode, MusicalNodeData, ChordNodeData } from "./types";
import UUID from "uuidjs";
import { useContext } from "react";
import { MchordContext } from "../pages/Top";
import { isKeyNode } from "./utils";

export function addChordNode(instance: ReactFlowInstance<MusicalNodeData>, baseNodeId: string) {

    const { setNodes, getNode, getNodes, addNodes, addEdges } = instance;
    const baseNode = getNode(baseNodeId);

    if (baseNode == undefined)
        return

    const { id, position, data: { keySig, isMajor }, type } = baseNode;
    const newNodeSpace = isKeyNode(baseNode) ? 150 : 80;
    const newNode = makeChordNode(
        { x: position.x + newNodeSpace, y: position.y },
        {
            getChordProps: {
                typeName: '',
                optionalTonic: 'C',
            },
            keySig: keySig,
            isMajor: isMajor
        },
        true
    );
    const newEdge: Edge = {
        id: UUID.generate(),
        source: id,
        target: newNode.id
    }
    setNodes(nds => nds.map(node => {
        if (node.id == id)
            node.selected = false
        return node
    }).concat(newNode))
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

export function removeNode(instance: ReactFlowInstance, removeNodeId: string) {
    const { setNodes, getNodes } = instance;
    setNodes(nds => nds.filter(node => node.id != removeNodeId))
}