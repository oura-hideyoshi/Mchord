import { NoteBtn } from "../atoms/index";
import { Note, Chord } from "@tonaljs/tonal";

const RootBtnSet = ({ isToneName, rootKey, holdingChord, setHoldingChord }) => {


    const changeTonic = (note) => {
        // コードのtonicを書き換え
        const chordSymbol = holdingChord.symbol.replace(holdingChord.tonic, note.name);
        setHoldingChord(Chord.get(chordSymbol));
    }

    return (
        <>
            {
                rootKey.scale.map((e) => (
                    <NoteBtn rootKey={rootKey} note={Note.get(e)} isToneName={isToneName} changeTonic={changeTonic}></NoteBtn>
                ))
            }
        </>
    )
}

export default RootBtnSet;