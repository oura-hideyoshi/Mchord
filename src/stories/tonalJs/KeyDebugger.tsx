import React from 'react';
import { Key } from '@tonaljs/tonal';

interface props {
    tonicKey: string;
    minorVariant: 'natural' | 'melodic' | "harmonic";
    keySignature: string;
}

export const KeyDebugger = ({ tonicKey, minorVariant, keySignature }: props) => {

    const majorKey = Key.majorKey(tonicKey);
    const minorKey = Key.minorKey(tonicKey);
    const minorVariantKey = Key.minorKey(tonicKey)[minorVariant];
    const majorTonic = Key.majorTonicFromKeySignature(keySignature);

    return (
        <div>
            <button onClick={() => console.clear()}>CLEAR</button>
            <div>
                <h2>Key.majorKey {majorKey.tonic}</h2>
                <button onClick={() => console.log(majorKey)}>log</button>
                <button onClick={() => console.log(majorKey.alteration)}>alteration</button>
                <button onClick={() => console.log(majorKey.chordScales)}>chordScales</button>
                <button onClick={() => console.log(majorKey.chords)}>chords</button>
                <button onClick={() => console.log(majorKey.chordsHarmonicFunction)}>chordsHarmonicFunction</button>
                <button onClick={() => console.log(majorKey.grades)}>grades</button>
                <button onClick={() => console.log(majorKey.intervals)}>intervals</button>
                <button onClick={() => console.log(majorKey.keySignature)}>keySignature</button>
                <button onClick={() => console.log(majorKey.minorRelative)}>minorRelative</button>
                <button onClick={() => console.log(majorKey.scale)}>scale</button>
                <button onClick={() => console.log(majorKey.secondaryDominants)}>secondaryDominants</button>
                <button onClick={() => console.log(majorKey.secondaryDominantsMinorRelative)}>secondaryDominantsMinorRelative</button>
                <button onClick={() => console.log(majorKey.substituteDominants)}>substituteDominants</button>
                <button onClick={() => console.log(majorKey.substituteDominantsMinorRelative)}>substituteDominantsMinorRelative</button>
                <button onClick={() => console.log(majorKey.tonic)}>tonic</button>
                <button onClick={() => console.log(majorKey.type)}>type</button>
            </div>
            <div>
                <h2>Key.minorKey {minorKey.tonic}</h2>
                <button onClick={() => console.log(minorKey)}>log</button>
                <button onClick={() => console.log(minorKey.alteration)}>alteration</button>
                <button onClick={() => console.log(minorKey.keySignature)}>keySignature</button>
                <button onClick={() => console.log(minorKey.tonic)}>tonic</button>
                <button onClick={() => console.log(minorKey.type)}>type</button>
            </div>
            <div>
                <h2>Key.minorKey.keyScale {minorVariantKey.tonic}</h2>
                <button onClick={() => console.log(minorVariantKey)}>log</button>
                <button onClick={() => console.log(minorVariantKey.chordScales)}>chordScales</button>
                <button onClick={() => console.log(minorVariantKey.chords)}>chords</button>
                <button onClick={() => console.log(minorVariantKey.chordsHarmonicFunction)}>chordsHarmonicFunction</button>
                <button onClick={() => console.log(minorVariantKey.grades)}>grades</button>
                <button onClick={() => console.log(minorVariantKey.intervals)}>intervals</button>
                <button onClick={() => console.log(minorVariantKey.scale)}>scale</button>
                <button onClick={() => console.log(minorVariantKey.tonic)}>tonic</button>
            </div>
            <div>
                <h2>majorTonicFromKeySignature {majorTonic}</h2>
            </div>
        </div>
    )
}
