import { Edge, Node, ReactFlowInstance, useReactFlow } from "react-flow-renderer";
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