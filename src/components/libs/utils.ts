import { Key } from "@tonaljs/tonal"
import { Key as Ikey } from "@tonaljs/key";
import { keySignature, minorVariant } from "./types"

export function sig2Key(sig: keySignature, isMajor: boolean, minorVariant: minorVariant) {
    const majorTonic = Key.majorTonicFromKeySignature(sig) as string;
    return isMajor ? Key.majorKey(majorTonic) : Key.minorKey(sig)[minorVariant];
}
export function sigKey2Key(sig: keySignature, key: Ikey) {

}
