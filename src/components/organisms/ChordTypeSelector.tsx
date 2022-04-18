import { css } from '@emotion/css';
import { ChordType } from '@tonaljs/tonal';
import React from 'react'
import { allMyAliases } from '../libs/utils'
import { PieSelector } from '../module/PieSelector';

interface props {
    onSelect: (val: string) => void,
}


export const ChordTypeSelector = ({ onSelect, ...props }: props) => {
    const myAliases = allMyAliases();
    const Unknown = myAliases.filter(aliase => ChordType.get(aliase).quality == "Unknown");
    const Major = myAliases.filter(aliase => ChordType.get(aliase).quality == "Major");
    const Minor = myAliases.filter(aliase => ChordType.get(aliase).quality == "Minor");
    const Augumented = myAliases.filter(aliase => ChordType.get(aliase).quality == "Augmented");
    const Diminished = myAliases.filter(aliase => ChordType.get(aliase).quality == "Diminished");

    const Btn = ({ ...props }: React.HTMLAttributes<HTMLButtonElement>) =>
        <button className={css({
            width: "90%",
            height: "25px",
            margin: "5px",

        })}>
            {props.children}
        </button>
    return (
        <div className={css({
            display: "flex",
            flexDirection: "column"
        })}>
            <PieSelector
                values={Unknown}
                onSelect={onSelect}
            >
                <Btn>Unk</Btn>
            </PieSelector>
            <PieSelector
                values={Major}
                onSelect={onSelect}
            >
                <Btn>Major</Btn>
            </PieSelector>
            <PieSelector
                values={Minor}
                onSelect={onSelect}
            >
                <Btn>Minor</Btn>
            </PieSelector>
            <PieSelector
                values={Augumented}
                onSelect={onSelect}
            >
                <Btn>Augumented</Btn>
            </PieSelector>
            <PieSelector
                values={Diminished}
                onSelect={onSelect}
            >
                <Btn>Diminished</Btn>
            </PieSelector>
        </div>
    )
}
