import { Note, Key, Chord, ChordType } from "@tonaljs/tonal";
import { Button, TextField, Grid, Typography, TableContainer, Table, TableBody, TableRow, TableCell, Paper } from "@mui/material";
import React, { useRef } from 'react';
import { Input } from "@material-ui/core";
import { Label } from "@material-ui/icons";



function Test() {

    let chord = Chord.getChord("M", "C", "G");
    console.log(`chord`, chord)
    chord.root = "D"
    console.log(`chord`, chord)

    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                <Button onClick={() => console.clear()}>Clear</Button>
                            </TableCell>
                        </TableRow>
                        {/* note.get */}
                        <TableRow>
                            <TableCell>
                                <Typography variant={"h6"}>Note.get()</Typography >
                            </TableCell>
                            <TableCell>
                                <input id="note_get" />
                            </TableCell>
                            <TableCell>
                                <Button onClick={() => console.log(Note.get(document.getElementById("note_get").value))}>log</Button>
                            </TableCell>
                        </TableRow>
                        {/* chord.get */}
                        <TableRow>
                            <TableCell>
                                <Typography variant={"h6"}>Chord.get()</Typography >
                            </TableCell>
                            <TableCell>
                                <input id="chord_get" />
                            </TableCell>
                            <TableCell>
                                <Button onClick={() => console.log(Chord.get(document.getElementById("chord_get").value))}>log</Button>
                            </TableCell>
                        </TableRow>
                        {/* chord.getChord */}
                        <TableRow>
                            <TableCell>
                                <Typography variant={"h6"}>chord.getChord()</Typography>
                            </TableCell>
                            <TableCell>
                                <input id="chord_getChord1"></input>
                            </TableCell>
                            <TableCell>
                                <input id="chord_getChord2"></input>
                            </TableCell>
                            <TableCell>
                                <input id="chord_getChord3"></input>
                            </TableCell>
                            <TableCell>
                                <Button onClick={() => console.log(Chord.getChord(document.getElementById("chord_getChord1").value, document.getElementById("chord_getChord2").value, document.getElementById("chord_getChord3").value))}>log</Button>
                            </TableCell>
                        </TableRow>
                        {/* chord.detect */}
                        <TableRow>
                            <TableCell>
                                <Typography variant={"h6"}>Chord.detect()</Typography >
                            </TableCell>
                            <TableCell>
                                <input id="chord_detect" />
                            </TableCell>
                            <TableCell>
                                <Button onClick={() => { console.log(Chord.detect(document.getElementById("chord_detect").value.split(" "))) }}>log</Button>
                            </TableCell>
                        </TableRow>
                        {/* key.majorKey */}
                        <TableRow>
                            <TableCell>
                                <Typography variant={"h6"}>Key.majorKey()</Typography >
                            </TableCell>
                            <TableCell>
                                <input id="key_majorKey" />
                            </TableCell>
                            <TableCell>
                                <Button onClick={() => console.log(Key.majorKey(document.getElementById("key_majorKey").value))}>log</Button>
                            </TableCell>
                        </TableRow>
                        {/* key.minorKey */}
                        <TableRow>
                            <TableCell>
                                <Typography variant={"h6"}>Key.minorKey()</Typography >
                            </TableCell>
                            <TableCell>
                                <input id="key_minorKey" />
                            </TableCell>
                            <TableCell>
                                <Button onClick={() => console.log(Key.minorKey(document.getElementById("key_minorKey").value))}>log</Button>
                            </TableCell>
                        </TableRow>
                        {/* chordType.all*() */}
                        <TableRow>
                            <TableCell>
                                <Typography variant={"h6"}>ChordType.all()</Typography >
                            </TableCell>
                            <TableCell>

                            </TableCell>
                            <TableCell>
                                <Button onClick={() => console.log(ChordType.all())}>log</Button>
                            </TableCell>
                        </TableRow>
                        {/* chordType.get() */}
                        <TableRow>
                            <TableCell>
                                <Typography variant={"h6"}>ChordType.get()</Typography >
                            </TableCell>
                            <TableCell>
                                <input id="chordType_get" />
                            </TableCell>
                            <TableCell>
                                <Button onClick={() => console.log(ChordType.get(document.getElementById("chordType_get").value))}>log</Button>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>

        </>
    )
}

export default Test
