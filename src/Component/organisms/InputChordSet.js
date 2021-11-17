import React, { useState, useEffect } from 'react';
import { KeySelector, ToneAndDegSwitch, MajAndMinSwitch } from "../atoms/index";
import { NoteBtnSet, ChordBtnSet } from "../molecules/index";
import { Note, Key, Tonal, Chord } from "@tonaljs/tonal";

const InputChordSet = () => {
    const initialKey = Key.majorKey("C");
    const [rootKey, setRootKey] = useState(initialKey);
    const [isToneName, setIsToneName] = useState(true);
    const [isMajKey, setIsMajKey] = useState(true);
    console.log(Note.get("C"));

    // debug
    useEffect(() => {
        console.log("rootKey >", rootKey);
    }, [rootKey])

    return (
        <div>
            <div>
                <ChordBtnSet isToneName={isToneName} rootKey={rootKey}></ChordBtnSet>
            </div>
            <KeySelector initialKey={initialKey} rootKey={rootKey} setRootKey={setRootKey} isMajKey={isMajKey}></KeySelector>
            <ToneAndDegSwitch isToneName={isToneName} setIsToneName={setIsToneName} ></ToneAndDegSwitch>
            <MajAndMinSwitch isMajKey={isMajKey} setIsMajKey={setIsMajKey} rootKey={rootKey} setRootKey={setRootKey}></MajAndMinSwitch>
            <div>
                <NoteBtnSet rootKey={rootKey} isToneName={isToneName}></NoteBtnSet>
            </div>
        </div >
    )
}

export default InputChordSet;