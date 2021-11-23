import React from 'react';
import { ButtonBase } from '@mui/material';
import { Progression } from "@tonaljs/tonal";

/**
 * @abstract コードを表示するボタン
 * @param {{ rootKey:,chord:,isToneName:boolean, onClick:Function, onDoubleClick:Function}} args
 */
const ChordBtn = ({ rootKey, chord, isToneName, onClick, onDoubleClick }) => {

    return (
        <>
            {!chord.empty ?
                <ButtonBase variant="contained" color="primary" onClick={onClick} onDoubleClick={onDoubleClick}>
                    {isToneName ?
                        chord.symbol
                        :
                        Progression.toRomanNumerals(rootKey.tonic, [chord.symbol])[0]
                    }
                </ButtonBase>
                :
                <ButtonBase variant="contained" color="primary" onClick={onClick} onDoubleClick={onDoubleClick}>
                    ?
                </ButtonBase>
            }
        </>
    )

}

export default ChordBtn;