import React from 'react';
import NativeSelect from "@mui/material/NativeSelect";
import InputLabel from "@mui/material/InputLabel";
import { Note, Key, Tonal } from "@tonaljs/tonal";


const KeySelector = ({ initialKey, rootKey, setRootKey }) => {

    const _onChange = (event) => {
        setRootKey(Key.majorKey(event.target.value));
        console.log(rootKey);
    };

    return (
        <>
            <InputLabel>Key</InputLabel>
            <NativeSelect
                defaultValue={initialKey}
                onChange={_onChange}
            >
                <option value={"C"}>C</option>
                <option value={"C#"}>C♯ / D♭</option>
                <option value={"D"}>D</option>
                <option value={"D#"}>D♯ / E♭</option>
                <option value={"E"}>E</option>
                <option value={"F"}>F</option>
                <option value={"F#"}>F♯ / G♭</option>
                <option value={"G"}>G</option>
                <option value={"G#"}>G♯ / A♭</option>
                <option value={"A"}>A</option>
                <option value={"A#"}>A♯ /B♭</option>
                <option value={"B"}>B</option>
            </NativeSelect >
        </>
    )
}

export default KeySelector;