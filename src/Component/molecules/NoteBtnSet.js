import React, { useContext } from "react";
import { NoteBtn } from "../atoms/index";
import { Note, Chord } from "@tonaljs/tonal";
import { HoldingChordContext } from "../organisms/InputChordSet";
import { Grid } from "@mui/material";

/**
 * 
 * @param {{tones:Array<String>}} args 
 * @returns 
 */
const RootBtnSet = ({ tones }) => {

    const inputChordParam = useContext(HoldingChordContext);

    const changeTonic = (note) => {
        // コードのtonicを書き換え
        inputChordParam.setHoldingChord({ intervals: inputChordParam.holdingChord.intervals, tonic: note.name });
    }

    const setEntryChordFromNote = (note) => {
        const chord = Chord.get(note.name);
        // setEntryChord(chord);
    }

    return (
        <>
            <Grid container>
                {
                    tones.map((e, idx) => (
                        <Grid item>
                            <NoteBtn
                                rootKey={inputChordParam.rootKey}
                                note={Note.get(e)}
                                isToneName={inputChordParam.isToneName}
                                onClick={changeTonic}
                                onDoubleClick={setEntryChordFromNote}
                                key={idx}>
                            </NoteBtn>
                        </Grid>
                    ))
                }
            </Grid>
        </>
    )
}

export default RootBtnSet;