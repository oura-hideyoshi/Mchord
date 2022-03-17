import { Node } from "react-flow-renderer";

export type minorVariant = "natural" | "melodic" | "harmonic";

export type keySignature = "" | "#" | "##" | "###" | "####" | "#####" | "######" | "b" | "bb" | "bbb" | "bbbb" | "bbbbb" | "bbbbbb";

export interface KeyNodeObj extends Node {
    data: {
        sig: keySignature,
        isMajor: boolean,
        minorVariant: minorVariant
    }
}