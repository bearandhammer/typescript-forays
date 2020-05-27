import axios from 'axios';

axios.post('http://localhost:3000/users', {
    name: 'myname',
    age: 20
});

axios.get('http://localhost:3000/users/1')
    .then(response => {
        console.log(response.data);
    });

console.log('Testing a commit omitting db.json');