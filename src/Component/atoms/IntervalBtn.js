import React, { useState, useEffect } from "react";
import { Note, Chord, ChordType } from "@tonaljs/tonal";
import { FormGroup, FormControlLabel, Checkbox } from "@mui/material";

/**
 * 
 * @param {{opt:string,chord:}} arg opt:m2, M2, ...
 * @returns 
 */
function IntervalBtn({ opt, holdingChord, setHoldingChord }) {

    const [isChecked, setIsChecked] = useState(holdingChord.intervals.includes(opt));

    // 複数の特定要素のうち全部当てはまったら true を返す関数
    const isAllIncludes = (arr, target) => arr.every(el => target.includes(el));

    /**
     * 現在のChordに対して、optを付与できるか
     * @returns {boolean}
     */
    const canAddOpt = () => {
        const newIntervals = holdingChord.intervals.concat(opt);
        const flag = ChordType.all()
            .find(get => isAllIncludes(newIntervals, get.intervals)
            );
        if (flag != undefined) {
            return true
        }
        else
            return false
    }

    const addOpt = () => {
        const newInterval = holdingChord.intervals.concat(opt);
        setHoldingChord({ intervals: newInterval, tonic: holdingChord.tonic });
    }

    const removeOpt = () => {
        const newInterval = holdingChord.intervals.filter(
            (interval) => interval != opt);
        setHoldingChord({ intervals: newInterval, tonic: holdingChord.tonic });
    }

    const [isEnable, setIsEnable] = useState(canAddOpt());

    useEffect(() => {
        if (holdingChord.intervals.includes(opt))
            setIsChecked(true);
        else
            setIsChecked(false);
        if (canAddOpt())
            setIsEnable(true);
        else
            setIsEnable(false);
    }, [holdingChord]);

    const _onChange = (event) => {
        // チェックされたとき
        if (event.target.checked) {
            addOpt();
            setIsChecked(event.target.checked);
        }
        // チェックが外されたとき
        else {
            removeOpt();
            setIsChecked(event.target.checked);
        }
    }

    return (
        <FormGroup>
            <FormControlLabel
                disabled={!isEnable}
                control={<Checkbox checked={isChecked} onChange={_onChange} />}
                label={opt}
                labelPlacement="top"
                sx={{
                    padding: "0px",
                    margin: "0px"
                }} />
        </FormGroup>
    )
}

export default IntervalBtn
