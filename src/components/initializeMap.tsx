import { Connection, Edge, Elements, isEdge, isNode, Node, ReactFlowProps } from "react-flow-renderer";

interface initializeMapProps {
    dataJSON: any[]
}

const initializeMap = ({ dataJSON }: initializeMapProps) => {
    const elementsData: Elements = dataJSON.slice()

    return elementsData;
}

export default initializeMap