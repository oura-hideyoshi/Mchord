import { ChordType } from '@tonaljs/tonal';
import React from 'react'
import { allMyAliases } from '../libs/utils'

interface props extends React.HTMLAttributes<HTMLSelectElement> {

}


export const ChordTypeSelector = ({ ...props }: props) => {
    const myAliases = allMyAliases();
    let Unknown = [];
    let Major = [];
    let Minor = [];
    let Augumented = [];
    let Diminished = [];
    myAliases.forEach(aliase => {
        const q = ChordType.get(aliase).quality;
        q == "Unknown" ? Unknown.push(aliase) :
            q == "Major" ? Major.push(aliase) :
                q == "Minor" ? Minor.push(aliase) :
                    q == "Augmented" ? Augumented.push(aliase) :
                        Diminished.push(aliase)
    })
    return (
        <select
            {...props}
        >
            {myAliases.map(aliase => {
                return (
                    <option key={aliase} value={aliase}>{aliase}</option>
                )
            })}
        </select>
    )
}
