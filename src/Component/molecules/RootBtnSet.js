import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import CodeBtn from "../atoms/CodeBtn";
import KeySelector from '../atoms/KeySelector';

const RootBtnSet = () => {
    const initialKey = 1;
    const [key, setKey] = useState(initialKey);

    return (
        <div>
            <div>
                <CodeBtn initName="C"></CodeBtn>
                <CodeBtn initName="D"></CodeBtn>
                <CodeBtn initName="E"></CodeBtn>
                <CodeBtn initName="F"></CodeBtn>
                <CodeBtn initName="G"></CodeBtn>
                <CodeBtn initName="A"></CodeBtn>
                <CodeBtn initName="B"></CodeBtn>
            </div>
            <KeySelector initialKey={initialKey} key={key} setKey={setKey}></KeySelector>
        </div>
    )
}

export default RootBtnSet;