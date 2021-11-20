import { OptBtn } from "../atoms"
import { Stack } from "@mui/material";
import { Note, Chord, ChordType } from "@tonaljs/tonal";

function OptBtnSet({ holdingChord, setHoldingChord }) {

    const optList = ["2m", "2M", "3m", "3M", "4p", "5d", "5P", "6m", "6M", "7m", "7M", "9m", "9M", "9A", "11m", "11M", "13M"];

    const showLog = () => {
        console.log(holdingChord);
    }

    return (
        <div>
            <button onClick={showLog}>
                log
            </button>
            <Stack direction="row" spacing={1} alignItems="center">
                {optList.map((opt, idx) => <OptBtn opt={opt} holdingChord={holdingChord} setHoldingChord={setHoldingChord} key={idx}></OptBtn>)}
            </Stack>
        </div>
    )
}

export default OptBtnSet
