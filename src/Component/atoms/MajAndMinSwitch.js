import React, { useState } from 'react';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Key } from "@tonaljs/tonal";

/**
 * メジャーとマイナーを切り替えるボタン
 * @param {*} param0 
 * @returns 
 */
const MajAndMinSwitch = ({ isMajKey, setIsMajKey, rootKey, setRootKey }) => {

    const _onChane = (event) => {
        setIsMajKey(event.target.checked);
        event.target.checked ?
            setRootKey(Key.majorKey(rootKey.tonic))
            :
            setRootKey(Key.minorKey(rootKey.tonic).natural)
    }

    return (
        <Stack direction="row" spacing={1} alignItems="center">
            <Typography>Min</Typography>
            <Switch
                checked={isMajKey}
                onChange={_onChane}
            />
            <Typography>Maj</Typography>
        </Stack>
    )
}

export default MajAndMinSwitch;