import React, { useContext } from "react";
import { ChordBtn } from "../atoms/index";
import { Chord } from "@tonaljs/tonal";
import { HoldingChordContext } from "../organisms/InputChordSet";
import { Grid } from "@mui/material";

/**
 * @abstract コードのボタンの集合体. ターゲットのコードを変更する. rootKeyの
 * @param {{chords:Array<string>}} args 
 * @returns inputChordParam
 */
const ChordBtnSet = ({ chords }) => {

    const inputChordParam = useContext(HoldingChordContext);

    if (7 < chords.length) {
        throw "7つ以下にしないとだめ"
    }

    const changeChord = (chord) => {
        inputChordParam.setHoldingChord({ intervals: chord.intervals, tonic: chord.tonic });
    }
    return (
        <>
            <Grid container>
                {
                    chords.slice(0, 4).map((e, idx) => {
                        const chord = Chord.get(e);
                        return (
                            <Grid item>
                                <ChordBtn
                                    rootKey={inputChordParam.rootKey}
                                    chord={chord}
                                    isToneName={inputChordParam.isToneName}
                                    onClick={() => changeChord(chord)}
                                    key={idx}>
                                </ChordBtn>
                            </Grid>
                        )
                    })
                }
            </Grid>
            <Grid container>
                {
                    chords.slice(4, 8).map((e, idx) => {
                        const chord = Chord.get(e);
                        return (
                            <Grid item>
                                <ChordBtn
                                    rootKey={inputChordParam.rootKey}
                                    chord={chord}
                                    isToneName={inputChordParam.isToneName}
                                    onClick={() => changeChord(chord)}
                                    key={idx}>
                                </ChordBtn>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </>
    )
}

export default ChordBtnSet;