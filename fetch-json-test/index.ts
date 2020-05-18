import axios from 'axios';

// The first todo available at the test API
const jsonTestDataUrl = 'https://jsonplaceholder.typicode.com/todos/1';

// Print out todo information to the console
const logTodo = (id: number, title: string, completed: boolean) => {
    console.log(`
        The Todo with ID: ${ id }
        Has a title of: ${ title }
        Is it finished? ${ completed }
    `);
};

// Our definition for a Todo
interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

// Call the API and explicitly state that response.data should fit the Todo interface
axios.get(jsonTestDataUrl).then((response) => {
    const todo = response.data as Todo;

    // Extract and print the details
    const id = todo.id,
        title = todo.title,
        completed = todo.completed;

    logTodo(id, title, completed);
});
