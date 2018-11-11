import { ADD_ITEM, CHANGE_INPUT_VALUE, DELETE_ITEM } from "./actionTypes";

export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
});

export const getDeleteItemAction = (index) => ({
    type: DELETE_ITEM,
    index
});

export const getAddItemAction = () => ({
    type: ADD_ITEM
});