import React, { useEffect } from 'react';
import Button from '@mui/material/Button';

const NoteBtn = ({ note }) => {

    const _onClick = () => {
        console.log("clicked : " + note);
    }

    const _onDblClick = () => {
        console.log("double clicked : " + note);
    }

    return (
        <>
            <Button variant="contained" color="primary" onClick={_onClick} onDoubleClick={_onDblClick}>
                {note}
            </Button>
        </>
    )

}

export default NoteBtn;