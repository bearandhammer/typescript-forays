import fs from 'fs';

const matches = fs.readFileSync('football.csv', {
    // String representing content
    encoding: 'utf-8'
})
.split('\n')
//.map(match => match.split(','));
.map((match: string): string[] => {
    return match.split(',');
});

console.log(matches);
