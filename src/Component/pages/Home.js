import React from 'react';
import { Global } from '@emotion/react';
import { useState, useEffect } from "react";
import { DisplayChord, InputChordSet } from "../organisms";
import { SwipeableDrawer, Box, } from "@mui/material";
import { styled } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

function Home() {
    const [chordList, setChordList] = useState([]);
    const [entryChord, setEntryChord] = useState(null);
    const [isOpen, setIsOpen] = useState(false)

    // inputChordSetからentryChordにChordが渡されたのを検知し、どうにかする
    useEffect(() => {
        if (entryChord != null) {
            // 現状足すだけ
            // TODO : 目標コードの変更
            setChordList(chordList.concat(entryChord));
            setEntryChord(null);
        }
    }, [entryChord])

    const Puller = styled(Box)(({ theme }) => ({
        width: 30,
        height: 6,
        backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
        borderRadius: 3,
        position: 'absolute',
        top: 8,
        left: 'calc(50% - 15px)',
    }));

    const drawerBleeding = 56;

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
                        height: `calc(50% - ${drawerBleeding}px)`,
                        overflow: "visible"
                    }
                }}
            />
            <DisplayChord chordList={chordList}></DisplayChord>

            <div>
                <button onClick={() => setIsOpen(true)}>open</button>
            </div>
            <SwipeableDrawer
                anchor="bottom"
                open={isOpen}
                onClose={() => setIsOpen(false)}
                onOpen={() => setIsOpen(true)}
                swipeAreaWidth={drawerBleeding}
                disableSwipeToOpen={false}
                ModalProps={{
                    keepMounted: true,
                }}
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: -50,
                        borderTopLeftRadius: 8,
                        borderTopRightRadius: 8,
                        visibility: 'visible',
                        right: 0,
                        left: 0,
                    }}
                >
                    <Puller />
                </Box>
                <InputChordSet handleEntry={setEntryChord}></InputChordSet>
            </SwipeableDrawer>

        </>
    )
}

export default Home
