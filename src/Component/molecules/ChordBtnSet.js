import { ChordBtn } from "../atoms/index";

const ChordBtnSet = ({ isToneName, rootKey, isMajKey }) => {
    return (
        <>
            {isToneName ?
                rootKey.chords.map((e) => (
                    <ChordBtn chord={e}></ChordBtn>
                ))
                :
                rootKey.grades.map((e) => (
                    <ChordBtn chord={e}></ChordBtn>
                ))
            }
        </>
    )
}

export default ChordBtnSet;