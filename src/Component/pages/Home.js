import React from 'react';
import { useState, useEffect } from "react";
import { DisplayChord, InputChordSet} from "../organisms";

function Home() {
    const [chordList, setChordList] = useState([]);
    const [entryChord, setEntryChord] = useState(null);

    // inputChordSetからentryChordにChordが渡されたのを検知し、どうにかする
    useEffect(() => {
        if (entryChord != null) {
            setChordList(chordList.concat(entryChord));
            setEntryChord(null);
        }
    }, [entryChord])

    return (
        <>
            <DisplayChord chordList={chordList}></DisplayChord>
            <InputChordSet setEntryChord={setEntryChord}></InputChordSet>
        </>
    )
}

export default Home
