import React, { useEffect } from 'react';
import { ButtonBase } from '@mui/material';

const NoteBtn = ({ note, isToneName, grade }) => {

    const _onClick = () => {
        console.log("clicked > " + note.name, note);
    }

    const _onDblClick = () => {
        console.log("double clicked > " + note.name, note);
    }

    return (
        <>
            <ButtonBase variant="contained" color="primary" onClick={_onClick} onDoubleClick={_onDblClick}>
                {isToneName ?
                    note.name
                    :
                    grade
                }
            </ButtonBase>
        </>
    )

}

export default NoteBtn;