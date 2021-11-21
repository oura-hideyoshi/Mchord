import { ButtonBase } from '@mui/material';
import { useState } from 'react';
import { Chord, Interval } from "@tonaljs/tonal";

const DisplayChord = ({ chordList }) => {

    const showLog = () => {
        console.log(chordList);
    }

    const toText = () => {
        let text = "";
        for (var idx in chordList){
            text += chordList[idx].symbol + " | ";
        }
        console.log(text);
    }


    return (
        <>
            <button onClick={showLog}>LOG</button>
            <button onClick={toText}>TXT</button>
            {chordList.map((chord, idx) => {
                return (<ButtonBase key={idx}>{chord.symbol}</ButtonBase>)
            })}
        </>
    )
}
export default DisplayChord;