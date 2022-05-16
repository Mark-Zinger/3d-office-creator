import Collider from "./Collider";
import ChildrenContainer from "./ChildrenContainer";
import ArrayVector3 from "./ArrayVector3";
import {RequireOnlyOne} from "./RequireOnlyOne";

export interface GameEntityWithOutPrefub extends GameRootEntity {

    prefab_id?: string;
    prefab?: GamePrefab;
    position: [number, number];
    rotation: number;

    parent_id: string;
    colors?: { [key: string]: any };
};

export type GameEntity = RequireOnlyOne<GameEntityWithOutPrefub, 'prefab' | 'prefab_id'>

export interface GamePrefab {

    name: string;
    description?: string;

    gltf_path: string;

    colliders?: Collider[];
    children_container?: ChildrenContainer;

    is_horizontal?: boolean; // <- default: true

    position?: ArrayVector3; // default: [0, 0, 0]
    scale?: ArrayVector3; // default: [1, 1, 1]
    rotation?: ArrayVector3; //default: [0, 0, 0]

    colors?: { [key: string]: any; };
}

export interface GameRootEntity {
    id: string;
    children?: string[];
}

export type GameEntityNode = GameEntity | GameRootEntity;


