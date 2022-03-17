import { Node } from "react-flow-renderer";
import { MajorKey, MinorKey } from "@tonaljs/key"

export type minorVariant = "natural" | "melodic" | "harmonic";

export type keySignature = "" | "#" | "##" | "###" | "####" | "#####" | "######" | "b" | "bb" | "bbb" | "bbbb" | "bbbbb" | "bbbbbb";

export type MmKey = MajorKey | MinorKey;
export interface KeyNodeObj extends Node {
    data: {
        sig: keySignature,
        isMajor: boolean,
        minorVariant: minorVariant
    }
}