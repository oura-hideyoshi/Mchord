import { ButtonBase } from '@mui/material';
import { Progression } from "@tonaljs/tonal";

/**
 * 単音を表示するボタン
 * @param {*} param0 
 * @returns 
 */
const NoteBtn = ({ rootKey, note, isToneName }) => {

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
                    Progression.toRomanNumerals(rootKey.tonic, [note.name])[0]
                }
            </ButtonBase>
        </>
    )

}

export default NoteBtn;