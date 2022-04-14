import { Node } from "react-flow-renderer";
import { Key } from "@tonaljs/tonal";
import { Chord } from "@tonaljs/chord";
import { ChordNode, ChordNodeData, KeyNode, KeyNodeData, keySignature, minorVariant, MmKey, MusicalNode, MusicalNodeData } from "./types"
import { defaultAliases, allAliases } from "../propaties/defaultAliases";

export function sig2MmKey(sig: keySignature, isMajor: boolean): MmKey {
    const majorTonic = sig == "" ? "C" : Key.majorTonicFromKeySignature(sig) as string;
    return isMajor ? Key.majorKey(majorTonic) : Key.minorKey(majorTonic);
}

export function tonic2MmKey(tonic: string, isMajor: boolean): MmKey {
    return isMajor ? Key.majorKey(tonic) : Key.minorKey(tonic);
}

export function detectIsMajor(key: MmKey) {
    return key.type == "major" ? true : false;
}

export function isKeyNode(node: MusicalNode): node is KeyNode {
    return node.type == "KeyNode";
}

export function isNodeKeyNodeData(node: Node<MusicalNodeData>): node is Node<KeyNodeData> {
    return node.type == "KeyNode";
}

export function isChordNode(node: MusicalNode): node is ChordNode {
    return node.type == "ChordNode"
}

export function isNodeChordNodeData(node: Node<MusicalNodeData>): node is Node<ChordNodeData> {
    return node.type == "ChordNode";
}

export function chooseAliases(chord: Chord): string {
    return chord.aliases[defaultAliases[chord.type as allAliases]]
}