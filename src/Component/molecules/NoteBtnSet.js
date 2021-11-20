import { NoteBtn } from "../atoms/index";
import { Note } from "@tonaljs/tonal";

const RootBtnSet = ({ isToneName, rootKey }) => {
    return (
        <>
            {
                rootKey.scale.map((e) => (
                    <NoteBtn rootKey={rootKey} note={Note.get(e)} isToneName={isToneName}></NoteBtn>
                ))
            }
        </>
    )
}

export default RootBtnSet;