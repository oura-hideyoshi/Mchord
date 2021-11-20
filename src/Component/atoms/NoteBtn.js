import { ButtonBase } from '@mui/material';
import { Progression } from "@tonaljs/tonal";

/**
 * 単音を表示するボタン
 * @param {*} param0 
 * @returns 
 */
const NoteBtn = ({ rootKey, note, isToneName, changeTonic, setEntryChordFromNote }) => {

    const _onClick = () => {
        if (changeTonic != null) {
            changeTonic(note);
        }
    }

    const _onDblClick = () => {
        setEntryChordFromNote(note);
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