import React, { useEffect } from 'react';
import Button from '@mui/material/Button';

const NoteBtn = ({ note, isToneName, grade }) => {

    const _onClick = () => {
        console.log("clicked > " + note.name, note);
    }

    const _onDblClick = () => {
        console.log("double clicked > " + note.name, note);
    }

    return (
        <>
            <Button variant="contained" color="primary" onClick={_onClick} onDoubleClick={_onDblClick}>
                {isToneName ?
                    note.name
                    :
                    grade
                }
            </Button>
        </>
    )

}

export default NoteBtn;