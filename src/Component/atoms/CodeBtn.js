import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import { deg2Tone } from '../utils/helper';


const CodeBtn = ({ rootKey, relDeg, isToneName }) => {

    const [rootTone, setRootTone] = useState(deg2Tone(rootKey, relDeg, isToneName));

    /**
     * 特定の変数に変更があったとき実行される
     */
    useEffect(() => {
        setRootTone(deg2Tone(rootKey, relDeg, isToneName));
    }, [rootKey, isToneName])

    const _onClick = () => {
        console.log("clicked : " + rootTone);
    }

    const _onDblClick = () => {
        console.log("double clicked : " + rootTone);
    }

    return (
        <Button variant="contained" color="primary" onClick={_onClick} onDoubleClick={_onDblClick}>
            {rootTone}
        </Button>
    )
}

export default CodeBtn;