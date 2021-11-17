import { NoteBtn } from "../atoms/index";
import { Note } from "@tonaljs/tonal";

const RootBtnSet = ({ isToneName, rootKey }) => {
    return (
        <>
            {
                rootKey.scale.map((e, idx) => (
                    <NoteBtn note={Note.get(e)} isToneName={isToneName} grade={rootKey.grades[idx]}></NoteBtn>
                ))
            }
        </>
    )
}

export default RootBtnSet;