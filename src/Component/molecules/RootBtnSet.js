import React, { useState, useEffect } from 'react';
import { NoteBtn, KeySelector, ToneAndDegSwitch, MajAndMinSwitch } from "../atoms/index";
import { Note, Key, Tonal } from "@tonaljs/tonal";

const RootBtnSet = () => {
    const initialKey = Key.majorKey("C");
    const [rootKey, setRootKey] = useState(initialKey);
    const [isToneName, setIsToneName] = useState(true);
    const [isMajKey, setIsMajKey] = useState(true);

    // debug
    useEffect(() => {
        console.log("rootKey >", rootKey);
    }, [rootKey])

    return (
        <div>
            <div>
                {isToneName ?
                    rootKey.scale.map((e) => (
                        <NoteBtn note={e}></NoteBtn>
                    ))
                    :
                    rootKey.grades.map((e) => (
                        <NoteBtn note={e}></NoteBtn>
                    ))
                }
            </div>
            <KeySelector initialKey={initialKey} rootKey={rootKey} setRootKey={setRootKey} isMajKey={isMajKey}></KeySelector>
            <ToneAndDegSwitch isToneName={isToneName} setIsToneName={setIsToneName} ></ToneAndDegSwitch>
            <MajAndMinSwitch isMajKey={isMajKey} setIsMajKey={setIsMajKey} rootKey={rootKey} setRootKey={setRootKey}></MajAndMinSwitch>
        </div >
    )
}

export default RootBtnSet;