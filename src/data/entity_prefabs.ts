import {GameEntityPrefab} from "../types/Entity";


const entity_prefabs: Record<string, GameEntityPrefab> = {
    "office_desk": {
        name: "Офисный стол",
        description: "Стол для организации рабочего места сотрудников.",
        gltf_path: "office_desk.glb",
        children_container: {
            is_horizontal: true,
            args: [1.55,0.65],
            position: [0,0.725,-0.04],
        }
    },
    "office_printer": {
        name: "Офисный принтер",
        description: "Стандартный принтер для офиса.",
        gltf_path: "office_printer.glb",
    }
}

export default entity_prefabs;