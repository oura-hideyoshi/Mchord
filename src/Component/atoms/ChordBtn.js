import React, { useEffect } from 'react';
import Button from '@mui/material/Button';

const ChordBtn = ({ chord, isToneName, grade }) => {

    const _onClick = () => {
        console.log("clicked > " + chord.symbol + grade, chord);
    }

    const _onDblClick = () => {
        console.log("double clicked > " + chord.symbol, chord);
    }

    return (
        <>
            <Button variant="contained" color="primary" onClick={_onClick} onDoubleClick={_onDblClick}>
                {
                    isToneName ?
                        chord.symbol
                        :
                        chord.symbol.replace(chord.tonic, grade)
                }
            </Button>
        </>
    )

}

export default ChordBtn;