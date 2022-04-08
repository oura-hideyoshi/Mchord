import { Node, NodeProps } from "react-flow-renderer";
import { MajorKey, MinorKey } from "@tonaljs/key";
import { getChord } from "@tonaljs/chord"

export type minorVariant = "natural" | "melodic" | "harmonic";

export type keySignature = "" | "#" | "##" | "###" | "####" | "#####" | "######" | "b" | "bb" | "bbb" | "bbbb" | "bbbbb" | "bbbbbb";

export type MmKey = MajorKey | MinorKey;

type _MusicalNodeData = {
    keySig: keySignature,
    isMajor: boolean,
}

export interface KeyNodeData extends _MusicalNodeData {
    minorVariant?: minorVariant
}
export interface ChordNodeData extends _MusicalNodeData {
    getChordProps: {
        typeName: string,
        optionalTonic: string,
        optionalRoot?: string
    },
}
export type MusicalNodeData = KeyNodeData | ChordNodeData;

export type KeyNode = Node<KeyNodeData>
export type KeyNodeProps = NodeProps<KeyNodeData>
export type ChordNode = Node<ChordNodeData>
export type ChordNodeProps = NodeProps<ChordNodeData>

export type MusicalNode = KeyNode | ChordNode

export interface MchordContextValue {
    selectedNodeId: string,
    setSelectedNodeId: Function,
    isRomanNumeral: boolean,
    setIsRomanNumeral: Function,
}

