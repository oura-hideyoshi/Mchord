import React, { useState } from 'react';
import { NativeSelect, InputLabel } from "@material-ui/core";

const KeySelector = ({ initialKey, rootKey, setRootKey }) => {
    // const [key, setKey] = useState(initialKey);

    const _onChange = (event) => {
        setRootKey(event.target.value);
        console.log(rootKey);
    };

    return (
        <>
            <InputLabel>Key</InputLabel>
            <NativeSelect
                defaultValue={initialKey}
                onChange={_onChange}
            >
                <option value={1}>C</option>
                <option value={2}>C♯ / D♭</option>
                <option value={3}>D</option>
                <option value={4}>D♯ / E♭</option>
                <option value={5}>E</option>
                <option value={6}>F</option>
                <option value={7}>F♯ / G♭</option>
                <option value={8}>G</option>
                <option value={9}>G♯ / A♭</option>
                <option value={10}>A</option>
                <option value={11}>A♯ /B♭</option>
                <option value={12}>B</option>
            </NativeSelect >
        </>
    )
}

export default KeySelector;