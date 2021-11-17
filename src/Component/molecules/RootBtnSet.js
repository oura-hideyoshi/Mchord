import { NoteBtn } from "../atoms/index";

const RootBtnSet = ({ isToneName, rootKey }) => {
    return (
        <>
            {isToneName ?
                rootKey.scale.map((e) => (
                    <NoteBtn note={e}></NoteBtn>
                ))
                :
                rootKey.grades.map((e) => (
                    <NoteBtn note={e}></NoteBtn>
                ))
            }
        </>
    )
}

export default RootBtnSet;