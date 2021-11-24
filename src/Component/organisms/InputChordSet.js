import React, { useState, useEffect, createContext } from 'react';
import { ToneAndDegSwitch, ChordBtn, KeySelector } from "../atoms/index";
import { NoteBtnSet, ChordBtnSet, IntervalBtnSet, ChordTypeBtnSet } from "../molecules/index";
import { Key, Note, Chord } from "@tonaljs/tonal";
import { Grid } from '@mui/material';

export const HoldingChordContext = createContext();

/**
 * コードの入力を楽に行うのを目的としたコンポーネント
 * handleEntry このコンポーネントからコードがアウトプットする際、handleEntry(chord)が実行される
 * @param {{handleEntry:Function}} args
 * @returns 
 */
const InputChordSet = ({ handleEntry }) => {
    const initialKey = Key.majorKey("C");
    const [rootKey, setRootKey] = useState(initialKey);
    const [isToneName, setIsToneName] = useState(true);
    const [isMajKey, setIsMajKey] = useState(true);
    const initialChord = Chord.get(initialKey.chords[0]);
    const [holdingChord, setHoldingChord] = useState({ intervals: initialChord.intervals, tonic: initialKey.tonic, root: "" })
    const inputChordParam = {
        holdingChord: holdingChord,
        setHoldingChord: setHoldingChord,
        rootKey: rootKey,
        setRootKey: setRootKey,
        isMajKey: isMajKey,
        setIsMajKey: setIsMajKey,
        isToneName: isToneName,
        setIsToneName: setIsToneName,
        setEntryChord: handleEntry
    };

    // debug
    useEffect(() => {
        console.log("rootKey >", rootKey);
    }, [rootKey])

    const detectChordFromIntervals = (intervals, tonic) => {
        const notes = intervals.map(Note.transposeFrom(tonic));
        const detectedChord = Chord.get(Chord.detect(notes)[0]);
        return detectedChord;
    }

    const chordTypes = ["M", "m", "sus4"];

    return (
        <div>
            <HoldingChordContext.Provider value={inputChordParam} >
                <Grid container spacing={1}>
                    <Grid item xs={8} md={3} lg={3}>
                        <ChordBtnSet chords={rootKey.chords}></ChordBtnSet>
                    </Grid>
                    <Grid item xs={8} md={5} lg={5}>
                        <Grid container>
                            <Grid item>
                                <ChordTypeBtnSet chordTypes={chordTypes}></ChordTypeBtnSet>
                            </Grid>
                            <Grid item>
                                <ChordBtn
                                    rootKey={rootKey}
                                    chord={detectChordFromIntervals(holdingChord.intervals, holdingChord.tonic)}
                                    isToneName={isToneName}
                                    onClick={() => handleEntry(detectChordFromIntervals(holdingChord.intervals, holdingChord.tonic))}
                                >
                                </ChordBtn>
                                <button onClick={() => console.log(inputChordParam)}>log</button>
                            </Grid>
                        </Grid>
                        <Grid continer>
                            <NoteBtnSet tones={rootKey.scale}></NoteBtnSet>
                            <KeySelector rootKey={rootKey} isMajKey={isMajKey} setRootKey={setRootKey} setIsMajKey={setIsMajKey}></KeySelector>
                            <ToneAndDegSwitch rootKey={rootKey} isToneName={isToneName} setIsToneName={setIsToneName}  ></ToneAndDegSwitch>
                        </Grid>
                    </Grid>
                    <Grid item xs={8} md={4} lg={4}>
                        <IntervalBtnSet ></IntervalBtnSet>
                    </Grid>
                </Grid>
            </HoldingChordContext.Provider>
        </div >
    )
}

export default InputChordSet;