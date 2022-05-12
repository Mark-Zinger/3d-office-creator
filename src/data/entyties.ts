import {GameEntityNode} from "../types/Entity";

const entyties: Array<GameEntityNode> = [
    { id: "__root__" },
    {
        id: "1",
        prefab_id: "office_desk",
        position: [ 1, 1 ],
        rotation: 0,

        parent_id: "__root__",
        children: ["2"]
    },
    {
        id: "2",
        prefab_id: "office_printer",
        position: [ 4, 2 ],
        rotation: 0,
        parent_id: "1",
    }
]

const root_nodes = entyties.filter(e => "parent_id" in e && e.parent_id === '__root__').map(e => e.id);

entyties.forEach(e => { if ( e.id === '__root__') e.children = root_nodes; });

export default entyties;