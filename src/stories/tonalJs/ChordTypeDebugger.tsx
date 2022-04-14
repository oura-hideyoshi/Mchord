import React from 'react';
import { Chord, ChordType, Key } from '@tonaljs/tonal';
import { chooseAliase } from '../../components/libs/utils';

interface props {
    name: string;
}

export const ChordTypeDebugger = ({ name }: props) => {

    const allChordType = ChordType.all();
    const chordType = ChordType.get(name);
    const onClickCustom = () => {
        const myAllChordType = allChordType.map(chordType => {
            const cho = Chord.get(chordType.name);
            return [chordType.name || chordType.aliases[0], chooseAliase(cho)]
        })
        console.log(myAllChordType)
    }
    const onClickCustom2 = () => {
        const myAllChordType = allChordType.map(chordType => {
            const cho = Chord.get(chordType.name);
            if (!cho.empty)
                return [chordType.name, chooseAliase(cho)]
            else undefined
        })
        console.log(myAllChordType.filter(item => item != undefined))
    }

    return (
        <div>
            <button onClick={() => console.clear()}>CLEAR</button>
            <div>
                <h2>ChordType.get()</h2>
                <p>{chordType.name}</p>
                <button onClick={() => console.log(chordType)}>log</button>
                <button onClick={() => console.log(chordType.name)}>name</button>
                <button onClick={() => console.log(chordType.aliases)}>aliases</button>
                <button onClick={() => console.log(chordType.quality)}>quality</button>
                <button onClick={() => console.log(chordType.setNum)}>setNum</button>
                <button onClick={() => console.log(chordType.chroma)}>chroma</button>
                <button onClick={() => console.log(chordType.normalized)}>normalized</button>
                <button onClick={() => console.log(chordType.intervals)}>intervals</button>
            </div>
            <div>
                <h2>ChordType.all()</h2>
                <button onClick={() => console.log(allChordType)}>log</button>
                <button onClick={() => console.log(allChordType.filter(item => item.name != ""))}>log(only easy)</button>
            </div>
            <div>
                <h2>(custom):defaultAliase</h2>
                <button onClick={onClickCustom}>log</button>
                <button onClick={onClickCustom2}>log(only easy)</button>
            </div>
        </div>
    )
}
