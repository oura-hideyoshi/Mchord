import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { CodeBtn, KeySelector, ToneAndDegSwitch } from "../atoms/index";

const RootBtnSet = () => {
    const initialKey = 1;
    const [rootKey, setRootKey] = useState(initialKey);
    const [isToneName, setIsToneName] = useState(true);

    return (
        <div>
            <div>
                <CodeBtn rootKey={rootKey} relDeg={0} isToneName={isToneName}></CodeBtn>
                <CodeBtn rootKey={rootKey} relDeg={2} isToneName={isToneName}></CodeBtn>
                <CodeBtn rootKey={rootKey} relDeg={4} isToneName={isToneName}></CodeBtn>
                <CodeBtn rootKey={rootKey} relDeg={5} isToneName={isToneName}></CodeBtn>
                <CodeBtn rootKey={rootKey} relDeg={7} isToneName={isToneName}></CodeBtn>
                <CodeBtn rootKey={rootKey} relDeg={9} isToneName={isToneName}></CodeBtn>
                <CodeBtn rootKey={rootKey} relDeg={11} isToneName={isToneName}></CodeBtn>
            </div>
            <KeySelector initialKey={initialKey} rootKey={rootKey} setRootKey={setRootKey}></KeySelector>
            <ToneAndDegSwitch isToneName={isToneName} setIsToneName={setIsToneName}></ToneAndDegSwitch>
        </div >
    )
}

export default RootBtnSet;