import React, { useState, useEffect } from 'react';
import { KeySelector, ToneAndDegSwitch, MajAndMinSwitch } from "../atoms/index";
import { RootBtnSet, ChordBtnSet } from "../molecules/index";
import { Note, Key, Tonal } from "@tonaljs/tonal";

const InputChordSet = () => {
    const initialKey = Key.majorKey("C");
    const [rootKey, setRootKey] = useState(initialKey);
    const [isToneName, setIsToneName] = useState(true);
    const [isMajKey, setIsMajKey] = useState(true);
    // console.log(Key.minorKey("C"))

    // debug
    useEffect(() => {
        console.log("rootKey >", rootKey);
    }, [rootKey])

    return (
        <div>
            <div>
                <ChordBtnSet isToneName={isToneName} rootKey={rootKey} isMajKey={isMajKey}></ChordBtnSet>
            </div>
            <KeySelector initialKey={initialKey} rootKey={rootKey} setRootKey={setRootKey} isMajKey={isMajKey}></KeySelector>
            <ToneAndDegSwitch isToneName={isToneName} setIsToneName={setIsToneName} ></ToneAndDegSwitch>
            <MajAndMinSwitch isMajKey={isMajKey} setIsMajKey={setIsMajKey} rootKey={rootKey} setRootKey={setRootKey}></MajAndMinSwitch>
            <div>
                <RootBtnSet rootKey={rootKey} isToneName={isToneName}></RootBtnSet>
            </div>
        </div >
    )
}

export default InputChordSet;