import { NoteBtn } from "../atoms/index";
import { Note, Chord } from "@tonaljs/tonal";

const RootBtnSet = ({ isToneName, rootKey, holdingChord, setHoldingChord, setEntryChord }) => {


    const changeTonic = (note) => {
        // コードのtonicを書き換え
        setHoldingChord({ intervals: holdingChord.intervals, tonic: note.name });
    }

    const setEntryChordFromNote = (note) => {
        const chord = Chord.get(note.name);
        setEntryChord(chord);
    }

    return (
        <>
            {
                rootKey.scale.map((e, idx) => (
                    <NoteBtn rootKey={rootKey} note={Note.get(e)} isToneName={isToneName} changeTonic={changeTonic} setEntryChordFromNote={setEntryChordFromNote} key={idx}></NoteBtn>
                ))
            }
        </>
    )
}

export default RootBtnSet;