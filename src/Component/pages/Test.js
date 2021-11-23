import { ChordBtn } from "../atoms/index"
import { Key, Chord } from "@tonaljs/tonal";

import React from 'react';

function Test() {
    return (
        <div>
            <div>
                <ChordBtn rootKey={Key.majorKey("C")} chord={Chord.get("C")} isToneName={false}></ChordBtn>
            </div>
        </div>
    )
}

export default Test
