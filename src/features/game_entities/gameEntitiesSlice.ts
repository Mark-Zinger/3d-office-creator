import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import {RootState, store} from "../../app/store";

import { GameEntityNode } from "../../types/Entity";
import default_entities from "../../data/entyties";

const entitiesAdapter = createEntityAdapter<GameEntityNode>();
const initialState = entitiesAdapter.getInitialState();
const filledState = entitiesAdapter.upsertMany(initialState, default_entities);

export const entityesSlice = createSlice({
    name: 'game_entities',
    initialState: filledState,
    reducers: {
        addEntity: entitiesAdapter.addOne,
        removeEntity: entitiesAdapter.removeOne,
        updateEntity: entitiesAdapter.updateOne,
        updateEntities: entitiesAdapter.updateMany,
        upsertEntity: entitiesAdapter.upsertOne,
        upsertEntities: entitiesAdapter.upsertMany,
        addEntities: entitiesAdapter.addMany,
        removeEntities: entitiesAdapter.removeMany,
    }
});

export const { addEntity, updateEntity } = entityesSlice.actions;

export const entitySelectors =  entitiesAdapter.getSelectors((state:RootState) => state.game_entities);

export const selectEntityById = (id:string) => entitySelectors.selectById( store.getState() ,id);

export const selectEntityes = (state:RootState) => state.game_entities;

export default entityesSlice.reducer;