import * as React from 'react';
import mapData from "./mapData.json";
import initializeMap from '../../initializeMap';
import TemplateMap from '../../TemplateMap';
import ReactFlow from 'react-flow-renderer';

export interface IMapProps {
}

const Map = ({ }: IMapProps): JSX.Element => {
    console.log(mapData)
    const elements = initializeMap({ dataJSON: mapData })

    return (
        <div style={{width:"100vw", height:"100vh"}}>
            <ReactFlow elements={elements} />
        </div>
    )
}

export default Map
