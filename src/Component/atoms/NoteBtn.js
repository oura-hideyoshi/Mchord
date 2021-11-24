import React from 'react';
import { ButtonBase } from '@mui/material';
import { Progression } from "@tonaljs/tonal";

/**
 * 単音を表示するボタン
 * @param {*} param0 
 * @returns 
 */
const NoteBtn = ({ rootKey, note, isToneName, onClick, onDoubleClick }) => {

    const _onClick = () => {
        if (onClick != null) {
            onClick(note);
        }
    }

    const _onDblClick = () => {
        onDoubleClick(note);
    }

    return (
        <>
            <ButtonBase variant="contained" color="primary" onClick={_onClick} onDoubleClick={_onDblClick}>
                {isToneName ?
                    note.name
                    :
                    Progression.toRomanNumerals(rootKey.tonic, [note.name])[0]
                }
            </ButtonBase>
        </>
    )

}

export default NoteBtn;