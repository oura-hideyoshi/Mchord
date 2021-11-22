import { OptBtn } from "../atoms"
import { Stack } from "@mui/material";
import { Note, Chord, ChordType } from "@tonaljs/tonal";

function OptBtnSet({ holdingChord, setHoldingChord }) {

    const optList = ["2M", "3m", "3M", "4P", "5d", "5P","5A", "6m", "6M", "7m", "7M", "9m", "9M", "9A", "11P", "11A", "13m", "13M"];

    const showLog = () => {
        console.log(ChordType.all().map(get => get.intervals));
    }

    return (
        <div>
            <button onClick={showLog}>
                log
            </button>
            <Stack direction="row" spacing={0} alignItems="center">
                {optList.map((opt, idx) => <OptBtn opt={opt} holdingChord={holdingChord} setHoldingChord={setHoldingChord} key={idx}></OptBtn>)}
            </Stack>
        </div>
    )
}

export default OptBtnSet
