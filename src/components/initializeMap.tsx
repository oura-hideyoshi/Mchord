import { Connection, Edge, Elements, FlowElement, isEdge, isNode, Node, ReactFlowProps } from "react-flow-renderer";

interface initializeMapProps {
    dataJSON: any[]
}

const initializeMap = ({ dataJSON }: initializeMapProps) => {
    let elementsData: Elements = dataJSON.slice();
    let nodes: FlowElement<Node>[] = elementsData.filter(e => isNode(e));
    let edges: FlowElement<Edge>[] = elementsData.filter(e => isEdge(e));
    console.log('nodes', nodes);
    console.log('edges', edges)

    return elementsData;
}

export default initializeMap