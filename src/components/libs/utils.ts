import { Node } from "react-flow-renderer";
import { Key } from "@tonaljs/tonal"
import { ChordNode, KeyNode, keySignature, minorVariant, MmKey, MusicalNode } from "./types"

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

export function isKeyNode(node: MusicalNode | Node<KeyNode>): node is KeyNode {
    return node.type == "KeyNode"
}
export function isChordNode(node: MusicalNode | Node<ChordNode>): node is ChordNode {
    return node.type == "ChordNode"
}