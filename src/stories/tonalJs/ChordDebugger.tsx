import React from 'react';
import { Chord } from '@tonaljs/tonal';

interface props {
    chordName: string;
    getChordName: [string, string, string];
    detectChordName: string[];
    extendedChordName: string;
    reducedChordName: string;
}

export const ChordDebugger = ({ chordName, getChordName, detectChordName, extendedChordName, reducedChordName }: props) => {

    const chord1 = Chord.get(chordName);
    const chord2 = Chord.getChord(...getChordName);
    const chord3 = Chord.detect(detectChordName);
    const chord4 = Chord.extended(extendedChordName);
    const chord5 = Chord.reduced(reducedChordName);

    return (
        <div>
            <div>
                <button onClick={() => console.clear()}>CLEAR</button>
            </div>
            {[chord1, chord2].map((chord, idx) =>
                <div key={idx}>
                    <h2>{chord.symbol}</h2>
                    <button onClick={() => console.log(chord.aliases)}>aliases</button>
                    <button onClick={() => console.log(chord.chroma)}>chroma</button>
                    <button onClick={() => console.log(chord.empty)}>empty</button>
                    <button onClick={() => console.log(chord.intervals)}>intervals</button>
                    <button onClick={() => console.log(chord.name)}>name</button>
                    <button onClick={() => console.log(chord.normalized)}>normalized</button>
                    <button onClick={() => console.log(chord.notes)}>notes</button>
                    <button onClick={() => console.log(chord.quality)}>quality</button>
                    <button onClick={() => console.log(chord.root)}>root</button>
                    <button onClick={() => console.log(chord.rootDegree)}>rootDegree</button>
                    <button onClick={() => console.log(chord.setNum)}>setNum</button>
                    <button onClick={() => console.log(chord.symbol)}>symbol</button>
                    <button onClick={() => console.log(chord.tonic)}>tonic</button>
                    <button onClick={() => console.log(chord.type)}>type</button>
                </div>
            )}
            <div>
                <h2>detect</h2>
                {chord3}
            </div>
            <div>
                <h2>extended</h2>
                {chord4.join("  ")}
            </div>
            <div>
                <h2>reduced</h2>
                {chord5.join("  ")}
            </div>
        </div>
    )
}
