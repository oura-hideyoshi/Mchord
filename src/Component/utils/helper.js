export const absDeg2ToneNameDic = {
    1: "C",
    2: "C♯",
    3: "D",
    4: "D♯",
    5: "E",
    6: "F",
    7: "F♯",
    8: "G",
    9: "G♯",
    10: "A",
    11: "A♯",
    12: "B",
}

export const relDeg2DegNameDic = {
    1: "I",
    2: "I♯",
    3: "II",
    4: "II♯",
    5: "III",
    6: "IV",
    7: "IV♯",
    8: "V",
    9: "V♯",
    10: "VI",
    11: "VI♯",
    12: "VII",
}

export const deg2Tone = (_rootKey, _relDeg, _isToneName) => {
    const absDeg = 1 + (parseInt(_rootKey) + parseInt(_relDeg) - 1) % 12; // 入力を1~12に抑える
    return _isToneName ? absDeg2ToneNameDic[absDeg] : relDeg2DegNameDic[_relDeg + 1];
}