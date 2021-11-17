import { ChordBtn } from "../atoms/index";
import { Chord } from "@tonaljs/tonal";

const ChordBtnSet = ({ isToneName, rootKey }) => {
    return (
        <>
            {
                rootKey.chords.map((e, idx) => (
                    <ChordBtn chord={Chord.get(e)} isToneName={isToneName} grade={rootKey.grades[idx]}></ChordBtn>
                ))
            }
        </>
    )
}

export default ChordBtnSet;