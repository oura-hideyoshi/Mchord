import { Key } from "@tonaljs/tonal"
import { keySignature, minorVariant, MmKey } from "./types"

export function sig2MmKey(sig: keySignature, isMajor: boolean): MmKey {
    const majorTonic = Key.majorTonicFromKeySignature(sig) as string;
    return isMajor ? Key.majorKey(majorTonic) : Key.minorKey(majorTonic);
}

export function detectIsMajor(key: MmKey) {
    return key.type == "major" ? true : false;
}
