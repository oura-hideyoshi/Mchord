import React, { useState } from 'react';
import { NoteBtn, KeySelector, ToneAndDegSwitch } from "../atoms/index";
import { Note, Key, Tonal } from "@tonaljs/tonal";

const RootBtnSet = () => {
    const initialKey = Key.majorKey("Cb");
    const [rootKey, setRootKey] = useState(initialKey);
    const [isToneName, setIsToneName] = useState(true);

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
            <KeySelector initialKey={initialKey} rootKey={rootKey} setRootKey={setRootKey}></KeySelector>
            <ToneAndDegSwitch isToneName={isToneName} setIsToneName={setIsToneName}></ToneAndDegSwitch>
        </div >
    )
}

export default RootBtnSet;