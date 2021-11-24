import React, { useContext } from "react";
import { OptBtn } from "../atoms"
import { Stack, Grid } from "@mui/material";
import { Note, Chord, ChordType } from "@tonaljs/tonal";
import { HoldingChordContext } from "../organisms/InputChordSet";

/**
 * 
 * @param {{opts:Array<String>}} args 
 * @returns 
 */
function IntervalBtnSet({ }) {

    const inputChordParam = useContext(HoldingChordContext);

    const opts = ["1P", "2M", "3m", "3M", "4P", "5d", "5P", "5A", "6m", "6M", "7m", "7M", "9m", "9M", "9A", "11P", "11A", "13m", "13M"];

    const showLog = () => {
        console.log(ChordType.all().map(get => get.intervals));
    }

    const row1 = opts.slice(1, 5);
    const row2 = opts.slice(5, 12);
    const row3 = opts.slice(12, 19);


    return (
        <div>
            <button onClick={showLog}>
                log
            </button>
            <Grid container>
                <Grid container>
                    {row1.map((opt, idx) => {
                        return (
                            <Grid item>
                                <OptBtn
                                    opt={opt}
                                    holdingChord={inputChordParam.holdingChord}
                                    setHoldingChord={inputChordParam.setHoldingChord}
                                    key={idx}>

                                </OptBtn>
                            </Grid>
                        )
                    })}
                </Grid>
                <Grid container>
                    {row2.map((opt, idx) => {
                        return (
                            <Grid item>
                                <OptBtn
                                    opt={opt}
                                    holdingChord={inputChordParam.holdingChord}
                                    setHoldingChord={inputChordParam.setHoldingChord}
                                    key={idx}>

                                </OptBtn>
                            </Grid>
                        )
                    })}
                </Grid>
                <Grid container>
                    {row3.map((opt, idx) => {
                        return (
                            <Grid item>
                                <OptBtn
                                    opt={opt}
                                    holdingChord={inputChordParam.holdingChord}
                                    setHoldingChord={inputChordParam.setHoldingChord}
                                    key={idx}>

                                </OptBtn>
                            </Grid>
                        )
                    })}
                </Grid>
            </Grid>
        </div>
    )
}

export default IntervalBtnSet
