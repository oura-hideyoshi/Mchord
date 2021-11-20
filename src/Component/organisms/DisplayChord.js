import { ButtonBase } from '@mui/material';
import { useState } from 'react';

const DisplayChord = ({ chordList }) => {
    return (
        <>
            {chordList.map((chord) => {
                return(<ButtonBase>{chord.symbol}</ButtonBase>)
            })}
        </>
    )
}
export default DisplayChord;