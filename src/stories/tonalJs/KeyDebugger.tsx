import React from 'react';
import { Key } from '@tonaljs/tonal';

interface props {
    tonicKey: string;
    minorVariant: 'natural' | 'melodic' | "harmonic";
    keySignature: string;
}

export const KeyDebugger = ({ tonicKey, minorVariant, keySignature }: props) => {

    const majorKey = Key.majorKey(tonicKey);
    const minorKey = Key.minorKey(tonicKey)[minorVariant];
    const majorTonic = Key.majorTonicFromKeySignature(keySignature);

    return (
        <div>
            <button onClick={() => console.clear()}>CLEAR</button>
            <div>
                <h2>{majorKey.tonic}</h2>
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
                <h2>{minorKey.tonic}</h2>
                <button onClick={() => console.log(minorKey)}>log</button>
                <button onClick={() => console.log(minorKey.chordScales)}>chordScales</button>
                <button onClick={() => console.log(minorKey.chords)}>chords</button>
                <button onClick={() => console.log(minorKey.chordsHarmonicFunction)}>chordsHarmonicFunction</button>
                <button onClick={() => console.log(minorKey.grades)}>grades</button>
                <button onClick={() => console.log(minorKey.intervals)}>intervals</button>
                <button onClick={() => console.log(minorKey.scale)}>scale</button>
                <button onClick={() => console.log(minorKey.tonic)}>tonic</button>
            </div>
            <div>
                <h2>majorTonicFromKeySignature</h2>
                <p>{majorTonic}</p>
            </div>
        </div>
    )
}
