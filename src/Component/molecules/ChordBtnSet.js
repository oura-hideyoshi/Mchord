import { ChordBtn } from "../atoms/index";
import { Chord } from "@tonaljs/tonal";

const ChordBtnSet = ({ isToneName, rootKey, setHoldingChord }) => {

    const changeChord = (chord) =>{
        setHoldingChord(chord);
    }
    return (
        <>
            {
                rootKey.chords.map((e) => (
                    <ChordBtn rootKey={rootKey} chord={Chord.get(e)} isToneName={isToneName} changeChord={changeChord}></ChordBtn>
                ))
            }
        </>
    )
}

export default ChordBtnSet;