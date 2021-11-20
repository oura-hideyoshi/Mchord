import { useState, useEffect } from 'react';
import { ToneAndDegSwitch, ChordBtn } from "../atoms/index";
import { NoteBtnSet, ChordBtnSet, KeySelector } from "../molecules/index";
import { Note, Key, Chord } from "@tonaljs/tonal";
import { Stack } from '@mui/material';

const InputChordSet = ({ setEntryChord }) => {
    const initialKey = Key.majorKey("C");
    const [rootKey, setRootKey] = useState(initialKey);
    const [isToneName, setIsToneName] = useState(true);
    const [isMajKey, setIsMajKey] = useState(true);
    const initialChord = Chord.get(initialKey.chords[0]);
    const [holdingChord, setHoldingChord] = useState(initialChord)

    // debug
    useEffect(() => {
        console.log("rootKey >", rootKey);
    }, [rootKey])

    return (
        <div>
            <ChordBtn rootKey={rootKey} chord={holdingChord} isToneName={isToneName} setEntryChord={setEntryChord}></ChordBtn>
            <div>
                <ChordBtnSet rootKey={rootKey} isToneName={isToneName} setHoldingChord={setHoldingChord} setEntryChord={setEntryChord}></ChordBtnSet>
            </div>
            <KeySelector rootKey={rootKey} isMajKey={isMajKey} setRootKey={setRootKey} setIsMajKey={setIsMajKey}></KeySelector>
            <ToneAndDegSwitch rootKey={rootKey} isToneName={isToneName} setIsToneName={setIsToneName}  ></ToneAndDegSwitch>
            <div>
                <NoteBtnSet rootKey={rootKey} isToneName={isToneName} holdingChord={holdingChord} setHoldingChord={setHoldingChord} setEntryChord={setEntryChord}></NoteBtnSet>
            </div>
        </div >
    )
}

export default InputChordSet;