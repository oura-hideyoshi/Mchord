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

/**
 * 
 * @param {number} _rootKey ルートキー [1 ~ 12]
 * @param {number} _relDeg 相対度数 [0 ~ 11]
 * @param {boolean} _isToneName 
 * @returns 
 */
export const deg2Tone = (_rootKey, _relDeg, _isToneName) => {
    if (_rootKey < 1 || 12 < _rootKey)
        throw new Error("_rootKey" + _rootKey + " must be 1 or more and 12 or less");
    if (_relDeg < 0 || 11 < _relDeg)
        throw new Error("_reldeg : " + _relDeg + " must be 0 or more and 11 or less");
    const absDeg = 1 + (parseInt(_rootKey) + parseInt(_relDeg) - 1) % 12; // 絶対度数
    return _isToneName ? absDeg2ToneNameDic[absDeg] : relDeg2DegNameDic[_relDeg + 1];
}