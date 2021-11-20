import React from 'react';
import NativeSelect from "@mui/material/NativeSelect";
import InputLabel from "@mui/material/InputLabel";
import { Key } from "@tonaljs/tonal";

/**
 * キーを選択するボタン
 * @param {*} param0 
 * @returns 
 */
const TonicSelector = ({ rootKey, setRootKey, isMajKey }) => {

    const _onChange = (event) => {
        isMajKey ?
            setRootKey(Key.majorKey(event.target.value))
            :
            setRootKey(Key.minorKey(event.target.value).natural)
    };

    return (
        <>
            <InputLabel>Key</InputLabel>
            <NativeSelect
                defaultValue={rootKey}
                onChange={_onChange}
            >
                <option value={"C"}>C</option>
                <option value={"Db"}>D♭</option>
                <option value={"D"}>D</option>
                <option value={"Eb"}>E♭</option>
                <option value={"E"}>E</option>
                <option value={"F"}>F</option>
                <option value={"F#"}>F♯</option>
                <option value={"G"}>G</option>
                <option value={"Ab"}>A♭</option>
                <option value={"A"}>A</option>
                <option value={"Bb"}>B♭</option>
                <option value={"B"}>B</option>
            </NativeSelect >
        </>
    )
}

export default TonicSelector;