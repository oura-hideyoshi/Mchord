import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button'

const CodeBtn = ({ initName }) => {
    const [root, setRoot] = useState(initName);

    const _onClick = () => {
        console.log("clicked : " + root);
    }

    const _onDblClick = () => {
        console.log("double clicked : " + root);
    }

    return (
        <Button variant="contained" color="primary" onClick={_onClick} onDoubleClick={_onDblClick}>
            {root}
        </Button>
    )
}

export default CodeBtn;