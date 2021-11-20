import React from 'react';
import { ButtonBase } from '@mui/material';
import { Progression } from "@tonaljs/tonal";

/**
 * コードを表示するボタン
 * @param {{rootKey:,chord:,isToneName:boolean}}
 */
const ChordBtn = ({ rootKey, chord, isToneName, changeChord }) => {

    const _onClick = () => {
        console.log("clicked > " + chord.symbol, Progression.toRomanNumerals(rootKey.tonic, [chord.symbol])[0], chord);
        if(changeChord!=null)
            changeChord(chord);
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
                        Progression.toRomanNumerals(rootKey.tonic, [chord.symbol])[0]
                }
            </ButtonBase>
        </>
    )

}

export default ChordBtn;