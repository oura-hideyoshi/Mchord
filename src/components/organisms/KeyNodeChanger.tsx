import { useState } from "react";
import { useReactFlow, Node } from "react-flow-renderer";
import { setNodeKey } from "../libs/hooks";
import { KeyNodeData, keySignature } from "../libs/types";
import { IsMajorChanger } from "./IsMajorChanger";

export const KeyNodeChanger = ({ selectedNode }: { selectedNode: Node<KeyNodeData> }) => {
    const instance = useReactFlow();

    const [keySig, setKeySig] = useState(selectedNode.data.keySig);
    const [isMajor, setIsMajor] = useState(selectedNode.data.isMajor);
    const handelChangeTonic = (e: any) => {
        setNodeKey(instance, e.target.value as keySignature, selectedNode.data.isMajor as boolean);
        setKeySig(e.target.value as keySignature);
    }
    const handleChangeIsMajor = (val: boolean) => {
        console.log('val', val)
        setNodeKey(instance, keySig, val);
        setIsMajor(val);
    }
    return (
        <div>
            <select
                name="key"
                value={keySig}
                onChange={handelChangeTonic}
                style={{ width: "50%", height: "50px" }}
            >
                <option value="">C</option>
                <option value="#">G</option>
                <option value="##">D</option>
                <option value="###">A</option>
                <option value="####">E</option>
                <option value="#####">B</option>
                <option value="######">Gb / F#</option>
                <option value="b">F</option>
                <option value="bb">Bb</option>
                <option value="bbb">Eb</option>
                <option value="bbbb">Ab</option>
                <option value="bbbbb">Db</option>
            </select>
            <IsMajorChanger isMajor={isMajor} onChangeIsMajor={handleChangeIsMajor} />
        </div>
    )
}