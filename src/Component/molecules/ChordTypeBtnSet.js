import React, { useContext } from 'react'
import { ChordTypeBtn } from "../atoms/index"
import { HoldingChordContext } from "../organisms/InputChordSet";
import { Grid } from "@mui/material"
import { ChordType } from "@tonaljs/tonal"

function ChordTypeBtnSet({ chordTypes }) {

    const inputChordParam = useContext(HoldingChordContext);
    const changeChordType = (chordType) => {
        inputChordParam.setHoldingChord(
            {
                intervals: ChordType.get(chordType).intervals,
                tonic: inputChordParam.holdingChord.tonic,
                root: inputChordParam.holdingChord.root,
            }
        );
    }

    return (
        <Grid container>
            {chordTypes.map((chordType, idx) =>
                <Grid item key={idx}>
                    <ChordTypeBtn chordType={chordType} onClick={() => changeChordType(chordType)}></ChordTypeBtn>
                </Grid>
            )
            }
        </Grid>
    )
}

export default ChordTypeBtnSet

