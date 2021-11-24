import React from 'react'
import { ChordType } from "@tonaljs/tonal";
import { ButtonBase } from '@mui/material';


/**
 * 
 * @param {{chordType:string, onClick=Function}} param0 
 * @returns 
 */
function ChordTypeBtn({ chordType, onClick }) {

    return (
        <ButtonBase onClick={onClick}>
            {ChordType.get(chordType).aliases[0]}
        </ButtonBase>
    )
}

export default ChordTypeBtn
