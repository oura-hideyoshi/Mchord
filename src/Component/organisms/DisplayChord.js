import { ButtonBase } from '@mui/material';
import { useState } from 'react';
import { Chord, Interval } from "@tonaljs/tonal";

const DisplayChord = ({ chordList }) => {

    const showLog = () => {
        console.log(chordList);
    }


    return (
        <>
            <button onClick={showLog}>LOG</button>
            {chordList.map((chord, idx) => {
                return (<ButtonBase key={idx}>{chord.symbol}</ButtonBase>)
            })}
        </>
    )
}
export default DisplayChord;