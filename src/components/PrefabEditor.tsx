import Canvas from "./Canvas";
import {Box, OrbitControls} from "@react-three/drei";
import {useParams} from "react-router-dom";
import PrefabEditorGUI from "../components-ui/PrefabEditorGUI";


const PrefabEditor = () => {

    const { id } = useParams();
    // console.log( id );

    return (
        <div style={{display: "flex", height: "100%"}}>
            <Canvas>
                <OrbitControls/>
                <Box/>
            </Canvas>
            <PrefabEditorGUI/>
        </div>
    )
}

export default PrefabEditor;