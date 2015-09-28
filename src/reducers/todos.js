import * as ActionTypes from '../constants/ActionTypes.js';

let initialState = [
    {
        id: 1,
        text: 'Mow the lawn',
        completed: false
    },
    {
        id: 2,
        text: 'Wash the car',
        completed: false
    },
    {
        id: 3,
        text: 'Grease the door hinges',
        completed: false
    }
];

export default function todos(state = initialState, action) {

    switch (action.type) {

        case ActionTypes.ADD_TODO:
            return [
                ...state,
                {
                    id: state.length + 1,
                    text: action.text,
                    completed: false
                }
            ];

        case ActionTypes.COMPLETE_TODO:

            return state.map((todo) => {

                if (todo.id === action.id) {
                    todo.completed = !todo.completed;
                }

                return todo;

            });

        case ActionTypes.REMOVE_TODO:
            return state.filter((todo) => todo.id !== action.id);

    }

    return state;

}
