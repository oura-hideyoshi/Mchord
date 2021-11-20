import { ChordBtn } from "../atoms/index";
import { Chord } from "@tonaljs/tonal";

const ChordBtnSet = ({ isToneName, rootKey }) => {
    return (
        <>
            {
                rootKey.chords.map((e) => (
                    <ChordBtn rootKey={rootKey} chord={Chord.get(e)} isToneName={isToneName}></ChordBtn>
                ))
            }
        </>
    )
}

export default ChordBtnSet;