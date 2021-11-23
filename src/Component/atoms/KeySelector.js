import { TonicSelector, MajAndMinSwitch } from "./index";
import { Stack } from "@mui/material";

function KeySelector({ rootKey, isMajKey, setRootKey, setIsMajKey }) {
    return (
        <Stack direction="row" spacing={1} alignItems="center">
            <TonicSelector rootKey={rootKey} setRootKey={setRootKey} isMajKey={isMajKey}></TonicSelector>
            <MajAndMinSwitch rootKey={rootKey} isMajKey={isMajKey} setRootKey={setRootKey} setIsMajKey={setIsMajKey} ></MajAndMinSwitch>
        </Stack>
    )
}

export default KeySelector

