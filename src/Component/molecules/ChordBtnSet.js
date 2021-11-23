import { useContext } from "react";
import { ChordBtn } from "../atoms/index";
import { Chord } from "@tonaljs/tonal";
import { HoldingChordContext } from "../organisms/InputChordSet";

/**
 * @abstract コードのボタンの集合体. ターゲットのコードを変更する. rootKeyの
 * @param {{chords:Array<string>}} args 
 * @returns inputChordParam
 */
const ChordBtnSet = ({ chords }) => {

    const inputChordParam = useContext(HoldingChordContext);

    const changeChord = (chord) => {
        inputChordParam.setHoldingChord({ intervals: chord.intervals, tonic: chord.tonic });
    }
    return (
        <>
            {
                chords.map((e, idx) => {
                    const chord = Chord.get(e);
                    return (<ChordBtn rootKey={inputChordParam.rootKey} chord={chord} isToneName={inputChordParam.isToneName} onClick={() => changeChord(chord)} key={idx}></ChordBtn>)
                })
            }
        </>
    )
}

export default ChordBtnSet;