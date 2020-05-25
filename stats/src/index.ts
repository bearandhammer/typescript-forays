import fs from 'fs';

const matches = fs.readFileSync('football.csv', {
    encoding: 'utf-8'           // String representing content
});

console.log(matches);
