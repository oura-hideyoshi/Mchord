import React, { useEffect } from 'react';
import { ButtonBase } from '@mui/material';

/**
 * コードを表示するボタン
 * @param {*}} param0 
 * @returns 
 */
const ChordBtn = ({ chord, isToneName, grade }) => {

    const _onClick = () => {
        console.log("clicked > " + chord.symbol + grade, chord);
    }

    const _onDblClick = () => {
        console.log("double clicked > " + chord.symbol, chord);
    }

    return (
        <>
            <ButtonBase variant="contained" color="primary" onClick={_onClick} onDoubleClick={_onDblClick}>
                {
                    isToneName ?
                        chord.symbol
                        :
                        chord.symbol.replace(chord.tonic, grade)
                }
            </ButtonBase>
        </>
    )

}

export default ChordBtn;