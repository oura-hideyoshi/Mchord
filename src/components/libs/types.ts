import { Node } from "react-flow-renderer";
import { MajorKey, MinorKey } from "@tonaljs/key";
import { getChord } from "@tonaljs/chord"

export type minorVariant = "natural" | "melodic" | "harmonic";

export type keySignature = "" | "#" | "##" | "###" | "####" | "#####" | "######" | "b" | "bb" | "bbb" | "bbbb" | "bbbbb" | "bbbbbb";

export type MmKey = MajorKey | MinorKey;

type MusicalNodeData = {
    keySig: keySignature,
    isMajor: boolean,
}

export interface KeyNodeData extends MusicalNodeData {
    minorVariant?: minorVariant
}
export interface ChordNodeData extends MusicalNodeData {
    chord: { typeName: string, optionalTonic: string, optionalRoot?: string },
}

export type KeyNode = Node<KeyNodeData>
export type ChordNode = Node<ChordNodeData>

export type MusicalNode = KeyNode | ChordNode