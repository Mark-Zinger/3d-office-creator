import {Suspense} from 'react';
import GridHelper from "./GridHelper";
import {OrbitControls} from "@react-three/drei";
import {store} from "../app/store";
import {Provider} from "react-redux";
import Canvas from "./Canvas";
import Entity from "./Entity";
import EntityTree from "./EntityTree";




const Game = () => {


    return (
        <Canvas>
            <Provider store={store}>
                <OrbitControls/>
                <GridHelper/>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <pointLight position={[-10, -10, -10]} />

                <Suspense fallback={null}>
                    <EntityTree node="__root__" />
                </Suspense>
            </Provider>
        </Canvas>
    )
}

export default Game;