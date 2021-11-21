import React from 'react';
import { ButtonBase } from '@mui/material';
import { Progression } from "@tonaljs/tonal";

/**
 * コードを表示するボタン
 * @param {{rootKey:,chord:,isToneName:boolean}}
 */
const ChordBtn = ({ rootKey, chord, isToneName, changeChord, setEntryChord }) => {

    const _onClick = () => {
        if (changeChord != null)
            changeChord(chord);
    }

    const _onDblClick = () => {
        if (setEntryChord != null) {
            setEntryChord(chord);
        }
    }

    return (
        <>
            {!chord.empty ?
                <ButtonBase variant="contained" color="primary" onClick={_onClick} onDoubleClick={_onDblClick}>
                    {isToneName ?
                        chord.symbol
                        :
                        Progression.toRomanNumerals(rootKey.tonic, [chord.symbol])[0]
                    }
                </ButtonBase>
                :
                <ButtonBase variant="contained" color="primary" onClick={_onClick}>
                    ?
                </ButtonBase>
            }
        </>
    )

}

export default ChordBtn;