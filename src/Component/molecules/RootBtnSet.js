import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import CodeBtn from "../atoms/CodeBtn";
import KeySelector from '../atoms/KeySelector';

const RootBtnSet = () => {
    const initialKey = 1;
    const [rootKey, setRootKey] = useState(initialKey);

    return (
        <div>
            <div>
                <CodeBtn rootKey={rootKey} relDeg={0}></CodeBtn>
                <CodeBtn rootKey={rootKey} relDeg={2}></CodeBtn>
                <CodeBtn rootKey={rootKey} relDeg={4}></CodeBtn>
                <CodeBtn rootKey={rootKey} relDeg={5}></CodeBtn>
                <CodeBtn rootKey={rootKey} relDeg={7}></CodeBtn>
                <CodeBtn rootKey={rootKey} relDeg={9}></CodeBtn>
                <CodeBtn rootKey={rootKey} relDeg={11}></CodeBtn>
            </div>
            <KeySelector initialKey={initialKey} rootKey={rootKey} setRootKey={setRootKey}></KeySelector>
        </div>
    )
}

export default RootBtnSet;