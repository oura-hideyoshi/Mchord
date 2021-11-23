import { useState, useEffect, createContext } from 'react';
import { ToneAndDegSwitch, ChordBtn, KeySelector } from "../atoms/index";
import { NoteBtnSet, ChordBtnSet, OptBtnSet } from "../molecules/index";
import { Key, Note, Chord } from "@tonaljs/tonal";

export const HoldingChordContext = createContext();

const InputChordSet = ({ setEntryChord }) => {
    const initialKey = Key.majorKey("C");
    const [rootKey, setRootKey] = useState(initialKey);
    const [isToneName, setIsToneName] = useState(true);
    const [isMajKey, setIsMajKey] = useState(true);
    const initialChord = Chord.get(initialKey.chords[0]);
    const [holdingChord, setHoldingChord] = useState({ intervals: initialChord.intervals, tonic: initialKey.tonic })
    const inputChordParam = {
        holdingChord: holdingChord,
        setHoldingChord: setHoldingChord,
        rootKey: rootKey,
        setRootKey: setRootKey,
        isMajKey: isMajKey,
        setIsMajKey: setIsMajKey,
        isToneName: isToneName,
        setIsToneName: setIsToneName
    };
    const opts = ["2M", "3m", "3M", "4P", "5d", "5P","5A", "6m", "6M", "7m", "7M", "9m", "9M", "9A", "11P", "11A", "13m", "13M"];

    // debug
    useEffect(() => {
        console.log("rootKey >", rootKey);
    }, [rootKey])

    const detectChordFromIntervals = (intervals, tonic) => {
        const notes = intervals.map(Note.transposeFrom(tonic));
        const detectedChord = Chord.get(Chord.detect(notes)[0]);
        return detectedChord;
    }

    return (
        <div>
            <HoldingChordContext.Provider value={inputChordParam} >
                <ChordBtn rootKey={rootKey} chord={detectChordFromIntervals(holdingChord.intervals, holdingChord.tonic)} isToneName={isToneName} setEntryChord={setEntryChord}></ChordBtn>
                <OptBtnSet opts={opts}></OptBtnSet>
                <div>
                    <ChordBtnSet chords={rootKey.chords}></ChordBtnSet>
                </div>
                <KeySelector rootKey={rootKey} isMajKey={isMajKey} setRootKey={setRootKey} setIsMajKey={setIsMajKey}></KeySelector>
                <ToneAndDegSwitch rootKey={rootKey} isToneName={isToneName} setIsToneName={setIsToneName}  ></ToneAndDegSwitch>
                <div>
                    <NoteBtnSet tones={rootKey.scale}></NoteBtnSet>
                </div>
            </HoldingChordContext.Provider>
        </div >
    )
}

export default InputChordSet;