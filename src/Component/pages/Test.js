import { Note, Key, Chord, ChordType } from "@tonaljs/tonal";
import { Button, TextField, Grid, Typography, TableContainer, Table, TableBody, TableRow, TableCell, Paper } from "@mui/material";
import React, { useRef } from 'react';
import { Input } from "@material-ui/core";
import { Label } from "@material-ui/icons";



function Test() {

    const noteName = useRef("");
    const chordName = useRef("");
    const chordDetectName = useRef("");
    const keyMajorName = useRef("");
    const keyMinorName = useRef("");
    const chordTypeName = useRef("");

    return (
        <TableContainer component={Paper}>
            <TableBody>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
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
                            <input ref={noteName} />
                        </TableCell>
                        <TableCell>
                            <Button onClick={() => console.log(Note.get(noteName.current.value))}>log</Button>
                        </TableCell>
                    </TableRow>
                    {/* chord.get */}
                    <TableRow>
                        <TableCell>
                            <Typography variant={"h6"}>Chord.get()</Typography >
                        </TableCell>
                        <TableCell>
                            <input ref={chordName} />
                        </TableCell>
                        <TableCell>
                            <Button onClick={() => console.log(Chord.get(chordName.current.value))}>log</Button>
                        </TableCell>
                    </TableRow>
                    {/* chord.detect */}
                    <TableRow>
                        <TableCell>
                            <Typography variant={"h6"}>Chord.detect()</Typography >
                        </TableCell>
                        <TableCell>
                            <input ref={chordDetectName} />
                        </TableCell>
                        <TableCell>
                            <Button onClick={() => console.log(Chord.detect(chordDetectName.current.value.split(",")), chordDetectName.current.value.split(","))}>log</Button>
                        </TableCell>
                    </TableRow>
                    {/* key.majorKey */}
                    <TableRow>
                        <TableCell>
                            <Typography variant={"h6"}>Key.majorKey()</Typography >
                        </TableCell>
                        <TableCell>
                            <input ref={keyMajorName} />
                        </TableCell>
                        <TableCell>
                            <Button onClick={() => console.log(Key.majorKey(keyMajorName.current.value))}>log</Button>
                        </TableCell>
                    </TableRow>
                    {/* key.minorKey */}
                    <TableRow>
                        <TableCell>
                            <Typography variant={"h6"}>Key.minorKey()</Typography >
                        </TableCell>
                        <TableCell>
                            <input ref={keyMinorName} />
                        </TableCell>
                        <TableCell>
                            <Button onClick={() => console.log(Key.minorKey(keyMinorName.current.value))}>log</Button>
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
                            <input ref={chordTypeName} />
                        </TableCell>
                        <TableCell>
                            <Button onClick={() => console.log(ChordType.get(chordTypeName.current.value))}>log</Button>
                        </TableCell>
                    </TableRow>
                </Table>
            </TableBody>
        </TableContainer>
    )
}

export default Test
