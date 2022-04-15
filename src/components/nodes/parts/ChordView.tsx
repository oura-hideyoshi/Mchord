import React, { useContext } from 'react';
import { Chord } from "@tonaljs/chord";
import { Key } from "@tonaljs/key";
import { MchordContext } from '../../../components/pages/Top';
import { allAliases, defaultAliases } from '../../../components/propaties/defaultAliases';
import { chooseAliase } from '../../../components/libs/utils';
import { Progression } from '@tonaljs/tonal';
import { MmKey } from '~/components/libs/types';
import { css } from '@emotion/css';

interface props {
    MKey: MmKey,
    children: Chord,
    scale?: number
}

const defaultStyle = {
    tonicFontSize: 20,
    romanFontSize: 10,
}

export const ChordView = ({ MKey, children, scale = 1, ...props }: props) => {
    const { isRomanNumeral } = useContext(MchordContext);
    const romanNumeral = Progression.toRomanNumerals(MKey.tonic, [children.tonic as string])[0]
    return (
        <span
            className={css({
                position: "relative",
                fontSize: `${defaultStyle.tonicFontSize * scale}px`,
            })}
        >
            {isRomanNumeral ? `${romanNumeral}` : `${children.tonic}`}{chooseAliase(children)}
            <span
                className={css({
                    position: "absolute",
                    fontSize: `${defaultStyle.romanFontSize * scale}px`,
                    bottom: `${-15 * scale}px`,
                    left: "50%",
                    transform: "translate(-50%, -50%)"
                })}>
                {isRomanNumeral ? `${children.tonic}` : `${romanNumeral}`}
            </span>
        </span>
    )
}
