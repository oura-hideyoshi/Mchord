import React from 'react';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const ToneAndDegSwitch = ({ isToneName, setIsToneName, rootKey }) => {

    const _onChane = () => {
        setIsToneName(!isToneName);
    }

    return (
        <Stack direction="row" spacing={1} alignItems="center">
            <Typography>I</Typography>
            <Switch
                checked={isToneName}
                onChange={_onChane}
            />
            <Typography>{rootKey.tonic}</Typography>
        </Stack>
    )
}

export default ToneAndDegSwitch;