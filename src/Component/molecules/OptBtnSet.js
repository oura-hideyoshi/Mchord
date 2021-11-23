import { useContext } from "react";
import { OptBtn } from "../atoms"
import { Stack } from "@mui/material";
import { Note, Chord, ChordType } from "@tonaljs/tonal";
import { HoldingChordContext } from "../organisms/InputChordSet";

/**
 * 
 * @param {{opts:Array<String>}} args 
 * @returns 
 */
function OptBtnSet({ opts }) {

    const inputChordParam = useContext(HoldingChordContext);

    const showLog = () => {
        console.log(ChordType.all().map(get => get.intervals));
    }

    return (
        <div>
            <button onClick={showLog}>
                log
            </button>
            <Stack direction="row" spacing={0} alignItems="center">
                {opts.map((opt, idx) => <OptBtn opt={opt} holdingChord={inputChordParam.holdingChord} setHoldingChord={inputChordParam.setHoldingChord} key={idx}></OptBtn>)}
            </Stack>
        </div>
    )
}

export default OptBtnSet
