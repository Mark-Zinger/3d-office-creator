import Canvas from "./Canvas";
import {Box} from "@react-three/drei";
import {useParams} from "react-router-dom";


const PrefabEditor = () => {

    const { id } = useParams();
    // console.log( id );

    return (
        <Canvas>
            <Box/>
        </Canvas>
    )
}

export default PrefabEditor;