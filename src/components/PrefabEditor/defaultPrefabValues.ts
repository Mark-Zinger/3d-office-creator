import {GamePrefab} from "../../types/Entity";

const defaultPrefabValues: GamePrefab = {
  name: "",
  description: "",
  gltf_path: "",
  colliders: [],
  position: [0,0,0],
  scale: [1,1,1],
  rotation: [0,0,0],
}

export default defaultPrefabValues;