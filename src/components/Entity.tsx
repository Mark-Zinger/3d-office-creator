import {GameEntity} from "../types/Entity";
import entity_prefabs from "../data/entity_prefabs";
import {Plane, useGLTF} from "@react-three/drei";
import {FC} from "react";
import EntityTree from "./EntityTree";


const assets_api_path = '/assets/'

const Entity = (props: GameEntity) => {
    const { prefab_id, id } = props

    const prefab = entity_prefabs[prefab_id];

    const {
        is_horizontal=true
    } = prefab;

    console.log({prefab_id})

    const { children_container=false } = prefab;
    const {scene} = useGLTF(assets_api_path + prefab.gltf_path);

    return (
        <group>
            <primitive object={scene} />

            {children_container &&
                <>
                    <Plane
                        material-wireframe={true}
                        rotation={[ is_horizontal ? Math.PI/2: 0 ,0 ,0 ]}
                        args={[
                            ...children_container.args,
                            children_container.args[0]*10,
                            children_container.args[1]*10
                        ]}
                        position={children_container.position}
                    />
                    <group position={children_container.position}>
                        { props.children && <EntityTree node={id}/>}
                    </group>
                </>
            }

        </group>
    );
}

export default Entity;