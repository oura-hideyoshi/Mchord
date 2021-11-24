import React from 'react';
import { Key } from "@tonaljs/tonal";

/**
 * メジャーとマイナーを切り替えるボタン
 * @param {*} param0 
 * @returns 
 */
const MajAndMinSwitch = ({ isMajKey, setIsMajKey, rootKey, setRootKey }) => {

    const _onClick = (event) => {
        const oldIsMajKey = isMajKey;
        setIsMajKey(!oldIsMajKey);
        !oldIsMajKey ?
            setRootKey(Key.majorKey(rootKey.tonic))
            :
            setRootKey(Key.minorKey(rootKey.tonic).natural)
    }

    return (
        <button onClick={_onClick}>
            {isMajKey ? "maj" : "min"}
        </button>
    )
}

export default MajAndMinSwitch;