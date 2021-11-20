import { useState, useEffect } from 'react';
import { KeySelector, ToneAndDegSwitch, MajAndMinSwitch, ChordBtn } from "../atoms/index";
import { NoteBtnSet, ChordBtnSet, ChordHoldingBtn } from "../molecules/index";
import { Note, Key, Chord } from "@tonaljs/tonal";
import { Stack } from '@mui/material';

const InputChordSet = () => {
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
            <ChordBtn rootKey={rootKey} chord={holdingChord} isToneName={isToneName}></ChordBtn>
            <div>
                <ChordBtnSet rootKey={rootKey} isToneName={isToneName} setHoldingChord={setHoldingChord}></ChordBtnSet>
            </div>
            <KeySelector rootKey={rootKey} rootKey={initialKey} setRootKey={setRootKey} isMajKey={isMajKey}></KeySelector>
            <MajAndMinSwitch rootKey={rootKey} isMajKey={isMajKey} setIsMajKey={setIsMajKey} setRootKey={setRootKey}></MajAndMinSwitch>
            <ToneAndDegSwitch rootKey={rootKey} isToneName={isToneName} setIsToneName={setIsToneName}  ></ToneAndDegSwitch>
            <div>
                <NoteBtnSet rootKey={rootKey} isToneName={isToneName} holdingChord={holdingChord} setHoldingChord={setHoldingChord}></NoteBtnSet>
            </div>
        </div >
    )
}

export default InputChordSet;