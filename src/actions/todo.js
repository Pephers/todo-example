import * as ActionTypes from '../constants/ActionTypes.js';

export function addTodo(text) {

    return {
        type: ActionTypes.ADD_TODO,
        text
    };

}

export function completeTodo(id) {

    return {
        type: ActionTypes.COMPLETE_TODO,
        id
    };

}

export function removeTodo(id) {

    return {
        type: ActionTypes.REMOVE_TODO,
        id
    };

}
