import {useAppSelector} from "../app/hooks";
import {selectEntityById} from "../features/game_entities/gameEntitiesSlice";
import Entity from "./Entity";
import {GameEntity} from "../types/Entity";

interface EntityTreeProps {
    node: string;
}

const EntityTree = ({node}:EntityTreeProps) => {

    const entity = selectEntityById(node);

    return (
        <>{ entity?.children && entity.children.map(
            child => {
                const childEntity = selectEntityById(child) as GameEntity;

                if(childEntity) {
                    return (<Entity {...childEntity} key={child}/>)
                }
                return null;
            }
           )
        }</>
    );
}


export default EntityTree;