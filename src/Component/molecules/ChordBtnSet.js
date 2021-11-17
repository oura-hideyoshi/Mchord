import { ChordBtn } from "../atoms/index";

const ChordBtnSet = ({ isToneName, rootKey }) => {
    return (
        <>
            {isToneName ?
                rootKey.chords.map((e) => (
                    <ChordBtn chord={e}></ChordBtn>
                ))
                : (
                    rootKey.grades.map((e, idx) =>
                    (
                        <ChordBtn chord={rootKey.chords[idx].replace(rootKey.scale[idx], e)}></ChordBtn>
                    )
                    ))
            }
        </>
    )
}

export default ChordBtnSet;