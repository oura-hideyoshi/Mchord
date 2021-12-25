import React from 'react';
import Footer from "../footer";
import { Global } from '@emotion/react';
import { useState, useEffect } from "react";
import { DisplayChord, InputChordSet } from "../organisms";

function Home() {
    const [chordList, setChordList] = useState([]);
    const [entryChord, setEntryChord] = useState(null);


    // inputChordSetからentryChordにChordが渡されたのを検知し、どうにかする
    useEffect(() => {
        if (entryChord != null) {
            // 現状足すだけ
            // TODO : 目標コードの変更
            setChordList(chordList.concat(entryChord));
            setEntryChord(null);
        }
    }, [entryChord])


    const clear = () => {
        console.clear();
        setChordList([]);
    }


    return (
        <>
            <div>
                <button onClick={clear}>Clear</button>
            </div>
            <Global
                styles={{
                    ".MuiDrawer-root > .MuiPaper-root": {
                        height: `calc(30%)`,
                        overflow: "visible"
                    }
                }}
            />
            <DisplayChord chordList={chordList}></DisplayChord>


            <footer>
                <InputChordSet id="InputCodeSet" handleEntry={setEntryChord}></InputChordSet>
                <Footer></Footer>
            </footer>


        </>
    )
}

export default Home
