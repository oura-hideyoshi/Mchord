import { Node } from "react-flow-renderer";
import { MajorKey, MinorKey } from "@tonaljs/key";
import { getChord } from "@tonaljs/chord"

export type minorVariant = "natural" | "melodic" | "harmonic";

export type keySignature = "" | "#" | "##" | "###" | "####" | "#####" | "######" | "b" | "bb" | "bbb" | "bbbb" | "bbbbb" | "bbbbbb";

export type MmKey = MajorKey | MinorKey;
export interface KeyNodeObj extends Node {
    data: {
        sig: keySignature,
        isMajor: boolean,
        minorVariant?: minorVariant
    }
}
export interface ChordNodeObj extends Node {
    data: {
        chord: { typeName: string, optionalTonic: string, optionalRoot?: string },
        sig: keySignature,
        isMajor: boolean
    }
}