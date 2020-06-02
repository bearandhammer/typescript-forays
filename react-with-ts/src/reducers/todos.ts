import { Todo, FetchTodosActions } from '../actions';
import { ActionTypes } from '../actions/types';

// Reductor for Todos
export const todosReducer = (state: Todo[] = [], action: FetchTodosActions) => {
    switch (action.type) {
        case ActionTypes.FetchTodos:
            return action.payload;
        default:
            return state;
    }
};
