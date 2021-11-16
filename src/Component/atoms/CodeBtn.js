import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button'

const CodeBtn = ({ rootKey, relDeg }) => {

    const dic = {
        1: "C",
        2: "C♯",
        3: "D",
        4: "D♯",
        5: "E",
        6: "F",
        7: "F♯",
        8: "G",
        9: "G♯",
        10: "A",
        11: "A♯",
        12: "B",
    }

    const deg2Tone = (_rootKey, _relDeg) => {
        const absDeg = 1 + (parseInt(_rootKey) + parseInt(_relDeg) - 1) % 12; // 入力を1~12に抑える
        return dic[absDeg];
    }

    const [rootTone, setRootTone] = useState(deg2Tone(rootKey, relDeg));

    /**
     * rootToneに変更があったとき実行される
     */
    useEffect(() => {
        setRootTone(deg2Tone(rootKey, relDeg));
    }, [rootKey])

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