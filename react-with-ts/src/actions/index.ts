import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

export interface Todo {
    id: number,
    title: string,
    completed: boolean
}

export interface FetchTodosActions {
    type: ActionTypes.FetchTodos,
    payload: Todo[]
}

const url = 'https://jsonplaceholder.typicode.com/todos'

export const fetchTodos = () => {
    return async (dispatch: Dispatch) => {
        const response = await axios.get<Todo[]>(url);

        dispatch<FetchTodosActions>({
            type: ActionTypes.FetchTodos,
            payload: response.data
        })
    }
}
