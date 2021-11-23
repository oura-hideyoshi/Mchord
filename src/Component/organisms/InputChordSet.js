import { useState, useEffect, createContext } from 'react';
import { ToneAndDegSwitch, ChordBtn, KeySelector } from "../atoms/index";
import { NoteBtnSet, ChordBtnSet, OptBtnSet } from "../molecules/index";
import { Key, Note, Chord } from "@tonaljs/tonal";
import { Grid } from '@mui/material';

export const HoldingChordContext = createContext();

const InputChordSet = ({ setEntryChord }) => {
    const initialKey = Key.majorKey("C");
    const [rootKey, setRootKey] = useState(initialKey);
    const [isToneName, setIsToneName] = useState(true);
    const [isMajKey, setIsMajKey] = useState(true);
    const initialChord = Chord.get(initialKey.chords[0]);
    const [holdingChord, setHoldingChord] = useState({ intervals: initialChord.intervals, tonic: initialKey.tonic })
    const inputChordParam = {
        holdingChord: holdingChord,
        setHoldingChord: setHoldingChord,
        rootKey: rootKey,
        setRootKey: setRootKey,
        isMajKey: isMajKey,
        setIsMajKey: setIsMajKey,
        isToneName: isToneName,
        setIsToneName: setIsToneName
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

    return (
        <div>
            <HoldingChordContext.Provider value={inputChordParam} >
                <Grid container spacing={1}>
                    <Grid item xs={8} md={3} lg={3}>
                        <ChordBtnSet chords={rootKey.chords}></ChordBtnSet>
                    </Grid>
                    <Grid item xs={8} md={5} lg={5}>
                        <ChordBtn rootKey={rootKey} chord={detectChordFromIntervals(holdingChord.intervals, holdingChord.tonic)} isToneName={isToneName} setEntryChord={setEntryChord}></ChordBtn>
                        <button onClick={() => console.log(holdingChord)}>log</button>
                        <Grid continer>
                            <NoteBtnSet tones={rootKey.scale}></NoteBtnSet>
                            <KeySelector rootKey={rootKey} isMajKey={isMajKey} setRootKey={setRootKey} setIsMajKey={setIsMajKey}></KeySelector>
                            <ToneAndDegSwitch rootKey={rootKey} isToneName={isToneName} setIsToneName={setIsToneName}  ></ToneAndDegSwitch>
                        </Grid>
                    </Grid>
                    <Grid item xs={8} md={4} lg={4}>
                        <OptBtnSet ></OptBtnSet>
                    </Grid>
                </Grid>
            </HoldingChordContext.Provider>
        </div >
    )
}

export default InputChordSet;