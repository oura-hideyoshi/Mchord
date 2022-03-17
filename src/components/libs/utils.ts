import { Key } from "@tonaljs/tonal"
import { keySignature, minorVariant, MmKey } from "./types"

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
