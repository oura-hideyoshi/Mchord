import { useState, useEffect, createContext } from 'react';
import { ToneAndDegSwitch, ChordBtn } from "../atoms/index";
import { NoteBtnSet, ChordBtnSet, KeySelector, OptBtnSet } from "../molecules/index";
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
                <OptBtnSet holdingChord={holdingChord} setHoldingChord={setHoldingChord}></OptBtnSet>
                <div>
                    <ChordBtnSet chords={rootKey.chords}></ChordBtnSet>
                </div>
                <KeySelector rootKey={rootKey} isMajKey={isMajKey} setRootKey={setRootKey} setIsMajKey={setIsMajKey}></KeySelector>
                <ToneAndDegSwitch rootKey={rootKey} isToneName={isToneName} setIsToneName={setIsToneName}  ></ToneAndDegSwitch>
                <div>
                    <NoteBtnSet rootKey={rootKey} isToneName={isToneName} holdingChord={holdingChord} setHoldingChord={setHoldingChord} setEntryChord={setEntryChord}></NoteBtnSet>
                </div>
            </HoldingChordContext.Provider>
        </div >
    )
}

export default InputChordSet;