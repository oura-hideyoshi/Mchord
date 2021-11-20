import { ChordBtn } from "../atoms/index";
import { Chord } from "@tonaljs/tonal";

const ChordBtnSet = ({ isToneName, rootKey, setHoldingChord, setEntryChord }) => {

    const changeChord = (chord) => {
        setHoldingChord({ intervals: chord.intervals, tonic: chord.tonic });
    }
    return (
        <>
            {
                rootKey.chords.map((e, idx) => (
                    <ChordBtn rootKey={rootKey} chord={Chord.get(e)} isToneName={isToneName} changeChord={changeChord} setEntryChord={setEntryChord} key={idx}></ChordBtn>
                ))
            }
        </>
    )
}

export default ChordBtnSet;