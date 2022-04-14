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
    children: Chord
}

export const ChordView = ({ MKey, children, ...props }: props) => {
    const { isRomanNumeral } = useContext(MchordContext);
    const romanNumeral = Progression.toRomanNumerals(MKey.tonic, [children.tonic as string])[0]
    return (
        <div>
            <span
                className={css({
                    position: "relative",
                })}
            >
                {isRomanNumeral ? `${romanNumeral}` : `${children.tonic}`}{chooseAliase(children)}
                <span
                    className={css({
                        position: "absolute",
                        fontSize: "10px",
                        bottom: "-18px",
                        left: "50%",
                        transform: "translate(-50%, -50%)"
                    })}>
                    {isRomanNumeral ? `${children.tonic}` : `${romanNumeral}`}
                </span>
            </span>
        </div>
    )
}
