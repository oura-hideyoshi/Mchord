import React, { useEffect } from 'react';
import Button from '@mui/material/Button';

const ChordBtn = ({ chord }) => {

    const _onClick = () => {
        console.log("clicked : " + chord);
    }

    const _onDblClick = () => {
        console.log("double clicked : " + chord);
    }

    return (
        <>
            <Button variant="contained" color="primary" onClick={_onClick} onDoubleClick={_onDblClick}>
                {chord}
            </Button>
        </>
    )

}

export default ChordBtn;